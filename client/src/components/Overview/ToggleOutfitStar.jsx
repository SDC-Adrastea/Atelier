import React from 'react';

const ToggleOutfitStar = () => {
  return (
    <div className="toggle-star-btn">
      <h4>Overview - Toggle Outfit Star</h4>
      <button
        className="toggle-star"
        type="button"
        onClick={() => {
          // initial tester to send data to related section
          console.log('clicked Star button')
        }
        }>
        STAR
      </button>
    </div>
  )
}

export default ToggleOutfitStar;