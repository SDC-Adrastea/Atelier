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

  var image = cardData.imageUrl || "noImageCat.PNG"
  var imageClass = cardData.imageUrl ? "related-product-image" : "missing-image-card"

  return (
    <div onClick={
      (newNum) => {props.setProductNum(id)}
     } className="related-product-card"
     data-testid="related-product-card-test"
     >
      <img className="related-action-button" src="star2.png" onClick={modalSearch} />
      <img className={imageClass} src={image} data-testid="related-product-card-image"/>
      <div data-testid="related-product-card-category">{cardData.category}</div>
      <div data-testid="related-product-card-name">{cardData.productName}</div>
      <Price price={cardData.originalPrice} sale={cardData.salePrice}/>
      <StarRating rating={cardData.averageReview} />
      {showModal && <ComparisonModal primaryProduct={productComparisonData[0]} relatedProductCurrent={productComparisonData[1]} setModal={(value) => setModal(value)} />}
    </div>
  )
}


export default RelatedProductCard;
