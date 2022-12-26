import React from 'react'

// CSS Styles
const selections = {
  flexBasis: '20%',
  minWidth: '20%',
  margin: '5px',
  display: 'inline-block',
  padding: '10px',
  width: '50px'
}

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
      <button type="button" style={selections} onClick={() => { handleStar() }}>★</button>
    </>
  )
}

export default ToggleOutfitStar;