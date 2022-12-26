import React, { useState, useEffect } from 'react'

// CSS styles
const mainImageContainer = {
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden'
}

const mainImage = {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
}


const DefaultGallery = (props) => {
  let currentStyle = props.style || {}
  let currentImage = props.main || ''
  let imageArr = props.images || []
  let display = []

  if (props.style === {}) {
    currentStyle.name = ''
  } else {
    imageArr.map(photo => {
      display.push(photo.url)
    })
  }

  let handleClick = (e) => {
    e.preventDefault()
    let url = e.target.src
    props.thumbnailChange(url)
  }

  return (
    <>
      Default
      <div style={mainImageContainer}>
        <img src={currentImage} style={mainImage} alt={currentStyle.name} onClick={() => props.onClick()} />
      </div>

      <div>
        {display.map((photo, index) => {
          return (
            <img key={index} src={photo} alt="thumnail image" height="75" onClick={(e) => handleClick(e)} />
          )
        })}
      </div>
    </>
  )
}

export default DefaultGallery;