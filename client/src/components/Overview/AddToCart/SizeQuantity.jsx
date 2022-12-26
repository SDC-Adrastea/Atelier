import React, { useState, useEffect } from 'react'
import AddToCart from './Cart.jsx'

// CSS styles
const selections = {
  flexBasis: '45%',
  minWidth: '45%',
  margin: '5px',
  display: 'inline-block',
  padding: '10px'
}

const SizeQuantity = (props) => {
  let styleOptions = props.skus
  let skus = []
  let sizeOptions = []
  let pageLoad, sizeAlertLoad

  const [sizes, setSizes] = useState([])
  const [quantity, setQuantity] = useState([])
  const [chosenSize, setChosenSize] = useState('')
  const [chosenQuantity, setChosenQuantity] = useState('')
  const [sizeAlert, setSizeAlert] = useState(false)

  useEffect(() => {
    skus = Object.keys(styleOptions)
    if (skus.length > 0) {
      let array = []
      for (var i = 0; i < skus.length; i++) {
        let thisSize = styleOptions[skus[i]]
        if (!array.includes(thisSize.size) && thisSize.quantity >= 1) {
          array.push(thisSize.size)
        }
      }
      setSizes(array)
    }
  }, [props.skus])

  let handleSize = (e) => {
    e.preventDefault();
    let selectedSize = e.target.value
    skus = Object.keys(styleOptions)

    for (var i = 0; i < skus.length; i++) {
      let thisSku = styleOptions[skus[i]]
      if (selectedSize === thisSku.size) {
        props.setCurrentSku(skus[i])
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
        setSizeAlert(false)
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
    <>
      <select name="quantity" id="quantity-select" style={selections}>
        <option value="">--</option>
      </select>
    </>
  )

  if (quantity.length > 0) {
    quantitySection = (
      <>
        <select name="quantity" id="quantity-select" onChange={handleQuantity} style={selections}>
          {mappedQuantity}
        </select>
      </>
    )
  }

  if (sizes.length > 0) {
    if (sizeAlert) {
      sizeAlertLoad = 'Please select size'
    }

    pageLoad = (
      <>
        {sizeAlertLoad}
        <select name="size" id="size-select" onChange={handleSize} style={selections}>
          <option value="">Select Size</option>
          {mappedSizes}
        </select>
        {quantitySection}
        <AddToCart sku={props.currentSku} size={chosenSize} quantity={chosenQuantity} setSizeAlert={() => setSizeAlert(true)} />
      </>
    )
  } else {
    pageLoad = <div style={selections}>OUT OF STOCK</div>
  }


  return ( <> {pageLoad} </>)
}

export  default SizeQuantity ;