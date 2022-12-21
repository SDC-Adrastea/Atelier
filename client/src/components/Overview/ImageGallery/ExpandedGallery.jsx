import React from 'react'

// CSS styles
const mainImage = {

}

const thumbnailOverlay = {

}

const ExpandedGallery = (props) => {
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

  let handleClick = (e) => {
    e.preventDefault()
    let url = e.target.src
    props.thumbnailChange(url)
  }

  // console.log('props in expanded gallery', props)

  return (
    <div className="expanded-view" onClick={() => props.onClick()}>
      Expanded
      <div className="expanded-main">
        <img
          src={currentImage}
          alt={currentStyle.name}
          height="250"
          onClick={() => props.onClick()}
        />
      </div>

      <div className="expanded-overlay">
        {imageArr.map((photo, index) => {
          return (
            <img
              className="expanded-thumbnail"
              key={index}
              src={photo}
              alt="expanded thumnail"
              height="75"
              onClick={(e) => handleClick(e)}
            />
          )
        })}
      </div>
    </div>
  )

}

export default ExpandedGallery;