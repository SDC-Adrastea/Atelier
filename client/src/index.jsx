import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// Components
import { Overview } from './components/Overview.jsx';
import { Related } from './components/Related.jsx';
import { Questions } from './components/Questions.jsx';
import { Reviews } from './components/Reviews.jsx';
// API functions
import { ProductsGet, SingleProductGet, Styles, Similar } from './api-docs/ProductsAPI.js';

const App = () => {

  let products = ProductsGet();
  let thisProduct = SingleProductGet(71697);
  let styles = Styles(71697);
  let similar = Similar(71697);

  console.log('Products:', products);
  console.log('Single Product:', thisProduct);
  console.log('Single Product Styles:', styles);
  console.log('Similar Products:', similar);

  const [productNum, setProduct] = useState(71697);

  return (
    <div>
      <h1>Atelier</h1>
      <Overview productNum={productNum} />
      {/* <Related productNum={productNum} setProduct={setProduct}/> */}
      <Questions productNum={productNum}/>
      {/* <Reviews productNum={productNum}/> */}
      <h2>Meow</h2>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));