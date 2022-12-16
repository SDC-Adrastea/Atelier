import React, {useState, useEffect} from 'react';
import { AddReviewForm } from './AddReviewForm.jsx';

export const AddReviewWrapper = ({ image }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setModalIsOpen(!modalIsOpen)}>Add a Review</button>
      <AddReviewForm open={modalIsOpen} onClose={() => setModalIsOpen(false)} />
    </>
  )
};