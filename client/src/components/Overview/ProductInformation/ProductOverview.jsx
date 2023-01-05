import React from 'react'
import FeaturesList from './FeaturesList.jsx'

import '../../../styles/overview.css'

const ProductOverview = (props) => {
  let slogan = props.slogan
  let description = props.description
  let features;

  if (props.features !== undefined) {
    features = props.features.map((feature, index) => <FeaturesList key={index} feature={feature} />)
  }

  return (
    <div className="description-container">
      <div className="main-description">
      <h3><strong>{slogan}</strong></h3>
      <p>{description}</p>
      </div>
      <div className="vertical-line"></div>
      <div className="features-description">{features}</div>
    </div>
  )
}

export default ProductOverview;