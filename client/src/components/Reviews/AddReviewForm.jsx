import React, {useState, useEffect} from 'react';
import {OverallReviewStars} from './OverallReviewStars.jsx';

export const AddReviewForm = ({ open, children, image, onClose, product }) => {

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

  if (!open) return null

  return (
    <>
      <div style={OVERLAY_STYLES}>
      <div style={MODAL_STYLES}>
        <button onClick={onClose}>&#10006;</button>
        <br/>
        <form>
          <h2>Write Your Review</h2>
          <h3>About the {product.name}</h3>
          {/* <form> */}
            Overall Rating*<br/>
            <OverallReviewStars/><br/>
            <br/>
            Size: <br/>
            Width: <br/>
            Comfort: <br/>
            Quality: <br/>
            Length: <br/>
            Fit: <br/>
          {/* </form> */}
        </form>
      </div>
      </div>
    </>
  )
};