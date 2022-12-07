import React, { useState, useEffect } from 'react'

const SizeQuantity = (props) => {
  let styleOptions = props.style.skus
  let skus = []
  let sizeOptions = []
  console.log('props in SizeQuantity', props.style.skus)

  const [options, setOptions] = useState({})
  const [sku, setSku] = useState('')
  const [sizes, setSizes] = useState([])
  const [quantity, setQuantity] = useState('-')

  useEffect(() => {
    setOptions(styleOptions)
    skus = Object.keys(styleOptions)
    skus.forEach(sku => {
      sizes.push(styleOptions.sku)
    })
    console.log('skus', skus, 'sizes', sizes)
  })

  return (
    <div>
      <h4>Size & Quantity Dropdowns</h4>
    </div>
  )
}

export default SizeQuantity;