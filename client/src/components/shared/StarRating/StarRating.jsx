import React from 'react';

export const StarRating = ({ rating = 0, width = 20 }) => {

  // stars glitch when less than 15
  if (width < 15) { width = 15 }

  let wholes = Math.floor(rating);
  let decimals = rating - wholes;

  const stars = [];

  // push whole stars into array
  while (wholes > 0) {
    stars.push(1.0);
    wholes -= 1;
  }

  // push partial stars rounded to the nearest .25 into array
  if (decimals > 0) {
    stars.push((Math.round(parseFloat(decimals) * 4) / 4).toFixed(2))
  }

  // push partial stars rounded to the nearest .10 into array
  // stars.push((Math.round(parseFloat(decimals) * 10) / 10).toFixed(2))

  // push empty stars into array
  while (stars.length < 5) {
    stars.push(0)
  }

  return (
    <div data-testid="StarRating">
      {stars.map((star, index) => (
        <div style={{
          height: `${width}px`,
          width: `${width}px`,
          display: 'inline-block',
        }} key={index}>
          <div style={{
            height: `${width}px`,
            width: `${parseInt(star * width, 10)}px`,
            backgroundColor: 'black',
            position: 'relative',
            display: 'inline-block',
          }}>
            <img src="star.png" style={{
              height: `${width}px`,
              width: `${width}px`,
            }} />
          </div>
        </div>
      ))}
    </div>
  )
};