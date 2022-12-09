import React, { useState, useEffect } from 'react'

const AddToCart = (props) => {
  let sku = props.sku
  let size = props.size
  let quantity = props.quantity

  let handleClick = (e) => {
    console.log('clicked cart button')
    if (size === '') {
      alert('Please select a size')
    } else if (quantity === '') {
      alert('Please select a quantity')
    } else if (sku === '') {
      alert('Unknown issue, please try again')
    } else {
      console.log('success, we\'ll call the api')
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Add to Cart</button>
    </div>
  )
}

export default AddToCart;