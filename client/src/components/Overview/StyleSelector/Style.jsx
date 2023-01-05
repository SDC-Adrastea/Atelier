import React, { useState, useEffect } from 'react';

import '../../../styles/overview.css'

const Style = (props) => {
  let style = props.style
  let toggled = props.toggled
  let altName = props.style.name
  let styleName, checked

  // set the checkmark for the selected style
  if (toggled.style_id === style.style_id) {
    styleName = style.name
    checked = <div className="check-overlay"><div className="checkmark"><img src="checkmark.png" alt="checkmark" width="20" height="100%" /></div></div>
  }

  return (
    <div className="style-thumbnail">
      <div className="style-thumbnail-container">
        <img src={style.photos[0].thumbnail_url} alt={altName} className="style-image"
          data-testid="style-image" onClick={() => props.onClick(style)} id="style-image-change" widgetname="Overview" />
          {checked}
      </div>
    </div>
  )
}

export default Style;