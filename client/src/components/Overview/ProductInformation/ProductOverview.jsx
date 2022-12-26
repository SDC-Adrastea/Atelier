import React from 'react'
import FeaturesList from './FeaturesList.jsx'

// CSS Styles
const descriptionContainer = {
  display: 'flex',
  position: 'relative',
  padding: '20px'
}

const mainDescription = {
  flexBasis: '70%',
  minWidth: '70%',
  margin: '5px',
  display: 'inline-block',
  padding: '10px'
}

const verticalLine = {
  borderLeft: '3px solid black',
  padding: '10px'
}

const featuresDescription = {
  flexBasis: '20%',
  minWidth: '20%',
  margin: '5px',
  display: 'inline',
  padding: '10px'
}

const ProductOverview = (props) => {
  let slogan = props.slogan
  let description = props.description
  let features;

  if (props.features !== undefined) {
    features = props.features.map((feature, index) => <FeaturesList key={index} feature={feature} />)
  }

  return (
    <div style={descriptionContainer}>
      <div style={mainDescription}>
      <h3><strong>{slogan}</strong></h3>
      <p>{description}</p>
      </div>
      <div style={verticalLine}></div>
      <div style={featuresDescription}>{features}</div>
    </div>
  )
}

export default ProductOverview;