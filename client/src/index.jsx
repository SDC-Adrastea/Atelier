import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// Components
import { Overview } from './components/Overview.jsx';
import { Related } from './components/Related.jsx';
import { Questions } from './components/Questions.jsx';
import { Reviews } from './components/Reviews.jsx';
// API functions
import { ProductsGet } from './api-docs/ProductsAPI.js';

const App = () => {

  console.log('ProductsGet:', ProductsGet(71697));

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