import React, {useState, useEffect} from 'react';
import { StarRating } from '../shared/StarRating/StarRating.jsx';
import { RatingsBreakdown } from './RatingsBreakdown.jsx';
import { ProductBreakdown } from './ProductBreakdown.jsx';


export const RatingsColumn = (props) => {

  var metadata = props.metadata;
  var averageRating = props.averageRating;
  var averageRatingRounded = Number(props.averageRating).toFixed(1);

  return (
    <div data-testid="ratings-column" id="ratings-column" widgetname="Reviews">
      <h1 style={{float:'left'}} widgetname="Reviews" >{averageRatingRounded}</h1><br/><StarRating rating={averageRating} width={20} />
      <br />
      <br />
      <br />
      <br />
      <RatingsBreakdown reviews={props.reviews} ratingFilterFunc={props.ratingFilterFunc}/>
      <br />
      <br />
      <ProductBreakdown metadata={props.metadata}/>
    </div>
  )
};