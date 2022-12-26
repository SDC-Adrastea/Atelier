import React, { useState, useEffect } from 'react'

// CSS styles
const mainImageContainer = {
  position: 'relative',
  width: '700px',
  height: '500px',
  maxHeight: '100%',
  maxWidth: '100%',
  overflow: 'hidden'
}

const mainImage = {
  width: '700px',
  height: '500px',
  maxHeight: '100%',
  maxWidth: '100%',
  objectFit: 'contain',
  objectPosition: 'center top',
  cursor: 'zoom-in'
}

const thumbnailContainer = {
  position: 'absolute',
  top: '0',
  left: '0',
  display: 'flex',
  flexDirection: 'column', /* This will display the thumbnails vertically */
  alignItems: 'flex-start', /* This will align the thumbnails to the left */
  justifyContent: 'center',
  zIndex: '1'
}

const thumbnailImage = {
  width: '80px',
  height: '60px',
  objectFit: 'cover',
  margin: '10px',
  cursor: 'pointer'
}

const thumbnailSelected = {
  width: '80px',
  height: '60px',
  objectFit: 'cover',
  margin: '10px',
  cursor: 'pointer',
  border: '4px solid white'
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
      <div style={mainImageContainer}>
        <img src={currentImage} style={mainImage} alt={currentStyle.name} onClick={() => props.onClick()} />
      </div>

      <div style={thumbnailContainer}>
        {display.map((photo, index) => {
          if (photo === currentImage) {
            return <img key={index} src={photo} style={thumbnailSelected} alt="thumnail image" height="75" onClick={(e) => handleClick(e)}/>
          } else {
            return <img key={index} src={photo} style={thumbnailImage} alt="thumnail image" height="75" onClick={(e) => handleClick(e)} />
          }
        })}
      </div>
    </>
  )
}

export default DefaultGallery;