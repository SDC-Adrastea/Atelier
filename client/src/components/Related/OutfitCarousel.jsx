import React, { useState, useEffect } from "react";
import YourOutfitCard from "./YourOutfitCard.jsx"

const OutfitCarousel = (props) => {
  const addToOutfitList = () => {
    props.changeOutfit((oldArr) => {
      if (oldArr.includes(props.productNum)) {
        return [...oldArr]
      }
      return [...oldArr, props.productNum]
    })
  }

  //state for viewing window
  const [leftOffset, setLeftOffset] = useState(0)
  const [cardsClickedThrough, setCardClick] = useState(0)
  const totalOffSet = props.yourOutfit.length * 265
  const numberOfHiddenCardsStarting = (totalOffSet - 795) / 265 // number of cards not shown

  return (
    <div className="your-outfit-carousel-transparent-container">
      <div data-testid="outfit-carousel">
        <div className="overflow-window-icon-outfit">
          {leftOffset < 0 &&
            <img src="left-arrow.png" className="related-previous-button" onClick={() => {
              setLeftOffset(leftOffset + 265)
              setCardClick(cardsClickedThrough - 1)
            }} />
          }
          {leftOffset >= 0 &&
            <img src="blank-item.png" className="related-previous-button" widgetname="Related" id="your-outfit-left-arrow"/>
          }
          <img className="outfit-product-card-1" src="addtooutfit.png" onClick={() => addToOutfitList()} widgetname="Related" id="add-to-outfit-card"/>
          <div className="overflow-window-outfit">
            {
              cardsClickedThrough < numberOfHiddenCardsStarting &&
            <img src="right-arrow.png" className="yourOutfit-next-button" widgetname="Related" id="your-outfit-right-arrow" onClick={() => {
              setLeftOffset(leftOffset - 265)
              setCardClick(cardsClickedThrough + 1)
            }
            } />
            }
            <div className="youroutfit-carousel-container" style={{ marginLeft: `${leftOffset}px` }}>
              {props.yourOutfit.map((item, index) => {
                return (
                  <YourOutfitCard cardInfo={item} key={index} changeOutfit={(arr) => { props.changeOutfit(arr) }} />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OutfitCarousel;
