import React, { useState, useEffect } from 'react'
import axios from 'axios'

import StarsReviews from './Overview/StarsReviews.jsx'
import ProductCategoryTitle from './Overview/ProductCategoryTitle.jsx'
import Price from './Overview/Price.jsx'
import ProductOverview from './Overview/ProductOverview.jsx'
import ToggleOutfitStar from './Overview/ToggleOutfitStar.jsx'
import StyleSelector from './Overview/StyleSelector.jsx'
import SizeQuantity from './Overview/SizeQuantity.jsx'
import AddToCart from './Overview/AddToCart.jsx'
import DefaultGallery from './Overview/DefaultGallery.jsx'
import ExpandedGallery from './Overview/ExpandedGallery.jsx'

// API functions

export const Overview = (props) => {
  console.log('props in overview', props)
  let product = props.product
  let ratings = props.metadata
  let reviewSection;
  let productOverview;
  let styleSection;

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
        <ToggleOutfitStar />
        {styleSection}
        <SizeQuantity />
        <AddToCart />
        <DefaultGallery />
        <ExpandedGallery />
      </div>
    </div>
  )
}

