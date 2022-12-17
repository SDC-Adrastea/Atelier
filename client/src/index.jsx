import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// Components
import { Overview } from './components/Overview.jsx';
import { Related } from './components/Related.jsx';
import { Questions } from './components/Questions.jsx';
import { Reviews } from './components/Reviews.jsx';

const App = (props) => {
  const sampleID = 71699;
  const [productNum, setProductNum] = useState(sampleID)
  const [product, setProduct] = useState({})
  const [styles, setStyles] = useState([])
  const [related, setRelated] = useState([])
  const [metadata, setMetadata] = useState({})
  const [yourOutfit, changeOutfit] = useState([])
  // Overview-Specific State
  const [currentStyle, setCurrentStyle] = useState({})
  const [view, setView] = useState('default')
  const [mainImage, setMainImage] = useState('')
  const [imageArr, setImageArr] = useState([])

  useEffect(() => {
    axios.get('/currentProduct', {
      params: { productNum }
    })
      .then(data => {
        setProduct(data.data.product)
        setStyles(data.data.styles.results)
        setRelated(data.data.related)
      })
      .catch(err => console.log('err in index.jsx getProduct', err))

    axios.get('/getMetadata', {
      params: { productNum }
    })
      .then(data => {
        setMetadata(data.data)
      })
      .catch(err => console.log('err in index.jsx metadata'))
  }, [productNum])

  useEffect(() => {

  }, [related])

  useEffect(() => {
    if (styles.length > 0 && Object.keys(currentStyle).length === 0) {
      styles.forEach(style => {
        if (style['default?']) {
          setCurrentStyle(style)

          let firstPhoto = style.photos[0]
          setMainImage(firstPhoto.url)
          setImageArr(style.photos)
        }
      })
    }
  }, [styles])


  return (
    <div>
      <h1>Atelier</h1>
      <Overview
        // initial data
        productNum={productNum}
        product={product}
        metadata={metadata}
        // styles
        styles={styles}
        currentStyle={currentStyle}
        setCurrentStyle={(style) => { setCurrentStyle(style) }}
        view={view}
        setView={(newView) => setView(newView)}
        mainImage={mainImage}
        setMainImage={(url) => setMainImage(url)}
        imageArr={imageArr}
        setImageArr={(arr) => setImageArr(arr)}
        // outfit
        outfit={yourOutfit}
        changeOutfit={(arr) => { changeOutfit(arr) }}
      />
      <Related productNum={productNum} setProductNum={(newNum) => { setProductNum(newNum) }} product={product} styles={styles} related={related} yourOutfit={yourOutfit} changeOutfit={(arr) => { changeOutfit(arr) }} />
      <Questions productNum={productNum} product={product} />
      <Reviews productNum={productNum} metadata={metadata} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));