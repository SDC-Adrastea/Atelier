import React, {useState, useEffect} from 'react';


export const RatingsBreakdown = (props) => {
  // var reviews = props.reviews;
  // console.log(reviews);

  const [ratingsObject, setRatings] = useState({
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0
  });

  useEffect(() => {
    var tempObj = {
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0
    };
    props.reviews.forEach(review => {
      tempObj[review.rating]++;
    })
    setRatings(tempObj);
  },[props.reviews])

  return (
    <div>
      Ratings Breakdown
    </div>
  )
};