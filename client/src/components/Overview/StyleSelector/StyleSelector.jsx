import React, { useState, useEffect } from 'react'
import Style from './Style.jsx'

const thumbnailContainer = {
  height: '100px',
  flexWrap: 'nowrap',
  border: '1px solid purple',
  padding: '10px'
}

const StyleSelector = (props) => {
  let currentStyles = props.styles
  let toggledStyle = props.toggledStyle
  let mapStyles;

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
    <div style={thumbnailContainer}>
      <h3>Styles: </h3>
      {mapStyles}
    </div>
  )
}

export default StyleSelector;