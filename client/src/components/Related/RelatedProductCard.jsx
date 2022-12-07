import React, { useState, useEffect } from "react";
import axios from "axios";
import StarRating from "./StarRating.jsx"
import ComparisonModal from './ComparisonModal.jsx'

const RelatedProductCard = (props) => {

  const [cardData , setCardData] = useState({})
  const [showModal, setModal] = useState(false)

  useEffect(() => {
    axios.get('/relatedProductCardInformation', {
      params: { productNum: props.cardInfo }
    })
      .then((data) => {setCardData(data.data)})
  }, []);

  const modalClick = () => {
    setModal(true)
  }


  return (
    <div onClick ={setModal} className="related-product-card">
      {/* {console.log(cardData)} */}
      <img className="related-product-image" src={cardData.imageUrl} />
      <div>{cardData.category}</div>
      <div>{cardData.productName}</div>
      <div>${cardData.originalPrice}</div>
      <StarRating rating={cardData.averageReview}/>
      {showModal && <ComparisonModal />}
    </div>
  )
}

export default RelatedProductCard;