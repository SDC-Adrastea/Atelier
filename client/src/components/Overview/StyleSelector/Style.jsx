import React, { useState, useEffect } from 'react';
import * as css from './StyleSelectorCSS.jsx'


const Style = (props) => {
  let style = props.style
  let toggled = props.toggled
  let altName = props.style.name
  let styleName, checked

  if (toggled.style_id === style.style_id) {
    styleName = style.name
    checked = <div style={css.checkOverlay}><div style={css.checkmark}><img src="checkmark.png" alt="checkmark" width="20" /></div></div>
  }

  return (
    <div style={css.thumbnail}>
      <div style={css.thumbnailContainer}>
        <img src={style.photos[0].thumbnail_url} alt={altName} width="60" height="60" style={css.styleImage}
          onClick={() => props.onClick(style)} />
          {checked}
      </div>
    </div>
  )
}

export default Style;