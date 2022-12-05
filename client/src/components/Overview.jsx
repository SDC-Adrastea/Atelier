import React, { useState, useEffect } from 'react'
import axios from 'axios'

import StarsReviews from './Overview/StarsReviews.jsx'
import ProductCategoryTitle from './Overview/ProductCategoryTitle.jsx'
import Price from './Overview/Price.jsx'
import ProductOverview from './Overview/ProductOverview.jsx'
import ToggleOutfitStar from './Overview/ToggleOutfitStar.jsx'
import StyleSelector from './Overview/StyleSelector.jsx'
import SizeQuantity from './Overview/StarsReviews.jsx'
import AddToCart from './Overview/AddToCart.jsx'
import DefaultGallery from './Overview/DefaultGallery.jsx'
import ExpandedGallery from './Overview/ExpandedGallery.jsx'

// API functions

export const Overview = (props) => {
  // console.log('props in Overview', props)
  let product = props.product

  return (
    <div>
      <h1>Overview Component</h1>
      <div className="subcomponents">
        <StarsReviews />
        <ProductCategoryTitle name={product.name} category={product.category} />
        <Price defaultPrice={product.default_price} stylesForPrice={props.styles} />
        <ProductOverview slogan={product.slogan} description={product.description} features={product.features} />
        <ToggleOutfitStar />
        <StyleSelector styles={props.styles} />
        <SizeQuantity />
        <AddToCart />
        <DefaultGallery />
        <ExpandedGallery />
      </div>
    </div>
  )
}

