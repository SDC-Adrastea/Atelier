import React, { useState, useEffect } from 'react'
import * as css from './ImageGalleryCSS.jsx'


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

  let handleArrowLeft = () => {
    console.log('left click')
  }

  let handleArrowRight = () => {
    console.log('right click')
  }

  return (
    <>
      <div style={css.mainImageContainer}>
        <img src={currentImage} style={css.mainImage} alt={currentStyle.name} onClick={() => props.onClick()} />
        <div style={css.overlay}>
          <div style={css.arrowOverlay}>
            <div style={css.rightArrowOverlay} onClick={() => handleArrowRight()} ></div>
          </div>
        </div>
        <div style={css.overlay}>
          <div style={css.arrowOverlay}>
            <div style={css.leftArrowOverlay} onClick={() => handleArrowLeft()} ></div>
          </div>
        </div>
      </div>

      <div style={css.thumbnailContainer}>
        {display.map((photo, index) => {
          if (photo === currentImage) {
            return <img key={index} src={photo} style={css.thumbnailSelected} alt="thumnail image" height="75" onClick={(e) => handleClick(e)} />
          } else {
            return <img key={index} src={photo} style={css.thumbnailImage} alt="thumnail image" height="75" onClick={(e) => handleClick(e)} />
          }
        })}
      </div>
    </>
  )
}

export default DefaultGallery;