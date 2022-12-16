import React, {useState, useEffect} from 'react';
import {AddReviewStars} from './AddReviewStars.jsx';

export const AddReviewForm = ({ open, children, image, onClose }) => {

  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
  }

  const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    height: '80%',
    width: '80%',
    zIndex: 1000
  }

  // const IMAGE_STYLES = {
  //   maxHeight: '80%'
  // }

  if (!open) return null

  return (
    <>
      <div style={OVERLAY_STYLES}>
      <div style={MODAL_STYLES}>
        <button onClick={onClose}>&#10006;</button>
        <br/>
        <div>
          <h2>Write Your Review</h2>
          <h3>About the Product Name Here</h3>
          {/* <form> */}
            Overall Rating*
            <br/>
            Size: <AddReviewStars/><br/>
            Width: <AddReviewStars/><br/>
            Comfort: <AddReviewStars/><br/>
            Quality: <AddReviewStars/><br/>
            Length: <AddReviewStars/><br/>
            Fit: <AddReviewStars/><br/>
          {/* </form> */}
        </div>
      </div>
      </div>
    </>
  )
};