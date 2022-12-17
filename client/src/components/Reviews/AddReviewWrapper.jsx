import React, {useState, useEffect} from 'react';
import { AddReviewForm } from './AddReviewForm.jsx';

export const AddReviewWrapper = ({ product, image }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // console.log(product)
  return (
    <>
      <button onClick={() => setModalIsOpen(!modalIsOpen)}>Add a Review</button>
      <AddReviewForm open={modalIsOpen} product={product} onClose={() => setModalIsOpen(false)}/>
    </>
  )
};