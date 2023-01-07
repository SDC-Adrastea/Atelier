import React, { useState, useEffect } from 'react'
import * as css from './ImageGalleryCSS.jsx'

const DefaultGallery = (props) => {
  let currentStyle = props.style || {}
  let currentImage = props.main || ''
  let imageArr = props.images || []
  let display = []
  let leftArrowOption, rightArrowOption, thumbnailIndex

  if (props.style === {}) {
    currentStyle.name = ''
  } else {
    // map the image urls
    imageArr.map((photo) => {
      display.push(photo.url)
    })
  }

  // set the left and right arrow options for the view displays
  display.forEach((photo, index) => {
    if (photo === currentImage) {
      thumbnailIndex = index
      if (index === 0) {
        leftArrowOption = photo
      } else {
        leftArrowOption = display[index - 1]
      }

      if (index === imageArr.length - 1) {
        rightArrowOption = photo
      } else {
        rightArrowOption = display[index + 1]
      }
    }
  })

  // user clicks the thumbnail images directly
  let handleClick = (e) => {
    e.preventDefault()
    let url = e.target.src
    props.thumbnailChange(url)
  }

  // user clicks arrows to update thumbnail and main image selections
  let handleArrowLeft = () => {
    props.thumbnailChange(leftArrowOption)
  }

  let handleArrowRight = () => {
    props.thumbnailChange(rightArrowOption)
  }

  return (
    <>
      <div style={css.mainImageContainer}>
        <img src={currentImage} style={css.mainImage} alt={currentStyle.name} onClick={() => props.onClick()} id="default-view-click" widgetname="Overview" />
        <div style={css.overlay}>
          <div style={css.arrowOverlay}>
            <div style={css.rightArrowOverlay} onClick={() => handleArrowRight()} id="default-right-arrow" widgetname="Overview"></div>
          </div>
        </div>
        <div style={css.overlay}>
          <div style={css.arrowOverlay}>
            <div style={css.leftArrowOverlay} onClick={() => handleArrowLeft()} id="default-left-arrow" widgetname="Overview"></div>
          </div>
        </div>
      </div>

      <div style={css.thumbnailContainer}>
      <img src="up-arrow.png" alt="up arrow" height="25px" width="25px" onClick={() => handleArrowLeft()} id="default-up-arrow" widgetname="Overview" style={css.upDownArrows} />
        {display.map((photo, index) => {
          if (photo === currentImage) {
            return <img key={index} src={photo} style={css.thumbnailSelected} alt="thumnail image" height="75" onClick={(e) => handleClick(e)} id="default-view-thumnail-img-selected" widgetname="Overview" />
          } else {
            return <img key={index} src={photo} style={css.thumbnailImage} alt="thumnail image" height="75" onClick={(e) => handleClick(e)} id="default-view-thumbnail-img" widgetname="Overview" />
          }
        })}
        <img src="down-arrow.png" alt="down arrow" height="25px" width="25px" onClick={() => handleArrowRight()} id="default-down-arrow" widgetname="Overview" style={css.upDownArrows} />
      </div>
    </>
  )
}

export default DefaultGallery;