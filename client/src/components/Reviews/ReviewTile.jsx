import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { format, parseISO } from 'date-fns';
import { StarRating } from '../shared/StarRating/StarRating.jsx';

export const ReviewTile = (props) => {
  const { review } = props;

  const [responseExists, setResponse] = useState(false);

  // useEffect(() => {
  //   console.log(review);
  // });

  return (
    <div>
      <StarRating rating={review.rating} />
      {review.reviewer_name}
      <br/>
      {format(parseISO(review.date), 'MMMM dd, yyyy')}
      <br/>
      <b>{review.summary.slice(0,60)}</b>
      <br/>
      {/* Review Body with text and images*/}
      {/* By default the first 250 characters of the review should display.  If the review is longer than 250 characters, below the body a link reading “Show more” will appear.  Upon clicking this link, the review tile should expand and the rest of the review should display. */}
      {review.review}
      <br/>
      {review.body}
      {review.recommend ? <p>&#10003; I recommend this product</p> : null}
      {review.response ? (<p> {review.response} </p>) : null}
      { review.photos.length > 0 ? <br /> : null }
      { review.photos.length > 0 ? <br /> : null }
      { review.photos.length > 0 ? review.photos.map((photo, index)=> {
        // need to resize photo and turn into modal when clicked
          return (<img key={index} className="reviewImage" hspace="5" src={`${photo.url}`} />);
        }) : null }
        {/* Need to add helpfulness voting function (with cookies maybe?) */}
      <p>Helpful? <u>Yes</u> ({review.helpfulness})</p>
      <hr />
    </div>
  )
};