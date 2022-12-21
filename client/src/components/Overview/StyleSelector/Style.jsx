import React, { useState, useEffect } from 'react';

// CSS styles
const thumbnailContainer = {
  // display: 'flex',
  // flexWrap: 'wrap',
  // flexDirection: 'column'
  position: 'relative',
  paddingTop: '1em',
  textAlign: 'center'
}

const styleNameText = {
  // position: 'absolute',
  // top: '0',
  // left: '0',
  // right: '0',
  margin: '0.5em'
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

const Style = (props) => {
  let style = props.style
  let toggled = props.toggled
  let altName = props.style.name
  let styleName

  if (toggled.style_id === style.style_id) {
    styleName = style.name
  }

  return (
    <div style={thumbnail}>
      <div style={thumbnailContainer}>
        <div style={styleNameText}>{styleName}</div>
        <img src={style.photos[0].thumbnail_url} alt={altName} width="60" height="60" style={styleImage}
          onClick={() => props.onClick(style)} />
      </div>
    </div>
  )
}

export default Style;