import React, { useState, useEffect } from 'react'
import * as css from './ProductInformationCSS.jsx'


const FeaturesList = (props) => {

  return ( <div style={css.individualFeatures}> {props.feature.feature}, {props.feature.value} </div> )
}

export default FeaturesList;