import React from 'react';

const ToggleOutfitStar = (props) => {

  return (
    <div className="toggle-star-btn">
      <button
        className="toggle-star"
        type="button"
        onClick={(e) => {
          // currently using the style_id
          console.log('star clicked')
          props.toggleStar(props.id)
        }}>
        STAR <img src="star.png" alt="star" width="10" />
      </button>
    </div>
  )
}

export default ToggleOutfitStar;