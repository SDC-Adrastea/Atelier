import React from 'react';

const Price = (props) => {
  let defaultPrice = '$' + props.defaultPrice

  if (defaultPrice.includes('.00')) {
    defaultPrice = defaultPrice.substring(0, defaultPrice.length - 3)
  }

  return (
    <div>
      {defaultPrice}
    </div>
  )
}

export default Price;