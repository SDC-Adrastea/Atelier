import React, { useState, useEffect } from 'react'
import Style from './Style.jsx'

import '../../../styles/overview.css'

const StyleSelector = (props) => {
  let currentStyles = props.styles
  let toggledStyle = props.toggledStyle
  let mapStyles

  // style icon setup
  if (currentStyles !== undefined || currentStyles.length === 0) {
    mapStyles = currentStyles.map(style => {
      return (
        <Style key={style.style_id} style={style} toggled={props.toggledStyle}
          onClick={(selectedStyle) => props.onClick(selectedStyle)}
        />
      )
    })
  }

  return (
    <>
      <br />
      <span><strong>Style > </strong>{toggledStyle.name}</span>
      <div className="select-thumbnail-container" data-testid="style-selector">
        {mapStyles}
      </div>
    </>
  )
}

export default StyleSelector;