import React, { useState, useEffect } from "react";
import axios from "axios";
import { StarRating } from '../shared/StarRating/StarRating.jsx';
import Price from '../Overview/ProductInformation/Price.jsx';

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

  var image = cardData.imageUrl || "noImageCat.PNG"
  var imageClass = cardData.imageUrl ? "related-product-image" : "missing-image-card"


  return (
    <div
    className="outfit-product-card"
    data-testid="your-outfit-card"
    >
      <img onClick={() => removeFrom()} className="your-outfit-action-button" src="circleWithX.png"/>
      <img className={imageClass} src={image} data-testid="your-outfit-card-image"/>
      <div data-testid="your-outfit-card-category">{cardData.category}</div>
      <div data-testid="your-outfit-card-product-name">{cardData.productName}</div>
      <div data-testid="your-outfit-card-price">${cardData.originalPrice}</div>
      <Price price={cardData.originalPrice} sale={cardData.salePrice}/>
      <StarRating rating={cardData.averageReview}/>
    </div>
  )
}

export default YourOutfitCard;
