import React from 'react'
import FeaturesList from './FeaturesList.jsx'
import * as css from './ProductInformationCSS.jsx'


const ProductOverview = (props) => {
  let slogan = props.slogan
  let description = props.description
  let features;

  if (props.features !== undefined) {
    features = props.features.map((feature, index) => <FeaturesList key={index} feature={feature} />)
  }

  return (
    <div style={css.descriptionContainer}>
      <div style={css.mainDescription}>
      <h3><strong>{slogan}</strong></h3>
      <p>{description}</p>
      </div>
      <div style={css.verticalLine}></div>
      <div style={css.featuresDescription}>{features}</div>
    </div>
  )
}

export default ProductOverview;