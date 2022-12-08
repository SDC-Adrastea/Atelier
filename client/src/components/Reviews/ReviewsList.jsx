import React, {useState, useEffect} from "react";
import axios from 'axios';
import { ReviewTile } from "./ReviewTile.jsx";


export const ReviewsList = (props) => {
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
      {reviews.length} reviews, sorted by&nbsp;
      <select onChange={e => {setSort(e.target.value)}}>
        <option value="relevant">relevance</option>
        <option value="newest">newest</option>
        <option value="helpful">most helpful</option>
      </select>
      <br />
      <br />
      { reviews.slice(0,reviewsShowing).map((review, index)=> {
          return (<div key={index + 1} ><ReviewTile review={review} /></div>) ;
        }) }
      { reviews.length > 2 && reviewsShowing < reviews.length ? <button onClick={() => setReviewsShowing(reviewsShowing+2)}>More Reviews</button> : null }
      <button>Add a Review</button>
    </div>
  )
};