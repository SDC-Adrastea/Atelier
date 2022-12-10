import React from 'react';

const ExpandedGallery = (props) => {
  return (
    <div className="expanded-view" onClick={() => props.onClick()}>
      <h4>Overview - Expanded Gallery View</h4>
    </div>
  )

}

export default ExpandedGallery;