import React, { useState, useEffect } from "react";
import YourOutfitCard from "./YourOutfitCard.jsx"


const OutfitCarousel = (props) => {


  const [leftOffset, setLeftOffset] = useState(0)


  return (
    <div data-testid="outfit-carousel">
      <div>
        <button onClick={() => { setLeftOffset(leftOffset - 265) }}>Next</button>
      </div>
      <div className="overflow-window-outfit">
        <div className="youroutfit-carousel-container" style={{ marginLeft: `${leftOffset}px` }}>
          <button onClick={(num) => {props.test(props.productNum)}}>Add To Outfit List</button>
          {props.dummyData.map((item, index) => {
            return (
              <YourOutfitCard cardInfo={item} key={index} />
              )
            })}
        </div>
      </div>
      <div>
        <button onClick={() => { setLeftOffset(leftOffset + 265) }}>Back</button>
      </div>
  </div>
  )
}

export default OutfitCarousel;