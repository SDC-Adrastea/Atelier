import React, {useState, useEffect} from 'react';


export const RatingsBreakdown = (props) => {
  var reviews = props.reviews;
  console.log(reviews);

  const [ratingsBreakdown, setRatings] = useState({
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0
  });

  useEffect(() => {
    reviews.forEach((review, index) => {
      console.log(review);
    })
  })

  // useEffect(() => {
  //   console.log(ratingsBreakdown)
  // })

  return (
    <div>
      Ratings Breakdown
    </div>
  )
};