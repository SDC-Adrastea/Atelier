import React, { useState, useEffect } from 'react';

// CSS styles
const thumbnailContainer = {
  position: 'relative',
  paddingTop: '1em',
  alignItems: 'center'
}

const thumbnail = {
  flexBasis: '20%',
  minWidth: '20%',
  margin: '5px',
  display: 'inline-block'
}

const styleImage = {
  borderRadius: '50%'
}

const checkOverlay = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  zIndex: '1'
}

const checkmark = {
  position: 'absolute',
  top: '30%',
  left: '60%',
  transform: 'translate(-30%, -60%)'
}

const Style = (props) => {
  let style = props.style
  let toggled = props.toggled
  let altName = props.style.name
  let styleName, checked

  if (toggled.style_id === style.style_id) {
    styleName = style.name
    checked = <div style={checkOverlay}><div style={checkmark}><img src="checkmark.png" alt="checkmark" width="20" /></div></div>
  }

  return (
    <div style={thumbnail}>
      <div style={thumbnailContainer}>
        <img src={style.photos[0].thumbnail_url} alt={altName} width="60" height="60" style={styleImage}
          onClick={() => props.onClick(style)} />
          {checked}
      </div>
    </div>
  )
}

export default Style;