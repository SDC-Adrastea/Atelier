import React, { useState, useEffect } from 'react';

const Style = (props) => {
  console.log('style props', props)
  let style = props.style
  let toggled = props.toggled
  let styleName

  if (toggled.style_id === style.style_id) {
    styleName = style.name
  }

  return (
    <div className="thumbnail">
      {styleName}
      <img
        src={style.photos[0].thumbnail_url}
        width="50"
        height="50"
        onClick={() => {
          props.onClick(style)
        }}
      />
    </div>
  )
}

export default Style;