import React, { useState, useEffect } from 'react'

const SizeQuantity = (props) => {
  let styleOptions = props.style.skus
  let skus = []
  let sizeOptions = []

  const [options, setOptions] = useState({})
  const [sku, setSku] = useState('')
  const [sizes, setSizes] = useState([])
  const [quantity, setQuantity] = useState([])

  useEffect(() => {
    setOptions(styleOptions)
    skus = Object.keys(styleOptions)
    if (skus.length > 0) {
      let array = []
      for (var i = 0; i < skus.length; i++) {
        let thisSize = styleOptions[skus[i]]
        array.push(thisSize.size)
      }
      setSizes(array)
    }
  }, [])

  let mapped = sizes.map(size => {
    return <option key={size} value={size}>{size}</option>
  })

  const amount = (quantity) => {

  }

  let quantitySection

  quantitySection = (
    <div>
      <label htmlFor="quantity-select">Quantity:</label >
      <select name="quantity" id="quantity-select">
        <option value="">1</option>

      </select>
    </div>
  )

  return (
    <div>
      <label htmlFor="size-select">Select a Size:</label >
      <select name="size" id="size-select">
        <option value="">--</option>
        {mapped}
      </select>
      {quantitySection}
    </div>
  )
}

export  default SizeQuantity ;