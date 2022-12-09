import React, { useState, useEffect } from "react"
import OutfitCarousel from "./OutfitCarousel.jsx"

const YourOutfit = (props) => {
  return (
    <>
      <h4>Your Outfit</h4>
      <div>
        <OutfitCarousel />
      </div>
    </>
  )
}

export default YourOutfit;