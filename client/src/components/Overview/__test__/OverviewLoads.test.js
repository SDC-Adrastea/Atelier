/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from '@testing-library/react'
import { queries } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import React, { useEffect, useState } from "react"

// subcomponents
import { Overview } from '../../Overview.jsx'
import StarsReviews from '../ProductInformation/StarsReviews.jsx'
import ProductCategoryTitle from '../ProductInformation/ProductCategoryTitle.jsx'
import FeaturesList from '../ProductInformation/FeaturesList.jsx'
import Price from '../ProductInformation/Price.jsx'
import ProductOverview from '../ProductInformation/ProductOverview.jsx'
import ToggleOutfitStar from '../ProductInformation/ToggleOutfitStar.jsx'
import Style from '../StyleSelector/Style.jsx'
import StyleSelector from '../StyleSelector/StyleSelector.jsx'
import SizeQuantity from '../AddToCart/SizeQuantity'
import AddToCart from '../AddToCart/Cart.jsx'
import DefaultGallery from '../ImageGallery/DefaultGallery.jsx'
import ExpandedGallery from '../ImageGallery/ExpandedGallery.jsx'

// dummyData
import * as review from '../../../../../dummyTestData/reviewsDummy.js'
import * as product from '../../../../../dummyTestData/productDummy.js'

describe('Unit: Initial rendering of all Overview components', () => {
  let thisProduct = product.dummyProduct_id
  let styles = product.dummyProductStyles.results
  let currentStyle = product.singleDummyProductStyle
  let id = currentStyle.style_id
  let photos = currentStyle.photos
  let skus = currentStyle.skus
  let features = product.dummyProductData.features

  let ratings = review.dummyMetaReviews.ratings

  test('Confirm initial Overview component load', () => {
    render(<Overview
      // initial data
      productNum={thisProduct.id} product={thisProduct} metadata={ratings}
      // styles
      styles={styles}
      currentStyle={currentStyle}
      setCurrentStyle={(style) => setCurrentStyle(style)}
      view={'default'}
      setView={(newView) => setView(newView)}
      mainImage={'mainImage'}
      setMainImage={(url) => setMainImage(url)}
      imageArr={photos}
      setImageArr={(arr) => setImageArr(arr)}
      // outfit
      outfit={[]} changeOutfit={(arr) => changeOutfit(arr)}
      // cart selection
      skus={skus} currentSku={'123456'}
      setSkus={(obj) => setSkus(obj)} setCurrentSku={(sku) => setCurrentSku(sku)}
    />)
    const divElement = screen.getByTestId('overview-component')
    expect(divElement).toBeInTheDocument()
  })

  // Subcomponents
  test('Confirm initial load of Stars & Reviews subcomponent', () => {
    render(<StarsReviews ratings={ratings} />)
    const reviewsElement = screen.getByText(/Read all/i)
    expect(reviewsElement).toBeInTheDocument()
  })

  test('Confirm initial load of Product Category & Title subcomponent', () => {
    render(<ProductCategoryTitle title={'Name'} category={'Category'} />)
    const titleElement = screen.getByText(/Name/i)
    const categoryElement = screen.getByText(/Category/i)
    expect(titleElement).toBeInTheDocument()
    expect(categoryElement).toBeInTheDocument()
  })

  test('Confirm initial load of Price subcomponent', () => {
    render(<Price defaultPrice={'defaultPrice'} sale={'salePrice'} styles={styles} />)
    const priceElement = screen.getAllByText(/$/i)
    expect(priceElement.length >= 1)
  })

  test('Confirm initial load of Product Overview subcomponent', () => {
    render(<ProductOverview slogan={'Slogan'} description={'Description'} features={features} />)
    const sloganElement = screen.getByText(/Slogan/i)
    const descriptionElement = screen.getByText(/Description/i)
    expect(sloganElement).toBeInTheDocument()
    expect(descriptionElement).toBeInTheDocument()
  })

  test('Confirm initial load of Features List subcomponent', () => {
    render(<FeaturesList key={1} feature={features[0]} />)
    const featureElement = screen.getByText(/Rubber/i)
    expect(featureElement).toBeInTheDocument()
  })

  test('Confirm initial load of Toggle the Outfit Star subcomponent', () => {
    render(<ToggleOutfitStar id={thisProduct.id} outfit={[]} onClick={() => 'onClick test'} />)
    const starButton = screen.getByRole('button')
    expect(starButton).toBeInTheDocument()
  })

  test('Confirm initial load of Style Selector subcomponent', () => {
    render(<StyleSelector styles={styles} toggledStyle={currentStyle} data-testid="style-selector" onClick={() => 'onClick test'} />)
    const testID = screen.getByTestId("style-selector")
    expect(testID).toBeInTheDocument()
  })

  test('Confirm initial load of Size & Quantity subcomponent', () => {
    render(<SizeQuantity skus={skus} currentSku={'123456'} style={currentStyle} setSkus={(obj) => props.setSkus(obj)} setCurrentSku={(sku) => props.setCurrentSku(sku)} />)
    const h4Element = screen.getByText(/Select Size/i)
    expect(h4Element).toBeInTheDocument()
  })

  test('Confirm initial load of Add to Cart subcomponent', () => {
    render(<AddToCart sku={'123456'} size={'chosenSize'} quantity={1} />)
    const h4Element = screen.getByText(/Add to Cart/i)
    expect(h4Element).toBeInTheDocument()
  })

  test('Confirm initial load of Default Gallery View subcomponent', () => {
    render(<DefaultGallery style={currentStyle} main={''} images={photos}
      onClick={() => 'onClick test'} thumbnailChange={img => props.setMainImage(img)} />)
    const imgElement = screen.getAllByRole('img')
    expect(imgElement.length >= 1)
  })

  test('Confirm initial load of Expanded Gallery View subcomponent', () => {
    render(<ExpandedGallery style={currentStyle} main={''} images={photos}
      onClick={() => 'onClick test'} thumbnailChange={img => props.setMainImage(img)} />)
    const imgElement = screen.getAllByRole('img')
    expect(imgElement.length >= 1)
  })
})