import React, { useState, useEffect } from "react";
import axios from "axios";
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
  }, [id]);

  const modalClick = () => {
    setModal(true)
  }

  const removeFrom = () => {
    props.changeOutfit((oldArr) => {
      for (var i = 0; i < oldArr.length; i++) {
        if(oldArr[i] === id) {
          oldArr.splice(i,1)
        }
      }
      return [...oldArr]
    })
  }


  return (
    <div
    className="outfit-product-card"
    data-testid="your-outfit-card"
    >
      <img onClick={() => removeFrom()} className="your-outfit-action-button" src="circleWithX.png"/>
      <img className="your-outfit-product-image" src={cardData.imageUrl} />
      <div>{cardData.category}</div>
      <div>{cardData.productName}</div>
      <div>${cardData.originalPrice}</div>
      <StarRating rating={cardData.averageReview}/>
    </div>
  )
}

export default YourOutfitCard;
