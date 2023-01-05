import React, { useState, useEffect } from 'react'

import '../../../styles/overview.css'

const FeaturesList = (props) => {

  return ( <div className="individual-features"> {props.feature.feature}, {props.feature.value} </div> )
}

export default FeaturesList;