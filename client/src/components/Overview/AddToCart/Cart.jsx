import React, { useState, useEffect } from 'react'
import axios from 'axios'

// CSS Styles
const selections = {
  flexBasis: '70%',
  minWidth: '70%',
  margin: '5px',
  display: 'inline-block',
  padding: '10px'
}

const AddToCart = (props) => {
  let sku = props.sku
  let size = props.size
  let quantity = props.quantity

  let handleClick = async (e) => {
    console.log('clicked cart button')
    if (size === '') {
      props.setSizeAlert()
    } else if (sku === '') {
      alert('Unknown issue, please try again')
    } else {
      let total = 0
      while (total < quantity) {
        await axios.post('/cart', { sku })
          .then(data => console.log('post response', data.statusText))
          .catch(err => console.log('err in Cart.jsx post', err))
        total++
      }
      await axios.get('/cart')
      .then(data => {
        console.log('get after post', data.data)
      })
      .catch(err => console.log('err in Cart.jsx get', err))
    }
  }

  return (
    <>
      <button onClick={handleClick} style={selections}>Add to Cart</button>
    </>
  )
}

export default AddToCart;