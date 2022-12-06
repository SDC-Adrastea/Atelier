import React, { useState, useEffect } from 'react'
import axios from 'axios'

import StarsReviews from './Overview/Product Information/StarsReviews.jsx'
import ProductCategoryTitle from './Overview/Product Information/ProductCategoryTitle.jsx'
import Price from './Overview/Product Information/Price.jsx'
import ProductOverview from './Overview/Product Information/ProductOverview.jsx'
import ToggleOutfitStar from './Overview/Product Information/ToggleOutfitStar.jsx'
import StyleSelector from './Overview/Style Selector/StyleSelector.jsx'
import SizeQuantity from './Overview/Add To Cart/SizeQuantity.jsx'
import AddToCart from './Overview/Add To Cart/AddToCart.jsx'
import DefaultGallery from './Overview/Image Gallery/DefaultGallery.jsx'
import ExpandedGallery from './Overview/Image Gallery/ExpandedGallery.jsx'

// API functions

export const Overview = (props) => {
  // console.log('props in overview', props)
  let product = props.product
  let ratings = props.metadata
  let reviewSection, titleSection, priceSection, toggleSection, productOverview,
    styleSection, sizeQuantitySection, cartSection
  let currentView = <DefaultGallery />

  const [outfitToggle, setOutfitToggle] = useState({})
  const [currentStyle, setCurrentStyle] = useState({})
  const [view, setView] = useState('default')

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
    if (Object.keys(currentStyle).length === 0) {
      props.styles.forEach(style => {
        if (style['default?']) {
          setCurrentStyle(style)
          setOutfitToggle(style)
        }
      })
    }
    titleSection = <ProductCategoryTitle title={product.name} category={product.category} />
    priceSection = <Price defaultPrice={product.default_price} styles={props.styles} />
    toggleSection = <ToggleOutfitStar onClick={(data) => setOutfitToggle([data])} />
    sizeQuantitySection = <SizeQuantity style={currentStyle} />
    cartSection = <AddToCart />
    styleSection = <StyleSelector styles={props.styles} toggledStyle={currentStyle} onClick={(selectedStyle) => { setCurrentStyle(selectedStyle) }} />
  }

  if (product.description !== undefined || product.slogan !== undefined || product.features !== undefined) {
    productOverview =  <ProductOverview slogan={product.slogan} description={product.description} features={product.features} />
  }

  if (view === 'expanded') {
    currentView = <ExpandedGallery />
  }

  return (
    <div>
      <div className="subcomponents">
        {reviewSection}
        {titleSection}
        {priceSection}
        {productOverview}
        {toggleSection}
        {styleSection}
        {sizeQuantitySection}
        {cartSection}
        {currentView}
      </div>
    </div>
  )
}

