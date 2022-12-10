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

  const [maxRatingCount, setMaxRatingCount] = useState(1);

  useEffect(() => {
    var tempObj = {
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0
    };
    var recommend = 0;
    var maxRatingCount = 1;

    props.reviews.forEach(review => {
      tempObj[review.rating]++;
      if (review.recommend) {
        recommend++;
      }
      maxRatingCount = Math.max(...Object.values(tempObj));
    })
    setRatings(tempObj);
    setRecommend(recommend);
    setMaxRatingCount(maxRatingCount);
  },[props.reviews])

  return (
    <div>
      <h4>{parseInt(Math.round((recommendCount/props.reviews.length)*100))}% of reviews recommend this product</h4>
      <div id="parent">
        <p className="child">5 Stars</p>
        <progress className="child" id="file" value={ratingsObject[5]/maxRatingCount*100} max="100"> </progress>
      </div>
      <div id="parent">
        <p className="child">4 Stars</p>
        <progress className="child" id="file" value={ratingsObject[4]/maxRatingCount*100} max="100"> </progress>
      </div>
      <div id="parent">
        <p className="child">3 Stars</p>
        <progress className="child" id="file" value={ratingsObject[3]/maxRatingCount*100} max="100"> </progress>
      </div>
      <div id="parent">
        <p className="child">2 Stars</p>
        <progress className="child" id="file" value={ratingsObject[2]/maxRatingCount*100} max="100"> </progress>
      </div>
      <div id="parent">
        <p className="child">1 Stars</p>
        <progress className="child" id="file" value={ratingsObject[1]/maxRatingCount*100} max="100"> </progress>
      </div>
    </div>
  )
};