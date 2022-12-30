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
  const [skus, setSkus] = useState({})
  const [currentSku, setCurrentSku] = useState('')

  useEffect(() => {
    const data = window.localStorage.getItem('your_outfit_storage')
    if (data !== null) { changeOutfit(JSON.parse(data)) }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('your_outfit_storage', JSON.stringify(yourOutfit))
  }, [yourOutfit])

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
    if (styles.length > 0 || Object.keys(currentStyle).length === 0) {
      styles.forEach(style => {
        if (style['default?']) {
          setCurrentStyle(style)
          setSkus(style.skus)

          let firstPhoto = style.photos[0]
          setMainImage(firstPhoto.url)
          setImageArr(style.photos)
        }
      })
      if (styles.length === 1) {
        let thisStyle = styles[0]
        setCurrentStyle(thisStyle)
        setSkus(thisStyle.skus)

        let firstPhoto = thisStyle.photos[0]
        setMainImage(firstPhoto.url)
        setImageArr(thisStyle.photos)
      }
    }
  }, [styles])

  useEffect(() => {
    let photos = currentStyle.photos
    setImageArr(photos)
  }, [currentStyle])


  return (

    <div className="index">
      <nav><h1 id="header">Atelier</h1></nav>
      <Overview
        // initial data
        productNum={productNum} product={product} metadata={metadata}
        // style section
        styles={styles} currentStyle={currentStyle} setCurrentStyle={(style) => setCurrentStyle(style)}
        view={view} setView={(newView) => setView(newView)}
        mainImage={mainImage} setMainImage={(url) => setMainImage(url)}
        imageArr={imageArr} setImageArr={(arr) => setImageArr(arr)}
        // outfit
        outfit={yourOutfit} changeOutfit={(arr) => changeOutfit(arr)}
        // cart selection
        skus={skus} setSkus={(obj) => setSkus(obj)}
        currentSku={currentSku} setCurrentSku={(sku) => setCurrentSku(sku)}
      />
      <Related productNum={productNum} setProductNum={(newNum) => {setProductNum(newNum)}} product={product} styles={styles} related={related} yourOutfit={yourOutfit} changeOutfit={(arr) => {changeOutfit(arr)}}/>
      <Questions productNum={productNum} product={product}/>
      <Reviews productNum={productNum} product={product} metadata={metadata}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));

