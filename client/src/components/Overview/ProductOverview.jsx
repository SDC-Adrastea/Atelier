import React from 'react'
import FeaturesList from './FeaturesList.jsx'

const ProductOverview = (props) => {
  let slogan = props.slogan
  let description = props.description

  let features;

  if (props.features !== undefined) {
    features = props.features.map((feature, index) => <FeaturesList key={index} feature={feature} />)
  }

  return (
    <div className="product-overview">
      <h4>Overview - Product Overview</h4>
      <div className="product-slogan"><strong>{slogan}</strong></div>
      <div className="product-description">{description}</div>
      <br></br>
      <div className="product-features">{features}</div>
    </div>
  )
}

export default ProductOverview;