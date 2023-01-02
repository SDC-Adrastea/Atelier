import React from 'react'
import * as css from './ImageGalleryCSS.jsx'


const ExpandedGallery = (props) => {
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
      <div style={css.expMainImageContainer}>
        <img src={currentImage} style={css.expMainImage} alt={currentStyle.name} onClick={() => props.onClick()} id="expanded-view-click" widgetname="Overview" />
        <div style={css.overlay}>
          <div style={css.arrowOverlay}>
            <div style={css.rightArrowOverlay} onClick={() => handleArrowRight()} id="expanded-right-arrow" widgetname="Overview"></div>
          </div>
        </div>
        <div style={css.overlay}>
          <div style={css.arrowOverlay}>
            <div style={css.leftArrowOverlay} onClick={() => handleArrowLeft()} id="expanded-left-arrow" widgetname="Overview"></div>
          </div>
        </div>
      </div>

      <div style={css.thumbnailContainer}>
        {display.map((photo, index) => {
          if (photo === currentImage) {
            return <img key={index} src={photo} style={css.thumbnailSelected} alt="thumnail image" height="75" onClick={(e) => handleClick(e)} id="expanded-view-thumnail-img-selected" widgetname="Overview" />
          } else {
            return <img key={index} src={photo} style={css.thumbnailImage} alt="thumnail image" height="75" onClick={(e) => handleClick(e)} id="expanded-view-thumnail-img-selected" widgetname="Overview" />
          }
        })}
      </div>
    </>
  )
}

export default ExpandedGallery;