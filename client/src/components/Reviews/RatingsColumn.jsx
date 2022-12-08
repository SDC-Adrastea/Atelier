import React, {useState, useEffect} from 'react';
import { StarRating } from '../shared/StarRating/StarRating.jsx';


export const RatingsColumn = (props) => {

  var averageRating= props.averageRating;

  return (
    <div>
      <p>{averageRating} <StarRating rating={averageRating} width={15} /></p>
    </div>
  )
};