import React from 'react'
import FeaturesList from './FeaturesList.jsx'

// CSS Styles

const ProductOverview = (props) => {
  let slogan = props.slogan
  let description = props.description
  let features;

  if (props.features !== undefined) {
    features = props.features.map((feature, index) => <FeaturesList key={index} feature={feature} />)
  }

  return (
    <>
      <strong>{slogan}</strong>
      <div>{description}</div>
      <br></br>
      {features}
    </>
  )
}

export default ProductOverview;