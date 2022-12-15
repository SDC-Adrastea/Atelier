import React, { useState, useEffect } from "react";
import YourOutfitCard from "./YourOutfitCard.jsx"


const OutfitCarousel = (props) => {
  const test = [props.productNum]


  const addToOutfitList = () => {
    props.changeOutfit((oldArr) => {
      return [...oldArr , props.productNum]
    })
  }

  const removeFrom = () => {
    props.changeOutfit((oldArr) => {
      oldArr.pop()
      return [...oldArr]
    })
  }


  //state for viewing window
  const [leftOffset, setLeftOffset] = useState(0)

  return (
    <div data-testid="outfit-carousel">
      <div>
        <button onClick={() => { setLeftOffset(leftOffset - 265) }}>Next</button>
      </div>
      <div className="overflow-window-outfit">
        <div className="youroutfit-carousel-container" style={{ marginLeft: `${leftOffset}px` }}>
          <button onClick={() => addToOutfitList()}>Add To Outfit List</button>
          <button onClick={() => { removeFrom() }}> Remove From Outfit List</button>
          {props.yourOutfit.map((item, index) => {
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
