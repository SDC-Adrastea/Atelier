import React from 'react'
import * as css from './ProductInformationCSS.jsx'


const Price = (props) => {
  let defaultPrice = '$' + props.price
  let salePrice

  if (defaultPrice.includes('.00')) {
    defaultPrice = defaultPrice.substring(0, defaultPrice.length - 3)
  }

  if (props.sale) {
    let sale = props.sale
    if (sale.includes('.00')) {
      sale = sale.substring(0, sale.length - 3)
    }
    defaultPrice = <s data-testid="strike-price">{defaultPrice}</s>
    salePrice = <span style={css.saleStyle} data-testid="sale-price">${sale}</span>
  }

  return (
    <div data-testid="price-section">
      {salePrice} {defaultPrice}
    </div>
  )
}

export default Price;