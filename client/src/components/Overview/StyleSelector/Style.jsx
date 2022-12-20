import React, { useState, useEffect } from 'react';

// CSS styles
const thumbnail = {
  display: 'inline-block',
  marginLeft: '15px'
}

const Style = (props) => {
  let style = props.style
  let toggled = props.toggled
  let styleName

  if (toggled.style_id === style.style_id) {
    styleName = style.name
  }

  return (
    <div style={thumbnail}>
      {styleName}
      <img src={style.photos[0].thumbnail_url} width="50" height="50"
        onClick={() => props.onClick(style)}
      />
    </div>
  )
}

export default Style;