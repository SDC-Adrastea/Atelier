import React, {useState, useEffect} from 'react';


export const RatingsBreakdown = (props) => {

  const [ratingsObject, setRatings] = useState({
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0
  });

  const [recommendCount, setRecommend] = useState(0);

  const [maxRatingCount, setMaxRatingCount] = useState(0);

  useEffect(() => {
    var tempObj = {
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0
    };
    var recommend = 0;
    var ratingCount = 0;

    props.reviews.forEach(review => {
      tempObj[review.rating]++;
      if (review.recommend) {
        recommend++;
      }
    })
    setRatings(tempObj);
    setRecommend(recommend);
    setMaxRatingCount(Math.max(...Object.values(tempObj)));
  },[props.reviews])

  return (
    <div>
      <h4>{parseInt(Math.round((recommendCount/props.reviews.length)*100))}% of reviews recommend this product</h4>
      <h4>5 Stars:</h4>
      <progress id="file" value={ratingsObject[5]/maxRatingCount*100} max="100"> </progress>
      <h4>4 Stars:</h4>
      <progress id="file" value={ratingsObject[4]/maxRatingCount*100} max="100"> </progress>
      <h4>3 Stars:</h4>
      <progress id="file" value={ratingsObject[3]/maxRatingCount*100} max="100"> </progress>
      <h4>2 Stars:</h4>
      <progress id="file" value={ratingsObject[2]/maxRatingCount*100} max="100"> </progress>
      <h4>1 Star:</h4>
      <progress id="file" value={ratingsObject[1]/maxRatingCount*100} max="100"> </progress>
    </div>
  )
};