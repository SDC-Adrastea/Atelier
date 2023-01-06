import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { format, parseISO } from 'date-fns';
import { StarRating } from '../shared/StarRating/StarRating.jsx';
import { ReviewPhotoWrapper } from './ReviewPhotoWrapper.jsx';

export const ReviewTile = (props) => {
  const { review } = props;

  const [responseExists, setResponse] = useState(false);
  const [helpfulClicked, setHelpfulClicked] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(props.review.helpfulness);

  // console.log('review id:', props.review.review_id);
  // console.log('helpfullness', props.review.helpfulness);

  const reviewHelpful = (review_id) => {
    if (!helpfulClicked) {
      return axios({
        method: 'put',
        url: '/reviewHelpful',
        data: {'review_id': review_id}
      })
      .then(() => {
        setHelpfulCount(helpfulCount+1)
        setHelpfulClicked(true);
      })
      .catch(err => console.log('error', err))
    }
  }

  return (
    <div data-testid="review-tile" widgetname="Reviews">
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
      {review.recommend ? <p widgetname="Reviews">&#10003; I recommend this product</p> : null}
      {review.response ? (<p widgetname="Reviews"> {review.response} </p>) : null}
      { review.photos.length > 0 ? <br /> : null }
      { review.photos.length > 0 ? <br /> : null }
      { review.photos.length > 0 ? review.photos.map((photo, index)=> {
          return (
            <div key={index} className="thumbnailDiv">
            <ReviewPhotoWrapper image={photo.url} />
            </div>
            )
          })
        : null }
        {/* Need to add helpfulness voting function (with cookies maybe?) */}
      <p>Helpful? <u onClick={() =>  reviewHelpful(props.review.review_id)}>Yes</u> ({helpfulCount})</p>
      <hr />
    </div>
  )
};