import React, {useState, useEffect} from "react";
import axios from 'axios';
import { format, parseISO } from 'date-fns';
import { StarRating } from '../shared/starRating.jsx';

export const ReviewTile = (props) => {
  const { review } = props;
  console.log('props in Review Tile', props)

  return (
    <div>
      {/* refactor for out of 5 stars with 1/4 increments */}
      {/* star rating: {review.rating} */}
      <StarRating rating={review.rating} />
      <br/>
      {/* date of review Month DD, YYYY */}
      {format(parseISO(review.date), 'MMMM dd, yyyy')}
      <br/>
      {/* Review Summary in BOLD */}
      <b>{review.summary.slice(0,60)}</b>
      <br/>
      {/* Review Body with text and images*/}
      {/* By default the first 250 characters of the review should display.  If the review is longer than 250 characters, below the body a link reading “Show more” will appear.  Upon clicking this link, the review tile should expand and the rest of the review should display. */}
      {review.review}
      <br/>
      {review.body}
      {review.recommend ? <p>&#10003; I recommend this product</p> : null}
      { review.photos.length > 0 ? review.photos.map((photo, index)=> {
        // need to resize photo and turn into modal when clicked
          return (<img key={index} width="100" hspace="5" src={`${photo.url}`} />);
        }) : null }
      <hr />
    </div>
  )
};