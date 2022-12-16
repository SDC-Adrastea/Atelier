import React from 'react';

const ToggleOutfitStar = (props) => {
  let id = props.id
  let outfit = props.outfit

  // function to handle star click
  const handleStar = () => {
    props.changeOutfit((outfit) => {
      if (outfit.includes(id)) {
        let index = outfit.indexOf(id)
        outfit.splice(index, 1)
        return [...outfit]
      }
      return [...outfit, id]
    })
  }


  return (
    <div className="toggle-star-btn">
      <button className="toggle-star" type="button" onClick={() => { handleStar() }} >
        STAR <img src="star.png" alt="star" width="10" />
      </button>
    </div>
  )
}

export default ToggleOutfitStar;