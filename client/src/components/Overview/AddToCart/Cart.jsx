import React, { useState, useEffect } from 'react'
import axios from 'axios'

import '../../../styles/overview.css'

const AddToCart = (props) => {
  let sku = props.sku
  let size = props.size
  let quantity = props.quantity

  // add to cart button click
  let handleClick = async (e) => {
    if (size === '') {
      // if no size has been selected, notify the user
      props.setSizeAlert()
    } else {
      // the api doesn't allow for a quantity
      // add the selected quantity to the cart in the api
      let total = 0
      while (total < quantity) {
        await axios.post('/cart', { sku })
          .then(data => console.log('post response', data.statusText))
          .catch(err => console.log('err in Cart.jsx post', err))
        total++
      }
    }
  }

  return (
    <>
      <button onClick={handleClick} className="cart-selections" id="add-to-cart-btn" widgetname="Overview">Add to Cart</button>
    </>
  )
}

export default AddToCart;