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

  // console.log('props in default gallery', currentStyle)

  let handleClick = (e) => {
    e.preventDefault()
    currentImage = e.target.src
    console.log(currentImage)
  }

  return (
    <div className="default-view">
      <div className="default-main">
        <img
          src={currentImage}
          alt={currentStyle.name}
          height="250"
          onClick={() => props.onClick()}
        />
      </div>

      <div className="default-overlay">
        <h4>Default Overlay</h4>
        {imageArr.map((photo, index) => {
          return (
            <img
              className="thumbnail-image"
              key={index}
              src={photo}
              alt="thumnail image"
              height="75"
              onClick={(e) => handleClick(e)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default DefaultGallery;