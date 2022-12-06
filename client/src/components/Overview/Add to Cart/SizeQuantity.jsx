import React, { useState, useEffect } from 'react'

const SizeQuantity = (props) => {
  let styleOptions = props.style.skus
  console.log('props in SizeQuantity', props.style.skus)

  const [options, setOptions] = useState({})

  useEffect(() => {
    setOptions(styleOptions)
  })

  return (
    <div>
      <h4>Size & Quantity Dropdowns</h4>
    </div>
  )
}

export default SizeQuantity;