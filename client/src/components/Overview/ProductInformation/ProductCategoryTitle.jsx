import React from 'react'

import '../../../styles/overview.css'

const ProductCategoryTitle = (props) => {
  let title = props.title
  let category = props.category

  return (
    <div className="pad">
      {category}
      <h2>{title}</h2>
    </div>
  )
}

export default ProductCategoryTitle;