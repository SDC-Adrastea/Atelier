import React from 'react';

const ProductCategoryTitle = (props) => {
  let title = props.product.name
  let category = props.product.category

  return (
    <div className="category-title">
      <h4>Overview - Product Category / Title</h4>
      <div className="title">{title}</div>
      <div className="category">{category}</div>
    </div>
  )
}

export default ProductCategoryTitle;