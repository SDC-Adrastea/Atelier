import React from 'react'

// CSS Styles
const pad = {
  paddingTop: '20px'
}

const ProductCategoryTitle = (props) => {
  let title = props.title
  let category = props.category

  return (
    <div style={pad}>
      {category}
      <h2>{title}</h2>
    </div>
  )
}

export default ProductCategoryTitle;