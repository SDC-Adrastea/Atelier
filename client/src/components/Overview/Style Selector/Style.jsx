import React, { useState, useEffect } from 'react';

const Style = (props) => {
  let style = props.style
  let toggled = props.toggled
  let styleName

  if (toggled.style_id === style.style_id) {
    styleName = style.name
  }

  return (
    <div className="each-style">
      {styleName}
      <img
        className="style-thumbnail"
        src={style.photos[0].thumbnail_url}
        width="100"
        height="100"
        onClick={() => {
          props.onClick(style)
        }}
      />
    </div>
  )
}

export default Style;