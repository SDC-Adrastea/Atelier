import React, {useState, useEffect}  from 'react';

export const AddReviewStars = ({width = 20}) => {

  const [starState, setStarState] = useState(0);

  return (
    <>
    <br/>
    STARS: {starState}
    <br/>
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
                <img src="star.png" onMouseEnter={() => setStarState(index+1)} onMouseLeave={() => setStarState(0)}
                  style={{
                    height: `${width}px`,
                    width: `${width}px`,
                  }} />
          </div>
        </div>
    ))}
    </>
  )
};