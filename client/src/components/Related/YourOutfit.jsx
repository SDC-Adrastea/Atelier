import React, { useState, useEffect } from "react"
import OutfitCarousel from "./OutfitCarousel.jsx"

const YourOutfit = (props) => {


  return (
    <div data-testid="your-outfit">
      <h4>Your Outfit</h4>
        <OutfitCarousel
          productNum={props.productNum}
          yourOutfit={props.yourOutfit}
          changeOutfit={(arr) => {props.changeOutfit(arr)}}
          />
    </div>
  )
}



export default YourOutfit;