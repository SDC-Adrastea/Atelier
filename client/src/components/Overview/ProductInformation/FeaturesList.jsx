import React, { useState, useEffect } from 'react'

// CSS Styles
const individualFeatures = {
  display: 'inline-block',
  padding: '5px'
}

const FeaturesList = (props) => {

  return ( <div style={individualFeatures}> {props.feature.feature}, {props.feature.value} </div> )
}

export default FeaturesList;