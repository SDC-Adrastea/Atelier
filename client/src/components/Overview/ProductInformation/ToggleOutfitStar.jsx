import React from 'react'

import '../../../styles/overview.css'

const ToggleOutfitStar = (props) => {
  let id = props.id
  let outfit = props.outfit

  // function to handle star click, add/remove outfit
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
    <>
      <button type="button" id="toggle-outfit-star" className="selections" onClick={() => { handleStar() }}>★</button>
    </>
  )
}

export default ToggleOutfitStar;