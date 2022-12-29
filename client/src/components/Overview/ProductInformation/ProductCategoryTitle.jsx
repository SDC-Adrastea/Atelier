import React from 'react'
import * as css from './ProductInformationCSS.jsx'


const ProductCategoryTitle = (props) => {
  let title = props.title
  let category = props.category

  return (
    <div style={css.pad}>
      {category}
      <h2>{title}</h2>
    </div>
  )
}

export default ProductCategoryTitle;