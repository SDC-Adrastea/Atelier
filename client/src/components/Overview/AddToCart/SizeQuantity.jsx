import React, { useState, useEffect } from 'react'
import AddToCart from './Cart.jsx'

import '../../../styles/overview.css'

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

  // update the size options based on the selected sku
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

  // update the sku and quantity along with state based on size selection
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

  // update quantity selection to set state for later cart addition
  let handleQuantity = (e) => {
    e.preventDefault();
    let selectedQuantity = e.target.value
    setChosenQuantity(selectedQuantity)
  }

  let mappedSizes = sizes.map(size => {
    return <option key={size} value={size}>{size}</option>
  })

  let mappedQuantity = quantity.map(q => {
    return <option key={q} value={q}>{q}</option>
  })

  // default quantity defined and setup
  let quantitySection = (
    <select name="quantity" id="quantity-select" widgetname="Overview" className="size-quantity-selections">
        <option value="">--</option>
    </select>
  )

  // quantity setup
  if (quantity.length > 0) {
    quantitySection = (
      <select name="quantity" id="quantity-select" widgetname="Overview" onChange={handleQuantity} className="size-quantity-selections">
          {mappedQuantity}
      </select>
    )
  }

  // sizes setup when in stock
  if (sizes.length > 0) {
    // triggers when a user clicks cart button with no size selected
    if (sizeAlert) {
      sizeAlertLoad = <><span className="need-info">Please select size</span><br /></>
    }

    // the sizes and options are available
    pageLoad = (
      <>
        {sizeAlertLoad}
        <select name="size" id="size-select" widgetname="Overview" onChange={handleSize} className="size-quantity-selections">
          <option value="">Select Size</option>
          {mappedSizes}
        </select>
        {quantitySection}
        <AddToCart sku={props.currentSku} size={chosenSize} quantity={chosenQuantity} setSizeAlert={() => setSizeAlert(true)} />
      </>
    )
  } else {
    // there is no stock, display 'OUT OF STOCK'
    pageLoad = <div className="size-quantity-selections">OUT OF STOCK</div>
  }


  return ( <> {pageLoad} </>)
}

export default SizeQuantity;