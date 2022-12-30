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
            <img src="leftArrow.png" className="related-previous-button" onClick={() => {
              setLeftOffset(leftOffset + 265)
              setCardClick(cardsClickedThrough - 1)
            }} />
          }
          {leftOffset >= 0 &&
            <img src="blank.png" className="related-previous-button" />
          }
          <img className="outfit-product-card-1" src="lucyButton.png" onClick={() => addToOutfitList()} />
          <div className="overflow-window-outfit">
            {
              cardsClickedThrough < numberOfHiddenCardsStarting &&
            <img src="rightArrow.PNG" className="yourOutfit-next-button" onClick={() => {
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
