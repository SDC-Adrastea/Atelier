import React, { useState, useEffect } from 'react';

const Style = (props) => {
  let style = props.style
  let toggled = props.toggled
  let styleName

  // if (style.style_id === toggled.style_id) {
  //   styleName = {style.name}
  // }

  return (
    <div className="each-style">
      {style.name}
      <img
        className="style-thumbnail"
        src={style.photos[0].thumbnail_url}
      />
    </div>
  )
}

export default Style;