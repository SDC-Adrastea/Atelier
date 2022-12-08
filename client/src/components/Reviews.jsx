import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ReviewsList } from './Reviews/ReviewsList.jsx';
import { RatingsColumn } from './Reviews/RatingsColumn.jsx';


export const Reviews = (props) => {
  // console.log('props in Reviews', props)

  const [reviews, setReviews] = useState([]);
  const [reviewsShowing, setReviewsShowing] = useState(2);
  const [reviewsSortBy, setSort] = useState('relevant');

  useEffect(() => {
    axios.get('/reviews',{
      params:{
        product_id: props.productNum,
        count: 999999999,
        sort: reviewsSortBy
      }
    })
      .then((results) => {
        setReviews(results.data.results);
      });
  },[reviewsSortBy]);


  return (
    <div>
    <h1>Ratings & Reviews</h1>
    <div style={{ display: "grid", gridTemplateColumns: "20% 66%", gridGap: 20 }}>
      <div>
        <RatingsColumn productNum={props.productNum} />
      </div>
      <div>
        <ReviewsList productNum={props.productNum} reviews={reviews} setReviews={setReviews} reviewsShowing={reviewsShowing} setReviewsShowing={setReviewsShowing} reviewsSortBy={reviewsSortBy} setSort={setSort} />
      </div>
    </div>
  </div>

  )
};