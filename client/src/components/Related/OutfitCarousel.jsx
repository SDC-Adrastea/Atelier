import React, { useState, useEffect } from "react";
import RelatedProductCard from './RelatedProductCard.jsx'


const OutfitCarousel = (props) => {
  var dummydata = [
    71698,
    71699,
    71704,
    71703
  ]

  const [leftOffset, setLeftOffset] = useState(0)


  return (
    <>
      <div>
        <button onClick={() => { setLeftOffset(leftOffset - 265) }}>Next</button>
      </div>
      <div className="overflow-window">
        <div className="youroutfit-carousel-container" style={{ marginLeft: `${leftOffset}px` }}>
          {dummydata.map((item, index) => {
            return (
              <RelatedProductCard cardInfo={item} key={index} />
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