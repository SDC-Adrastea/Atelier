import React from 'react';

const ProductCategoryTitle = (props) => {
  let title = props.name
  let category = props.category

  return (
    <div className="category-title">
      <h4>Overview - Product Category / Title</h4>
      <div className="category">{category}</div>
      <div className="title"><h2>{title}</h2></div>
    </div>
  )
}

export default ProductCategoryTitle;