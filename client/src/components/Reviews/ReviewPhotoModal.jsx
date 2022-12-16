import React, {useState, useEffect} from 'react';

export const ReviewPhotoModal = ({ open, children}) => {

  if (!open) return null

  return (
    <>
    <img key={index} onClick={() => setModalIsOpen(!modalIsOpen)} className="reviewImage" hspace="5" src={`${photo.url}`} />
      ReviewPhotoModal
    </>
  )
};