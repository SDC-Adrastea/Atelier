import React from 'react';

const ToggleOutfitStar = (props) => {

  return (
    <div className="toggle-star-btn">
      <button
        className="toggle-star"
        type="button"
        onClick={(e) => {
          // currently using the style_id
          props.toggleStar(props.id)
        }
        }>
        STAR
      </button>
    </div>
  )
}

export default ToggleOutfitStar;