import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// Components
import { Overview } from './components/Overview.jsx';
import { Related } from './components/Related.jsx';
import { Questions } from './components/Questions.jsx';
import { Reviews } from './components/Reviews.jsx';
// API functions
import { ProductsGet, currentProduct } from './api-docs/ProductsAPI.js';
import { CartGet, CartPost } from './api-docs/CartAPI.js';

const App = () => {
  const sampleID = 71697;

  // let products = Promise.resolve(ProductsGet());
  // let current = Promise.resolve(currentProduct(sampleID));

  // Promise.allSettled([products, current])
  //   .then(results => {
  //     let productList = [];
  //     results.forEach(result => {
  //       productList.push(result.value);
  //     })
  //     console.log('results', productList);
  //   })
  //   .catch(err => console.log('err in allsettled', err));

  const [productNum, setProduct] = useState(sampleID);

  return (
    <div>
      <h1>Atelier</h1>
      <Overview productNum={productNum} />
      {/* <Related productNum={productNum} setProduct={setProduct}/> */}
      <Questions productNum={productNum} />
      {/* <Reviews productNum={productNum}/> */}
      <h2>Meow</h2>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));