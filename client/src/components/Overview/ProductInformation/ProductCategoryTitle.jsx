import React from 'react'

const ProductCategoryTitle = (props) => {
  let title = props.title
  let category = props.category

  return (
    <>
      {category}
      <h2>{title}</h2>
    </>
  )
}

export default ProductCategoryTitle;