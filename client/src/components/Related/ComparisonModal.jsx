import React, { useState, useEffect } from "react";
import axios from "axios"

const ComparisonModal = (props) => {

  const [productFeatures , setProductFeatures] = useState([])
  const [primaryProductName , setPrimaryProductName] = useState('')
  const [relatedProductName , setRelatedProductName] = useState('')
  const [primaryProductFeatures , setPrimaryProductFeatures] = useState('')
  const [relatedProductFeatures , setRelatedProductFeatures] = useState('')


  useEffect(() => {
    axios.get('/comparisonModal' , {
      params: {
        primaryProduct: props.primaryProduct,
        relatedProductCurrent: props.relatedProductCurrent
      }
    })
    .then((data) => {
      const unformattedData = data.data
      const formattedData = Object.entries(unformattedData)
      setPrimaryProductName(formattedData[0][0])
      setRelatedProductName(formattedData[1][0])
      setPrimaryProductFeatures(formattedData[0][1])
      setRelatedProductFeatures(formattedData[1][1])
    })
  }, [])


  return (
    <div className="overlay">

      <div className="modalContainer">
       <div className="primary-product-features">
       {console.log(primaryProductFeatures)}
        <h2>{primaryProductName}</h2>
       </div>
       <div className="related-product-features">
        <h2>{relatedProductName}</h2>
       </div>

      </div>
    </div>
  )
}

export default ComparisonModal;