/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from '@testing-library/react'
import { queries } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import React, { useEffect, useState } from "react"

//dummy data
import dummyProductData from '../../../../../../dummyTestData/productDummy.js'
import dummyProductsData from '../../../../../../dummyTestData/productDummy.js'
import dummyMetaReviews from '../../../../../../dummyTestData/reviewsDummy.js'

// component
import { Overview } from '../../../Overview.jsx'
// subcomponents
import StarsReviews from '../StarsReviews.jsx'
import ProductCategoryTitle from '../ProductCategoryTitle.jsx'
import Price from '../Price.jsx'
import ProductOverview from '../ProductOverview.jsx'
import ToggleOutfitStar from '../ToggleOutfitStar.jsx'

describe('Product Information: Stars Rating & Reviews', () => {
  test('Section should not render when no reivews are present', () => {
    render(<Overview
      // initial data
      productNum={71699} product={dummyProductData} metadata={dummyMetaReviews}
      // styles
      styles={dummyProductStyles.results}
      currentStyle={dummyProductStyles.results[0]}
      setCurrentStyle={(style) => setCurrentStyle(style)}
      view={'default'}
      setView={(newView) => setView(newView)}
      mainImage={'mainImage'}
      setMainImage={(url) => setMainImage(url)}
      imageArr={[]}
      setImageArr={(arr) => setImageArr(arr)}
      // outfit
      outfit={[]} changeOutfit={(arr) => changeOutfit(arr)}
      // cart selection
      skus={{}} currentSku={'123456'}
      setSkus={(obj) => setSkus(obj)} setCurrentSku={(sku) => setCurrentSku(sku)}
    />)
    let stars = screen.queryByText(/reviews/i)
    expect(stars === null)
  })

  // 5 stars - check that all 5 full stars are filled in
  // 2.5 stars - check that 2 and 1/2 stars are filled
})

describe('Product Information: Category & Title', () => {
  test('sample', () => { })

  // check that the category is displayed; in the correct area
  // check that the title is displayed; in the correct area
})

describe('Product Information: Price', () => {
  test('Price section does not render when no price is present', () => {
    render(<Price price={""} sale={""} styles={[]} />)
    let priceSection = screen.queryByTestId('price-section')
    expect(priceSection === null)
  })

  test('Price section renders when no sale price is present', () => {
    render(<Price price={"40.00"} sale={null} styles={dummyProductsData} />)
    let priceSection = screen.queryByTestId('price-section')
    expect(priceSection).toBeInTheDocument()
  })

  test('Price section renders with the sale price and strikes the original price', () => {
    render(<Price price={"40.00"} sale={"35.00"} styles={dummyProductsData} />)

    let originalPrice = screen.queryByTestId('strike-price')
    let salePrice = screen.queryByTestId('sale-price')

    expect(originalPrice).toBeInTheDocument()
    expect(salePrice).toBeInTheDocument()
  })

  // Confirm default style is selected and price matches
  // Confirm that changing a style will update to the accurate price
  // Confirm that selected the current style doesn’t break the app or change anything
  // Test an on sale item, ensure the text is red and followed by the original price which is struck through
})

describe('Product Information: Toggle Outfit Star', () => {
  test('sample', () => { })

  // Toggling once adds the item to the outfit carousel (or the props/state?)
  // Toggling twice removes the item from the outfit carousel (or the props/state?)
})

// IDEAS
// test for props
// test for state
