import React, { useState, useEffect } from 'react'
import Style from './Style.jsx'

// CSS styles
const thumbnailContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  padding: '10px'
}

const StyleSelector = (props) => {
  let currentStyles = props.styles
  let toggledStyle = props.toggledStyle
  let mapStyles

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
      {mapStyles}
    </div>
  )
}

export default StyleSelector;