import React from 'react'

// CSS styles
const mainImageContainer = {
  position: 'relative',
  width: '100%',
  height: '500px',
  maxHeight: '100%',
  maxWidth: '100%',
  overflow: 'hidden'
}

const mainImage = {
  width: '3000px',
  height: '500px',
  maxHeight: '100%',
  maxWidth: '100%',
  objectFit: 'contain',
  objectPosition: 'center top',
  cursor: 'zoom-out'
}

const thumbnailContainer = {
  position: 'absolute',
  top: '0',
  left: '0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  zIndex: '1',
  overflow: 'hidden'
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
  border: '4px solid blue'
}

const overlay = {
  position: 'relative',
  display: 'inline-block'
}

const arrowOverlay = {
  display: 'block',
  width: '100%'
}

const leftArrowOverlay = {
  position: 'absolute',
  left: '-600px',
  transform: 'translate(0%, -500%)',
  width: '50px',
  height: '50px',
  backgroundImage: 'url("leftArrow.png")',
  backgroundSize: 'cover'
}

const rightArrowOverlay = {
  position: 'absolute',
  right: '0',
  transform: 'translate(0%, -500%)',
  width: '50px',
  height: '50px',
  backgroundImage: 'url("rightArrow.png")',
  backgroundSize: 'cover'
}

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
      <div style={mainImageContainer}>
        <img src={currentImage} style={mainImage} alt={currentStyle.name} onClick={() => props.onClick()} />
        <div style={overlay}>
          <div style={arrowOverlay}>
            <div style={rightArrowOverlay} onClick={() => handleArrowRight()} ></div>
            <div style={leftArrowOverlay} onClick={() => handleArrowLeft()} ></div>
          </div>
        </div>
      </div>

      <div style={thumbnailContainer}>
        {display.map((photo, index) => {
          if (photo === currentImage) {
            return <img key={index} src={photo} style={thumbnailSelected} alt="thumnail image" height="75" onClick={(e) => handleClick(e)} />
          } else {
            return <img key={index} src={photo} style={thumbnailImage} alt="thumnail image" height="75" onClick={(e) => handleClick(e)} />
          }
        })}
      </div>
    </>
  )
}

export default ExpandedGallery;