import React, { useState, useEffect } from "react";
import YourOutfitCard from "./YourOutfitCard.jsx"


const OutfitCarousel = (props) => {

  const addToOutfitList = () => {
    props.changeOutfit((oldArr) => {
      if(oldArr.includes(props.productNum)) {
        return [...oldArr]
      }
      return [...oldArr , props.productNum]
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
          {/* <button onClick={() => addToOutfitList()}>Add To Outfit List</button> */}
          {/* <div className="outfit-product-card-1"  onClick={() => addToOutfitList()} >Add To Outfit</div> */}
          <img className="outfit-product-card-1" src="lucyButton.png" onClick={() => addToOutfitList()}/>
          {props.yourOutfit.map((item, index) => {
            return (
              <YourOutfitCard cardInfo={item} key={index} changeOutfit={(arr) => {props.changeOutfit(arr)}}/>
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
