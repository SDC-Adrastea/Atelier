import React, {useState, useEffect} from 'react';
import { ReviewPhotoModal } from './ReviewPhotoModal.jsx';

export const ReviewPhotoWrapper = ({ image }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <img onClick={() => setModalIsOpen(!modalIsOpen)} className="reviewImage" hspace="5" src={`${image}`} />
      <ReviewPhotoModal open={modalIsOpen} image={image} onClose={() => setModalIsOpen(false)}>
      </ReviewPhotoModal>
    </>
  )
};