import React from 'react'

import '../../../styles/overview.css'

const Price = (props) => {
  let defaultPrice = '$' + props.price
  let salePrice

  // set the price to remove cents when it's '.00'
  if (defaultPrice.includes('.00')) {
    defaultPrice = defaultPrice.substring(0, defaultPrice.length - 3)
  }

  // handle a sale price for a selected style
  if (props.sale) {
    let sale = props.sale
    if (sale.includes('.00')) {
      sale = sale.substring(0, sale.length - 3)
    }
    defaultPrice = <s data-testid="strike-price">{defaultPrice}</s>
    salePrice = <span className="sale-style" data-testid="sale-price">${sale}</span>
  }

  return (
    <div data-testid="price-section">
      {salePrice} {defaultPrice}
    </div>
  )
}

export default Price;