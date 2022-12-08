import React, {useState, useEffect} from 'react';
import { StarRating } from '../shared/StarRating/StarRating.jsx';


export const RatingsColumn = (props) => {

  var averageRating= props.averageRating;
  var averageRatingRounded= Number(props.averageRating).toFixed(1);

  return (
    <div>
      <h1 style={{float:'left'}}>{averageRatingRounded}</h1><br/><StarRating rating={averageRating} width={20} />
    </div>
  )
};