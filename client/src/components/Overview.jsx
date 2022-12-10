import React, { useState, useEffect } from 'react'
import axios from 'axios'

import StarsReviews from './Overview/ProductInformation/StarsReviews.jsx'
import ProductCategoryTitle from './Overview/ProductInformation/ProductCategoryTitle.jsx'
import Price from './Overview/ProductInformation/Price.jsx'
import ProductOverview from './Overview/ProductInformation/ProductOverview.jsx'
import ToggleOutfitStar from './Overview/ProductInformation/ToggleOutfitStar.jsx'
import StyleSelector from './Overview/StyleSelector/StyleSelector.jsx'
import SizeQuantity from './Overview/AddToCart/SizeQuantity.jsx'
import DefaultGallery from './Overview/ImageGallery/DefaultGallery.jsx'
import ExpandedGallery from './Overview/ImageGallery/ExpandedGallery.jsx'

// API functions

export const Overview = (props) => {
  // console.log('props in Overview', props)
  let product = props.product
  let ratings = props.metadata
  let reviewSection, titleSection, priceSection, toggleSection, productOverview,
    styleSection, sizeQuantitySection
  let currentView = <DefaultGallery style={currentStyle} onClick={() => setView('expanded')} />

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
    styleSection = <StyleSelector styles={props.styles} toggledStyle={currentStyle} onClick={(selectedStyle) => { setCurrentStyle(selectedStyle) }} />
  }

  if (product.description !== undefined || product.slogan !== undefined || product.features !== undefined) {
    productOverview =  <ProductOverview slogan={product.slogan} description={product.description} features={product.features} />
  }

  if (view === 'expanded') {
    currentView = <ExpandedGallery style={currentStyle} onClick={() => setView('default')} />
  }

  return (
    <div>
      <div className="subcomponents">
        {currentView}
        {reviewSection}
        {titleSection}
        {priceSection}
        {toggleSection}
        {styleSection}
        {sizeQuantitySection}
        {productOverview}
      </div>
    </div>
  )
}
