import React, { useState, useEffect } from "react";
import RelatedProductCard from './RelatedProductCard.jsx'
import ComparisonModal from './ComparisonModal.jsx'


const RelatedCarousel = (props) => {

  const [leftOffset, setLeftOffset] = useState(0)


  return (
    <>
    <h4>Related Products</h4>
      <div data-testid="related-carousel">
        <div className="related-carousel-transparent-container">
          <div className="overflow-window-related">
            <img src="rightArrow.PNG" className="related-next-button" onClick={() => { setLeftOffset(leftOffset - 265) }} />
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
          <button onClick={() => { setLeftOffset(leftOffset + 265) }}>Back</button>
        </div>
      </div>
    </>
  )
}








export default RelatedCarousel;