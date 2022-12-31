import React, {useState, useEffect} from 'react';

export const ReviewPhotoModal = ({ open, children, image, onClose }) => {

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
    zIndex: 1000
  }

  const IMAGE_STYLES = {
    maxHeight: '80vh'
  }

  if (!open) return null

  return (
    <>
      <div style={OVERLAY_STYLES} data-testid="review-photo-modal">
      <div style={MODAL_STYLES}>
        <button onClick={onClose}>&#10006;</button>
        <br/>
        <br/>
        <img src={`${image}`} style={IMAGE_STYLES}></img>
      </div>
      </div>
    </>
  )
};