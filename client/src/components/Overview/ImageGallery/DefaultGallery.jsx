import React, { useState, useEffect } from 'react'

// CSS styles
const thumbnailContainer = {
  position: 'relative'
}

const overlay = {
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  zIndex: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  opacity: '0',
  transition: 'opacity 0.5s'
}

const mainImage = {

}

const thumbnailOverlay = {
  display: 'flex',
  flexDirection: 'column'
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
    <div style={thumbnailContainer}>
      Default
      <div style={mainImage}>
        <img src={currentImage} alt={currentStyle.name} height="250" onClick={() => props.onClick()} />
      </div>

      <div>
        {display.map((photo, index) => {
          return (
            <img key={index} src={photo} alt="thumnail image" height="75" onClick={(e) => handleClick(e)} />
          )
        })}
      </div>
    </div>
  )
}

export default DefaultGallery;