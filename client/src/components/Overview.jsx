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
  let product = props.product || {}
  let ratings = props.metadata || {}
  // Overview-Specific
  let currentStyle = props.currentStyle || {}
  let skus = props.currentStyle.skus || {}
  let view = props.view || 'default'
  let mainImage = props.mainImage || ''
  let imageArr = props.imageArr || []
  let currentView, reviewSection, titleSection, priceSection, toggleSection,
    productOverview, styleSection, sizeQuantitySection

  if (product === {}) {
    product.name = ''
    product.styles = []
  }

  if (ratings !== {} || ratings !== undefined) {
    ratings = ratings.ratings || {}
    reviewSection = <StarsReviews ratings={ratings} />
  }

  if (props.styles.length > 0) {
    titleSection = <ProductCategoryTitle title={product.name} category={product.category} />
    priceSection = <Price price={currentStyle.original_price} sale={currentStyle.sale_price} styles={props.styles} />
    toggleSection = <ToggleOutfitStar id={props.productNum} outfit={props.outfit} changeOutfit={(arr) => props.changeOutfit(arr)} />
    sizeQuantitySection = <SizeQuantity skus={props.skus} currentSku={props.currentSku} setSkus={(obj) => props.setSkus(obj)} setCurrentSku={(sku) => props.setCurrentSku(sku)} />
    styleSection = (
      <StyleSelector styles={props.styles} toggledStyle={props.currentStyle}
        onClick={(selectedStyle) => {
          props.setCurrentStyle(selectedStyle)
          let newImage = selectedStyle.photos[0]
          props.setMainImage(newImage.url)
        }}
      />
    )
    currentView = (
      <DefaultGallery
        style={currentStyle} main={mainImage} images={imageArr}
        onClick={() => props.setView('expanded')}
        thumbnailChange={img => props.setMainImage(img)}
      />
    )
  }

  if (product.description !== undefined || product.slogan !== undefined || product.features !== undefined) {
    productOverview = <ProductOverview slogan={product.slogan} description={product.description} features={product.features} />
  }

  if (view === 'expanded') {
    currentView = (
      <ExpandedGallery
        style={currentStyle} main={mainImage} images={imageArr}
        onClick={() => props.setView('default')}
        thumbnailChange={img => props.setMainImage(img)}
      />
    )
  }

  return (
    <div data-testid="overview-component" className="subcomponents">
      {currentView}
      {reviewSection}
      {titleSection}
      {priceSection}
      {toggleSection}
      {styleSection}
      {sizeQuantitySection}
      {productOverview}
    </div>
  )
}
