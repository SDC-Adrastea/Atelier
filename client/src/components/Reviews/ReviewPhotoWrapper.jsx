import React, {useState, useEffect} from 'react';
import { ReviewPhotoModal } from './ReviewPhotoModal.jsx';

export const ReviewPhotoWrapper = ({ image }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <img widgetname="Reviews" alt="reviews" data-testid="review-photo-wrapper" onClick={() => setModalIsOpen(!modalIsOpen)} className="reviewImage" src={`${image}`} />
      <ReviewPhotoModal open={modalIsOpen} image={image} onClose={() => setModalIsOpen(false)} />
    </>
  )
};