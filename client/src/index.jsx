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
  const [outfitList, setOutfitList] = useState([])
  const [metadata, setMetadata] = useState({})

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

  let toggleStar = (id) => {
    let newArr = outfitList
    if (newArr.length === 0) {
      newArr.push(id)
    } else {
      for (var i = 0; i < newArr.length; i++) {
        if (newArr[i] === id) {
          newArr.splice(i, 1)
        } else {
          newArr.push(id)
        }
      }
    }
    setOutfitList(newArr)
  }

  return (
    <div>
      <h1>Atelier</h1>
      <Overview productNum={productNum} product={product} styles={styles} metadata={metadata} toggleStar={(id) => toggleStar(id)} />
      <Related productNum={productNum} setProductNum={setProductNum} product={product} styles={styles} related={related}/>
      <Questions productNum={productNum} product={product}/>
      <Reviews productNum={productNum} metadata={metadata}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));