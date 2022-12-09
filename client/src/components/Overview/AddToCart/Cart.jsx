import React, { useState, useEffect } from 'react'

const AddToCart = (props) => {

  let handleClick = (e) => {
    console.log('clicked cart button')
  }

  return (
    <div>
      <button onClick={handleClick}>Add to Cart</button>
    </div>
  )
}

export default AddToCart;