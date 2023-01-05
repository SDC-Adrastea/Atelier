import React, { useState, useEffect } from 'react'
import * as views from './ViewFuncs.jsx'

import '../../../styles/overview.css'

const DefaultGallery = (props) => {
  let currentStyle = props.style || {}
  let currentImage = props.main || ''
  let imageArr = props.images || []
  let display = []
  let leftArrowOption, rightArrowOption

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


  return (
    <>

      <div className="thumbanail-container">
        {display.map((photo, index) => {
          if (photo === currentImage) {
            return <img key={index} src={photo} className="thumbnail-selected" alt="thumnail image" height="75" onClick={(e) => handleClick(e)} id="default-view-thumnail-img-selected" widgetname="Overview" />
          } else {
            return <img key={index} src={photo} className="thumnail-image" alt="thumnail image" height="75" onClick={(e) => handleClick(e)} id="default-view-thumbnail-img" widgetname="Overview" />
          }
        })}
      </div>

      <div className="main-image-container">
        <div className="view-overlay">
          <div className="arrow-overlay">
            <div className="right-arrow-overlay" onClick={() => views.handleArrowRight()} id="default-right-arrow" widgetname="Overview"></div>
          </div>
        </div>
        <div className="view-overlay">
          <div className="arrow-overlay">
            <div className="left-arrow-overlay" onClick={() => views.handleArrowLeft()} id="default-left-arrow" widgetname="Overview"></div>
          </div>
        </div>
      </div>

      <img src={currentImage} className="main-image" alt={currentStyle.name} onClick={() => props.onClick()} id="default-view-click" widgetname="Overview" />

    </>
  )
}

export default DefaultGallery;