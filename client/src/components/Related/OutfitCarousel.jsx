import React, { useState, useEffect } from "react";
import YourOutfitCard from "./YourOutfitCard.jsx"


const OutfitCarousel = (props) => {


  const [leftOffset, setLeftOffset] = useState(0)


  return (
    <>
      <div>
        <button onClick={() => { setLeftOffset(leftOffset - 265) }}>Next</button>
      </div>
      {console.log(props)}
      <div className="overflow-window">
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
    </>
  )
}

export default OutfitCarousel;