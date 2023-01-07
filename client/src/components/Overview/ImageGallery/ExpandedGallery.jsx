import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import * as css from './ImageGalleryCSS.jsx'
import '../../../styles/overview.css'


const ExpandedGallery = (props) => {
  let currentStyle = props.style || {}
  let currentImage = props.main || ''
  let imageArr = props.images || []
  let display = []
  let thumbnailIndexStart = 0
  let thumbnailIndexEnd = 5
  let leftArrowOption, rightArrowOption, needFirstArrow, needLastArrow,
    needLeftArrow, needRightArrow

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
      if (index > 5) {
        thumbnailIndexEnd = index
        thumbnailIndexStart = index - 5
      }

      if (index === 0) {
        leftArrowOption = photo
      } else {
        leftArrowOption = display[index - 1]
        needFirstArrow = <img src="up-arrow.png" alt="up arrow" height="25px" width="25px" onClick={() => handleArrowLeft()} id="default-up-arrow" widgetname="Overview" className="up-down-arrows" />
        needLeftArrow = (
          <div style={css.overlay}>
            <div style={css.arrowOverlay}>
              <div style={css.leftArrowOverlay} onClick={() => handleArrowLeft()} id="default-left-arrow" widgetname="Overview"></div>
            </div>
          </div>
        )
      }

      if (index === imageArr.length - 1) {
        rightArrowOption = photo
      } else {
        rightArrowOption = display[index + 1]
        needLastArrow = <img src="down-arrow.png" alt="down arrow" height="25px" width="25px" onClick={() => handleArrowRight()} id="default-down-arrow" widgetname="Overview" className="up-down-arrows" />
        needRightArrow = (
          <div style={css.overlay}>
            <div style={css.arrowOverlay}>
              <div style={css.rightArrowOverlay} onClick={() => handleArrowRight()} id="default-right-arrow" widgetname="Overview"></div>
            </div>
          </div>
        )
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
      <div style={css.expMainImageContainer} className="box-container" >
        <Zoom>
          <img
            alt={currentStyle.name}
            src={currentImage}
            style={css.expMainImage}
          />
        </Zoom>
        {/* <img src={currentImage} style={css.expMainImage} alt={currentStyle.name} onClick={() => props.onClick()} id="expanded-view-click" widgetname="Overview" /> */}
        {needRightArrow}
        {needLeftArrow}
      </div>

      <div style={css.thumbnailContainer}>
        {needFirstArrow}
        {display.map((photo, index) => {
          if (index >= thumbnailIndexStart && index <= thumbnailIndexEnd) {
            if (photo === currentImage) {
              return <img key={index} src={photo} style={css.thumbnailSelected} alt="thumnail image" height="75" onClick={(e) => handleClick(e)} id="default-view-thumnail-img-selected" widgetname="Overview" />
            } else {
              return <img key={index} src={photo} style={css.thumbnailImage} alt="thumnail image" height="75" onClick={(e) => handleClick(e)} id="default-view-thumbnail-img" widgetname="Overview" />
            }
          }
        })}
        {needLastArrow}
      </div>
    </>
  )
}

export default ExpandedGallery;