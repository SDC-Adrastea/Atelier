import React, { useState, useEffect } from "react";
import RelatedProductCard from './RelatedProductCard.jsx'
import ComparisonModal from './ComparisonModal.jsx'


const RelatedCarousel = (props) => {

  const [leftOffset, setLeftOffset] = useState(0)
  const [cardsClickedThrough , setCardClick] = useState(0)
  const totalOffSet = props.related.length * 265
  const totalWidth = 265 * 4



   const numberOfHiddenCardsStarting = ( totalOffSet - 1060 ) / 265 // number of cards not shown






  return (
    <>
      <h4>Related Products</h4>
      <div data-testid="related-carousel">
        <div className="related-carousel-transparent-container">
          <div className="overflow-window-icon">
            {leftOffset < 0 &&
              <img src="leftArrow.png" className="related-previous-button" onClick={() => {
                setLeftOffset(leftOffset + 265)
                setCardClick(cardsClickedThrough - 1)
              }} />
            }
            {leftOffset >= 0 &&
              <img src="blank.png" className="related-previous-button" />
            }

            <div className="overflow-window-related">
              { cardsClickedThrough < numberOfHiddenCardsStarting &&
              <img src="rightArrow.PNG" className="related-next-button" onClick={() => {
                setLeftOffset(leftOffset - 265)
                setCardClick(cardsClickedThrough + 1)
              }} />
              }
              <div className="related-carousel-container" style={{ marginLeft: `${leftOffset}px` }}>
                {props.related.map((item, index) => {
                  return (
                    <RelatedProductCard cardInfo={item} key={index} productNum={props.productNum} setProductNum={(newNum) => { props.setProductNum(newNum) }} />
                  )
                })}
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}








export default RelatedCarousel;