import React, {useState, useEffect} from "react";
import axios from 'axios';
import { format, parseISO } from 'date-fns'

export const ReviewTile = (props) => {
  console.log('props in Review Tile', props)

  return (
    <div>
      {/* refactor for out of 5 stars with 1/4 increments */}
      star rating: {props.review.rating}
      <br/>
      {/* date of review Month DD, YYYY */}
      {format(parseISO(props.review.date), 'MMMM dd, yyyy')}
      <br/>
      {/* Review Summary in BOLD */}
      <b>{props.review.summary}</b>
      <br/>
      {/* Review Body with text and images*/}
      {props.review.review}
      <br/>
      {props.review.body}
      <hr />
    </div>
  )
};