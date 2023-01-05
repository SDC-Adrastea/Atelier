import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ReviewsList } from './Reviews/ReviewsList.jsx';
import { RatingsColumn } from './Reviews/RatingsColumn.jsx';

export const Reviews = (props) => {

  const [reviews, setReviews] = useState([]);
  const [reviewsShowing, setReviewsShowing] = useState(2);
  const [reviewsSortBy, setSort] = useState('relevant');
  const [averageRating, setAverageRating] = useState(0);

  var metadata = props.metadata;

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
  },[reviewsSortBy, props.productNum]);

  useEffect(() => {
    var reviewsLength = reviews.length || 1;
    var average = (reviews.reduce((accumulator, currentReview) => accumulator + currentReview.rating, 0) / reviewsLength).toFixed(2);
    setAverageRating(average);
  },[reviews]);

  return (
    <div data-testid="reviews" widgetname="Reviews" className="review">
    <h1 id="reviews-anchor" widgetname="Reviews">Ratings & Reviews</h1>
    <div style={{ display: "grid", gridTemplateColumns: "300px 60%", gridGap: 20 }}>
      <div>
        <RatingsColumn productNum={props.productNum} averageRating={averageRating} reviews={reviews} metadata={props.metadata}/>
      </div>
      <div>
        <ReviewsList productNum={props.productNum} product={props.product} reviews={reviews} setReviews={setReviews} reviewsShowing={reviewsShowing} setReviewsShowing={setReviewsShowing} reviewsSortBy={reviewsSortBy} setSort={setSort} metadata={props.metadata}/>
      </div>
    </div>
  </div>

  )
};