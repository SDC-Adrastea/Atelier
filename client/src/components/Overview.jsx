import React, { useState, useEffect } from 'react'
import axios from 'axios'

import StarsReviews from './Overview/Product Information/StarsReviews.jsx'
import ProductCategoryTitle from './Overview/Product Information/ProductCategoryTitle.jsx'
import Price from './Overview/Product Information/Price.jsx'
import ProductOverview from './Overview/Product Information/ProductOverview.jsx'
import ToggleOutfitStar from './Overview/Product Information/ToggleOutfitStar.jsx'
import StyleSelector from './Overview/Style Selector/StyleSelector.jsx'
import SizeQuantity from './Overview/Style Selector/SizeQuantity.jsx'
import AddToCart from './Overview/Add To Cart/AddToCart.jsx'
import DefaultGallery from './Overview/Image Gallery/DefaultGallery.jsx'
import ExpandedGallery from './Overview/Image Gallery/ExpandedGallery.jsx'

// API functions

export const Overview = (props) => {
  // console.log('props in Overview', props)
  let product = props.product
  let ratings = props.metadata
  let reviewSection;
  let productOverview;
  let styleSection;

  const [outfitToggle, setOutfitToggle] = useState([])
  const [currentStyle, setCurrentStyle] = useState({})

  if (product === {}) {
    product.name = ''
    product.styles = []
  }

  if (ratings !== {} || ratings !== undefined) {
    ratings = ratings.ratings
  }

  if (ratings !== undefined) {
    reviewSection = <StarsReviews ratings={ratings} />
  }

  if (props.styles.length > 0) {
    styleSection = <StyleSelector styles={props.styles} />
    if (Object.keys(currentStyle).length === 0) {
      props.styles.forEach(style => {
        if (style['default?']) {
          setCurrentStyle(style)
        }
      })
    }
  }

  if (product.description !== undefined && product.slogan !== undefined && product.features !== undefined) {
    productOverview =  <ProductOverview slogan={product.slogan} description={product.description} features={product.features} />
  }

  return (
    <div>
      <h1>Overview Component</h1>
      <div className="subcomponents">
        {reviewSection}
        <ProductCategoryTitle title={product.name} category={product.category} />
        <Price defaultPrice={product.default_price} styles={props.styles} />
        {productOverview}
        <ToggleOutfitStar onClick={(data) => {
          console.log('data in overview', [data])
          setOutfitToggle([data])
        }} />
        {styleSection}
        <SizeQuantity />
        <AddToCart />
        <DefaultGallery />
        <ExpandedGallery />
      </div>
    </div>
  )
}

