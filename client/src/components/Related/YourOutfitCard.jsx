import React, { useState, useEffect } from "react";
import axios from "axios";
// import ComparisonModal from './ComparisonModal.jsx'
import { StarRating } from '../shared/StarRating/StarRating.jsx';

const YourOutfitCard = (props) => {
  const id = props.cardInfo

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
    <div onClick={() => {console.log('ive been clicked')
    props.setProductNum(id)}} className="related-product-card">
      {/* <button onClick ={setModal}>COMPARE</button> */}
      <img className="related-product-image" src={cardData.imageUrl} />
      <div>{cardData.category}</div>
      <div>{cardData.productName}</div>
      <div>${cardData.originalPrice}</div>
      <StarRating rating={cardData.averageReview}/>
      {/* {showModal && <ComparisonModal primaryProduct={props.productNum} relatedProductCurrent={id}/>} */}
    </div>
  )
}

export default YourOutfitCard;
//