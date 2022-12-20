import React from 'react'

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
    <>
      <button className="toggle-star" type="button" onClick={() => { handleStar() }} >
        <img src="star2.png" alt="star" width="20" />
      </button>
    </>
  )
}

export default ToggleOutfitStar;