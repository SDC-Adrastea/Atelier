import React, {useState, useEffect} from 'react';
import { AddReviewForm } from './AddReviewForm.jsx';

export const AddReviewWrapper = ({ product, image, metadata }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // console.log(metadata);

  return (
    <>
      <button className="reviewBtn" widgetname="Reviews" id="add-review-btn" onClick={() => setModalIsOpen(!modalIsOpen)} data-testid="add-review-wrapper">Add a Review</button>
      <AddReviewForm  widgetname="Reviews" open={modalIsOpen} product={product} characteristics={metadata.characteristics} onClose={() => setModalIsOpen(false)} />
    </>
  )
};