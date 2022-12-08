import React, { useState, useEffect } from "react";
import axios from "axios"

const ComparisonModal = (props) => {

  useEffect(() => {
    axios.get('/comparisonModal' , {
      params: {
        primaryProduct: props.primaryProduct,
        relatedProductCurrent: props.relatedProductCurrent
      }
    })
    .then((data) => {
      console.log('response data from server', data.data)
    })
  })


  return (
    <div className="overlay">
      <div className="modalContainer">
       <h2>test </h2>
      {console.log('props in comparison modal', props)}
      </div>
    </div>
  )
}

export default ComparisonModal;