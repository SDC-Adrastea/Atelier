import React, { useState, useEffect } from 'react'

const DefaultGallery = (props) => {
  let currentStyle = props.style
  let currentImage = ''
  let imageArr = []

  if (props.style === {}) {
    currentStyle.photos = []
    currentStyle.name = ''
  } else {
    currentStyle.photos.map(photo => {
      imageArr.push(photo.url)
    })
    currentImage = imageArr[0]
  }

  console.log('props in default gallery', currentStyle)


  return (
    <div className="default-view" onClick={() => props.onClick()}>
      <div className="default-main">
        <h4>Default Main</h4>
        <img src={currentImage} alt={currentStyle.name} height="400" />
      </div>

      <div className="default-overlay">
        <h4>Default Overlay</h4>
      </div>
    </div>
  )
}

export default DefaultGallery;