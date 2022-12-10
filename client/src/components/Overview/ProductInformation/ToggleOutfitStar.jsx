import React from 'react';

const ToggleOutfitStar = (props) => {

  return (
    <div className="toggle-star-btn">
      <button
        className="toggle-star"
        type="button"
        onClick={(e) => {
          // initial tester to send data to related section
          console.log('clicked Star button', props.id)
          props.toggleStar(props.id)
        }
        }>
        STAR
      </button>
    </div>
  )
}

export default ToggleOutfitStar;