import React, {useState, useEffect}  from 'react';

export const OverallReviewStars = ({starState, setStarState, width = 20}) => {

  // const [starState, setStarState] = useState(0);
  const [ratingDescription, setRatingDescription] = useState('');

  useEffect(() => {
    var ratingMap = {
      1: 'Poor',
      2: 'Fair',
      3: 'Average',
      4: 'Good',
      5: 'Great'
    }
    setRatingDescription(ratingMap[starState])

  },[starState]);

  return (
    <>
    {[...Array(5)].map((star, index) => (
      <div style={{
        height: `${width}px`,
        width: `${width}px`,
        display: 'inline-block',
      }} key={index+1}>
          <div style={{
            height: `${width}px`,
            width: `${parseInt(((index < starState) ? 1*width : 0), 10)}px`,
            // width: `${parseInt((1*width), 10)}px`,
            backgroundColor: 'black',
            position: 'relative',
            display: 'inline-block',
          }}>
                <img src="star.png" alt="review star" id={`${index+1}-star-overall`} widgetname="Reviews" onClick={() => setStarState(index+1)}
                  style={{
                    height: `${width}px`,
                    width: `${width}px`,
                  }} />
          </div>
        </div>
    ))}
    {ratingDescription}
    </>
  )
};