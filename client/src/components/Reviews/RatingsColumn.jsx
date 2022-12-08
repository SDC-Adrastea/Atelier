import React, {useState, useEffect} from 'react';
import { StarRating } from '../shared/StarRating/StarRating.jsx';


export const RatingsColumn = (props) => {

  // useEffect(() => {
  //   axios.get('/reviews',{
  //     params:{
  //       product_id: props.productNum,
  //       count: 999999999,
  //       sort: reviewsSortBy
  //     }
  //   })
  //     .then((results) => {
  //       setReviews(results.data.results);
  //     });
  // },[reviewsSortBy]);

  return (
    <div>
      <h1>Ratings Column</h1>
    </div>
  )
};