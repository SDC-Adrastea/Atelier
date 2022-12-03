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
import { currentProduct } from '../api-docs/ProductsAPI.js'


export const Overview = (props) => {
  console.log('props in Overview', props)

  return (
    <div>
      <h1>Overview Component</h1>
      <div className="subcomponents">
        <StarsReviews />
        <ProductCategoryTitle product={props.product} />
        <Price />
        <ProductOverview />
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

