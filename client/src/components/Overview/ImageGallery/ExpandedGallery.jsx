import React from 'react';

const ExpandedGallery = (props) => {
  console.log('props in expanded gallery', props)

  return (
    <div className="expanded-view" onClick={() => props.onClick()}>
      <h4>Expanded Main</h4>
      <h4>Overlay</h4>
    </div>
  )

}

export default ExpandedGallery;