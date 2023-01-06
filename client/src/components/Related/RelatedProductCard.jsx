import React, { useState, useEffect } from "react";
import axios from "axios";
import ComparisonModal from './ComparisonModal.jsx'
import Price from '../Overview/ProductInformation/Price.jsx'
import { StarRating } from '../shared/StarRating/StarRating.jsx';

const RelatedProductCard = (props) => {
  const id = props.cardInfo

  const [cardData, setCardData] = useState({})
  const [showModal, setModal] = useState(false)
  const [productComparisonData , setProductComparisonData] = useState([])


  useEffect(() => {
    axios.get('/relatedProductCardInformation', {
      params: { productNum: props.cardInfo }
    })
      .then((data) => {
        setCardData(data.data)
      })
  }, [id]);



  const modalSearch = () => {
    axios.get('/comparisonModal' , {
      params: {
        primaryProduct: props.productNum,
        relatedProductCurrent: id
      }
    })
    .then((serverResponseData) => {
      setProductComparisonData(serverResponseData.data)
    })
    .catch((err) => {
      console.log(err)
    })
    .then(() => {
      setModal(true)
    })
  }

  var image = cardData.imageUrl || "noimage.png"
  var imageClass = cardData.imageUrl ? "related-product-image" : "missing-image-card"

  return (
    <div onClick={
      (newNum) => {props.setProductNum(id)}
     } className="related-product-card"
     data-testid="related-product-card-test"
     >
      <img className="related-action-button" alt="related action button" src="star-2.png" onClick={modalSearch} widgetname="Related" id="related-modal-button-icon"/>
      <img className={imageClass} alt="related item image" src={image} data-testid="related-product-card-image" widgetname="Related" id="related-product-image"/>
      <div data-testid="related-product-card-category" widgetname="Related" id="related-product-card-category">{cardData.category}</div>
      <div data-testid="related-product-card-name" widgetname="Related" id="related-product-name">{cardData.productName}</div>
      <Price price={cardData.originalPrice} sale={cardData.salePrice} widgetname="Related" id="related-product-price"/>
      <StarRating rating={cardData.averageReview} widgetname="Related" id="related-star-rating"/>
      {showModal && <ComparisonModal primaryProduct={productComparisonData[0]} relatedProductCurrent={productComparisonData[1]} setModal={(value) => setModal(value)} />}
    </div>
  )
}


export default RelatedProductCard;
