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
  let currentView, reviewSection, titleSection, priceSection, toggleSection,
    productOverview, styleSection, sizeQuantitySection

  const [outfitToggle, setOutfitToggle] = useState({})
  const [currentStyle, setCurrentStyle] = useState({})
  const [view, setView] = useState('default')
  const [mainImage, setMainImage] = useState('')
  const [imageArr, setImageArr] = useState([])

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

          let firstPhoto = style.photos[0]
          setMainImage(firstPhoto.url)
          setImageArr(style.photos)
        }
      })
    }
    titleSection = <ProductCategoryTitle title={product.name} category={product.category} />
    priceSection = <Price price={currentStyle.original_price} sale={currentStyle.sale_price} styles={props.styles} />
    toggleSection = (
      <ToggleOutfitStar
        id={currentStyle.style_id}
        toggleStar={(id) => { props.toggleStar(id) }}
      />
    )
    sizeQuantitySection = <SizeQuantity style={currentStyle} />
    styleSection = (
      <StyleSelector
        styles={props.styles}
        toggledStyle={currentStyle}
        onClick={(selectedStyle) => {
          setCurrentStyle(selectedStyle)
          let newImage = selectedStyle.photos[0]
          setMainImage(newImage.url)
        }}
      />
    )
    currentView = (
      <DefaultGallery
        style={currentStyle}
        main={mainImage}
        images={imageArr}
        onClick={() => setView('expanded')}
        thumbnailChange={img => setMainImage(img)}
      />
    )
  }

  if (product.description !== undefined || product.slogan !== undefined || product.features !== undefined) {
    productOverview = <ProductOverview slogan={product.slogan} description={product.description} features={product.features} />
  }

  if (view === 'expanded') {
    currentView = (
      <ExpandedGallery
        style={currentStyle}
        main={mainImage}
        images={imageArr}
        onClick={() => setView('default')}
        thumbnailChange={img => setMainImage(img)}
      />
    )
  }

  return (
    <div data-testid="overview-component">
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
