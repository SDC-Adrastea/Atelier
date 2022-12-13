import React from 'react';

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
    defaultPrice = <s>{defaultPrice}</s>
    salePrice = <span className="sale-price">${sale}</span>
  }

  return (
    <div>
      {salePrice} {defaultPrice}
    </div>
  )
}

export default Price;