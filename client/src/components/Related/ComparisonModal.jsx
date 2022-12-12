import React, { useState, useEffect } from "react";
import axios from "axios"

const ComparisonModal = (props) => {

  return (
    <div  className="overlay">
      <div className="modalContainer">
      <button onClick={(value) => props.setModal(false)} >close</button>
       <div>
        {console.log(props.primaryProduct)}
        <h2>{props.primaryProduct.productName}</h2>
        {props.primaryProduct.features.map((feature , index) => {
          return (
            <ul key={index}>feature: {feature.feature} , Value: {feature.value}</ul>
          )
        })}
       </div>
       <div>
        <h2>{props.relatedProductCurrent.productName}</h2>
        {props.relatedProductCurrent.features.map((feature, index) => {
          return (
            <ul key={index}>feature: {feature.feature} , Value: {feature.value}</ul>
          )
        })}
       </div>
      </div>
    </div>
  )
}

export default ComparisonModal;

