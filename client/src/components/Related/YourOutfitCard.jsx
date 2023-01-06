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

  var image = cardData.imageUrl || "noimage.png"
  var imageClass = cardData.imageUrl ? "related-product-image" : "missing-image-card"


  return (
    <div
    className="outfit-product-card"
    data-testid="your-outfit-card"
    >
      <img onClick={() => removeFrom()} alt="add to outfit button" className="your-outfit-action-button" src="circle-with-x.png" widgetname="Related" id="your-outfit-remove-icon"/>
      <img className={imageClass} src={image} alt="your outfit image" data-testid="your-outfit-card-image" widgetname="Related" id="your-outfit-product-image"/>
      <div data-testid="your-outfit-card-category" widgetname="Related" id="your-outfit-card-category">{cardData.category}</div>
      <div data-testid="your-outfit-card-product-name" widgetname="Related" id="your-outfit-product-name">{cardData.productName}</div>
      <Price price={cardData.originalPrice} sale={cardData.salePrice} widgetname="Related"/>
      <StarRating rating={cardData.averageReview} widgetname="Related"/>
    </div>
  )
}

export default YourOutfitCard;
