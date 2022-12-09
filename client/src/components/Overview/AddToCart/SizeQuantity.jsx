import React, { useState, useEffect } from 'react'
import AddToCart from './Cart.jsx'


const SizeQuantity = (props) => {
  let styleOptions = props.style.skus
  // let styleOptions = {} // testing for no data or no stock
  let skus = []
  let sizeOptions = []
  let pageLoad

  const [options, setOptions] = useState({})
  const [sku, setSku] = useState('')
  const [sizes, setSizes] = useState([])
  const [quantity, setQuantity] = useState([])
  const [chosenSize, setChosenSize] = useState('')
  const [chosenQuantity, setChosenQuantity] = useState('')

  useEffect(() => {
    setOptions(styleOptions)
    skus = Object.keys(styleOptions)
    if (skus.length > 0) {
      let array = []
      for (var i = 0; i < skus.length; i++) {
        let thisSize = styleOptions[skus[i]]
        if (thisSize.quantity >= 1) {
          array.push(thisSize.size)
        }
      }
      setSizes(array)
    }
  }, [quantity])

  let handleSize = (e) => {
    e.preventDefault();
    let selectedSize = e.target.value
    skus = Object.keys(styleOptions)

    for (var i = 0; i < skus.length; i++) {
      let thisSku = styleOptions[skus[i]]
      if (selectedSize === thisSku.size) {
        setSku(skus[i])
        setChosenSize(selectedSize)

        let total = thisSku.quantity
        let count = 1
        let array = []
        while (count <= 15 && count <= total) {
          array.push(count)
          count++
        }
        setQuantity(array)
        setChosenQuantity(1)
      }
    }
  }

  let handleQuantity = (e) => {
    e.preventDefault();
    let selectedQuantity = e.target.value
    setChosenQuantity(selectedQuantity)
  }

  let mappedSizes = sizes.map(size => {
    return <option key={size} value={size}>{size}</option>
  })

  let mappedQuantity = quantity.map(q => {
    return <option key={q} value ={q}>{q}</option>
  })

  let quantitySection = (
    <div>
      <select name="quantity" id="quantity-select">
        <option value="">--</option>
      </select>
    </div>
  )

  if (quantity.length > 0) {
    quantitySection = (
      <div>
        <select name="quantity" id="quantity-select" onChange={handleQuantity}>
          {mappedQuantity}
        </select>
      </div>
    )
  }

  if (sizes.length > 0) {
    pageLoad = (
      <div>
        <select name="size" id="size-select" onChange={handleSize}>
          <option value="">Select Size</option>
          {mappedSizes}
        </select>
        {quantitySection}
        <AddToCart sku={sku} size={chosenSize} quantity={chosenQuantity} />
      </div>)
  } else {
    pageLoad = (
      <div>OUT OF STOCK</div>
    )
  }


  return (
    <div>
      {pageLoad}
    </div>
  )
}

export  default SizeQuantity ;