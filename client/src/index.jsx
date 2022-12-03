import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// Components
import { Overview } from './components/Overview.jsx';
import { Related } from './components/Related.jsx';
import { Questions } from './components/Questions.jsx';
import { Reviews } from './components/Reviews.jsx';
// API functions
import { ProductsGet, currentProduct } from './api-docs/ProductsAPI.js';
import { CartGet, CartPost } from './api-docs/CartAPI.js';

const App = (props) => {
  const sampleID = 71697;
  const [productNum, setProductNum] = useState(sampleID)
  const [product, setProduct] = useState({})
  const [styles, setStyles] = useState([])
  const [related, setRelated] = useState([])

  useEffect(() => {
    currentProduct(productNum)
        .then(data => {
          // console.log('data in index.jsx', data)
          setProduct(data.product)
          setStyles(data.styles.results)
          setRelated(data.related)
        })
        .catch(err => console.log('err in index.jsx fetch', err))
  }, [])

return (
  <div>
    <h1>Atelier</h1>
    <Overview productNum={productNum} product={product} styles={styles} />
    {/* <Related productNum={productNum} setProduct={setProduct}/> */}
    <Questions productNum={productNum} />
    {/* <Reviews productNum={productNum}/> */}
    <h2>Meow</h2>
  </div>
)
}

ReactDOM.render(<App />, document.getElementById('app'));