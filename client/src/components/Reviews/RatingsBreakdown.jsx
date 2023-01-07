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

    props.reviews.forEach(review => {
      tempObj[review.rating]++;
      if (review.recommend) {
        recommend++;
      }
    })
    setRatings(tempObj);
    setRecommend(recommend);
  },[props.reviews])

  let element;

  if (props.reviews.length > 0) {
    element = (
      <div data-testid="ratings-breakdown" id="ratings-breakdown" widgetname="Reviews">
    <h4>{parseInt(Math.round((recommendCount/props.reviews.length)*100))}% of reviews recommend this product</h4>
    <div id="parent" widgetname="Reviews" >
      <p className="child" widgetname="Reviews" >5 Stars</p>
      <progress className="child" id="file" value={ratingsObject[5]/props.reviews.length*100} max="100" widgetname="Reviews" > </progress> {ratingsObject[5]} reviews
    </div>
    <div id="parent" widgetname="Reviews" >
      <p className="child" widgetname="Reviews" >4 Stars</p>
      <progress className="child" id="file" value={ratingsObject[4]/props.reviews.length*100} max="100" widgetname="Reviews" > </progress> {ratingsObject[4]} reviews
    </div>
    <div id="parent" widgetname="Reviews" >
      <p className="child" widgetname="Reviews" >3 Stars</p>
      <progress className="child" id="file" value={ratingsObject[3]/props.reviews.length*100} max="100" widgetname="Reviews" > </progress> {ratingsObject[3]} reviews
    </div>
    <div id="parent" widgetname="Reviews" >
      <p className="child" widgetname="Reviews" >2 Stars</p>
      <progress className="child" id="file" value={ratingsObject[2]/props.reviews.length*100} max="100" widgetname="Reviews" > </progress> {ratingsObject[2]} reviews
    </div>
    <div id="parent" widgetname="Reviews" >
      <p className="child" widgetname="Reviews" >1 Stars</p>
      <progress className="child" id="file" value={ratingsObject[1]/props.reviews.length*100} max="100" widgetname="Reviews" > </progress> {ratingsObject[1]} reviews
    </div>
  </div>
  )
}

if (props.reviews === undefined) {
  element = (
    <div data-testid="ratings-breakdown" id="ratings-breakdown" widgetname="Reviews"></div>
  )
}

  return (
    <>
    {element}
    </>
  )
};