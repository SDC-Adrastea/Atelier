import React, { useState, useEffect } from 'react'

const DefaultGallery = (props) => {
  let currentStyle = props.style
  let currentImage = props.main
  let imageArr = []

  if (props.style === {}) {
    currentStyle.photos = []
    currentStyle.name = ''
  } else {
    currentStyle.photos.map(photo => {
      imageArr.push(photo.url)
    })
  }

  // console.log('props in default gallery', currentStyle)

  let handleClick = (e) => {
    e.preventDefault()
    let url = e.target.src
    props.thumbnailChange(url)
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