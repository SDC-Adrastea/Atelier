import React, { useState, useEffect } from 'react'

const SizeQuantity = (props) => {
  let styleOptions = props.style.skus
  let skus = []
  let sizeOptions = []

  console.log(styleOptions)

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
  }, [quantity])

  let handleSize = (e) => {
    e.preventDefault();
    let selectedSize = e.target.value
    skus = Object.keys(styleOptions)

    for (var i = 0; i < skus.length; i++) {
      let thisSku = styleOptions[skus[i]]
      if (selectedSize === thisSku.size) {
        setSku(thisSku)

        let total = thisSku.quantity
        let count = 1
        let array = []
        while (count <= 15 && count <= total) {
          array.push(count)
          count++
        }
        setQuantity(array)
      }
    }
  }

  let mappedSizes = sizes.map(size => {
    return <option key={size} value={size}>{size}</option>
  })

  let mappedQuantity = quantity.map(q => {
    return <option key={q} value ={q}>{q}</option>
  })

  let quantitySection = (
    <div>
      <label htmlFor="quantity-select">Quantity:</label >
      <select name="quantity" id="quantity-select">
        <option value="">--</option>
      </select>
    </div>
  )

  if (quantity.length > 0) {
    quantitySection = (
      <div>
        <label htmlFor="quantity-select">Quantity:</label >
        <select name="quantity" id="quantity-select">
          {mappedQuantity}
        </select>
      </div>
    )
  }

  return (
    <div>
      <label htmlFor="size-select">Select a Size:</label >
      <select name="size" id="size-select" onChange={handleSize}>
        <option value="">--</option>
        {mappedSizes}
      </select>
      {quantitySection}
    </div>
  )
}

export  default SizeQuantity ;