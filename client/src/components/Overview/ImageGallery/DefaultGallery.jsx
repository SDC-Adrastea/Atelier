import React from 'react';

const DefaultGallery = (props) => {
  return (
    <div className="default-view" onClick={() => props.onClick()}>
      <h4>Overview - Default Gallery View</h4>
    </div>
  )
}

export default DefaultGallery;