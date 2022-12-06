import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// Components
import { Overview } from './components/Overview.jsx';
import { Related } from './components/Related.jsx';
import { Questions } from './components/Questions.jsx';
import { Reviews } from './components/Reviews.jsx';


const App = (props) => {
  const sampleID = 71697;
  const [productNum, setProductNum] = useState(sampleID)
  const [product, setProduct] = useState({})
  const [styles, setStyles] = useState([])
  const [related, setRelated] = useState([])

  useEffect(() => {
    axios.get('/currentProduct', {
      params: { productNum }
    })
      .then(data => {
        setProduct(data.data.product)
        setStyles(data.data.styles.results)
        setRelated(data.data.related)
      })
      .catch(err => console.log('err in index.jsx fetch', err))
  }, [])

  return (
    <div>
      <h1>Atelier</h1>

      <Overview productNum={productNum} product={product} styles={styles} />
      <Related productNum={productNum} setProduct={setProduct} product={product} styles={styles} related={related}/>
      <Questions productNum={productNum} />
      {/* <Reviews productNum={productNum}/> */}

      <h2>Meow</h2>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));