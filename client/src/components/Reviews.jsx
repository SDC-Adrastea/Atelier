import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ReviewsList } from './Reviews/ReviewsList.jsx';
import { RatingsColumn } from './Reviews/RatingsColumn.jsx';

export const Reviews = (props) => {

  const [reviews, setReviews] = useState([]);
  const [reviewsShowing, setReviewsShowing] = useState(2);
  const [reviewsSortBy, setSort] = useState('relevant');
  const [averageRating, setAverageRating] = useState(0);


  // --------- RATINGS FILTERING --------- //

  // filter status
  const [ratingFilterStatus, setRatingFilterStatus] = useState(false);
  // filtered list
  const [filteredReviewList, setFilteredReviewList] = useState([]);
  // fiveStars
  const [fiveStarFilter, setFiveStarFilter] = useState(false);
  // fourStars
  const [fourStarFilter, setFourStarFilter] = useState(false);
  // threeStars
  const [threeStarFilter, setThreeStarFilter] = useState(false);
  // twoStars
  const [twoStarFilter, setTwoStarFilter] = useState(false);
  // oneStars
  const [oneStarFilter, setOneStarFilter] = useState(false);

  const ratingFilterFunc = (clicked) => {
    // copy of existing filtered list that will be modified and used to reset state
    let tempFilterList = [...filteredReviewList]

    if (clicked === 5) {
      // if filter for this rating is on
      if (fiveStarFilter) {
        // remove all reviews with rating of 5 from the list
        tempFilterList.forEach((review, index) => {
          if (review.rating === 5) {
            tempFilterList.splice(index, 1);
          }
        })
      // if filter for this rating is off
      } else {
        // add all reviews with rating of 5 to the filtered list
        reviews.forEach((review) => {
          if (review.rating === 5) {
            tempFilterList.push(review);
          }
        })
      }
      // toggle rating filter status
      setFiveStarFilter(!fiveStarFilter)
    } else if (clicked === 4) {
      setFourStarFilter(!fourStarFilter)
    } else if (clicked === 3) {
      setThreeStarFilter(!threeStarFilter)
    } else if (clicked === 2) {
      setTwoStarFilter(!twoStarFilter)
    } else if (clicked === 1) {
      setOneStarFilter(!oneStarFilter)
    }
    // replace filtered list with new filtered list
    setFilteredReviewList(tempFilterList);
  }

  const clearFilters = () => {
    setFiveStarFilter(false);
    setFourStarFilter(false);
    setThreeStarFilter(false);
    setTwoStarFilter(false);
    setOneStarFilter(false);
    setRatingFilterStatus(false);
    setFilteredReviewList([]);
  }

  useEffect(() => {
    if (oneStarFilter || twoStarFilter || threeStarFilter || fourStarFilter || fiveStarFilter) {
      setRatingFilterStatus(true);
    } else {
      setRatingFilterStatus(false);
    }
  }, [filteredReviewList]);

  // ------------------------------------------ //


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
        <ReviewsList productNum={props.productNum} product={props.product} reviews={ratingFilterStatus ? filteredReviewList : reviews} setReviews={setReviews} reviewsShowing={reviewsShowing} setReviewsShowing={setReviewsShowing} reviewsSortBy={reviewsSortBy} setSort={setSort} metadata={props.metadata}/>
      </div>
    </div>
  </div>

  )
};