export const mainImageContainer = {
  position: 'relative',
  width: '700px',
  height: '500px',
  maxHeight: '100%',
  maxWidth: '100%',
  overflow: 'hidden',
  textAlign: 'justify'
}

export const expMainImageContainer = {
  position: 'relative',
  width: '100%',
  height: '500px',
  maxHeight: '100%',
  maxWidth: '100%',
  overflow: 'hidden',
  textAlign: 'justify'
}

export const mainImage = {
  width: '700px',
  height: '500px',
  maxHeight: '100%',
  maxWidth: '100%',
  objectFit: 'contain',
  objectPosition: 'center top',
  cursor: 'zoom-in'
}

export const expMainImage = {
  width: '3000px',
  height: '500px',
  maxHeight: '100%',
  maxWidth: '100%',
  objectFit: 'contain',
  objectPosition: 'center top',
  cursor: 'zoom-out'
}

export const thumbnailContainer = {
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

export const thumbnailImage = {
  width: '80px',
  height: '60px',
  objectFit: 'cover',
  margin: '10px',
  cursor: 'pointer'
}

export const thumbnailSelected = {
  width: '80px',
  height: '60px',
  objectFit: 'cover',
  margin: '10px',
  cursor: 'pointer',
  border: '4px solid blue'
}

export const overlay = {
  position: 'relative',
  display: 'inline-block'
}

export const arrowOverlay = {
  display: 'block',
  width: '100%'
}

export const leftArrowOverlay = {
  position: 'relative',
  left: '95px',
  transform: 'translateY(-500%)',
  width: '50px',
  height: '50px',
  backgroundImage: 'url("leftarrow.png")',
  backgroundSize: 'cover'
}

export const rightArrowOverlay = {
  position: 'absolute',
  right: '0',
  transform: 'translate(0%, -500%)',
  width: '50px',
  height: '50px',
  backgroundImage: 'url("right-arrow.png")',
  backgroundSize: 'cover'
}