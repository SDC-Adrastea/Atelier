import React, { useState, useEffect } from 'react';
import Style from './Style.jsx'

const StyleSelector = (props) => {
  let currentStyles = props.styles

  return (
    <div className="styles">
      <h4>Overview - Style Selector</h4>
      {props.styles.map(style => <Style key={style.style_id} style={style} />)}
    </div>
  )
}

export default StyleSelector;