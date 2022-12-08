import React, { useState, useEffect } from 'react'

const SizeQuantity = (props) => {
  let styleOptions = props.style.skus
  let skus = []
  let sizeOptions = []
  console.log('props in SizeQuantity', props)

  const [options, setOptions] = useState({})
  const [sku, setSku] = useState('')
  const [sizes, setSizes] = useState([])
  const [quantity, setQuantity] = useState('-')

  useEffect(() => {
    setOptions(styleOptions)
    skus = Object.keys(styleOptions)
    skus.forEach(sku => {
      let thisSize = styleOptions.sku
      console.log('this size', thisSize)
    })
  })

  return (
    <div>
      <h4>Size & Quantity Dropdowns</h4>
      <h3>Sample</h3>
    </div>
  )
}

export default SizeQuantity;