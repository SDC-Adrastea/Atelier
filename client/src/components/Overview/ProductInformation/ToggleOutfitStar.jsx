import React from 'react'
import * as css from './ProductInformationCSS.jsx'


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
      <button type="button" style={css.selections} onClick={() => { handleStar() }}>★</button>
    </>
  )
}

export default ToggleOutfitStar;