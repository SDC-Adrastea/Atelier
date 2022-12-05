import React, {useState , useEffect} from "react";
import RelatedProductCard from './RelatedProductCard.jsx'
import ComparisonModal from './ComparisonModal.jsx'

const RelatedCarousel = (props) => {
  var relatedProducts = props.related

  return (
    <div className="carousel">
      {relatedProducts.map((item, index) => {
        return (
          <RelatedProductCard cardInfo={item} key={index}/>
        )
      })}
    </div>
  )
}

export default RelatedCarousel;