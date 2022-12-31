/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from '@testing-library/react'
import { queries } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import React, { useEffect, useState } from "react"

// app
import { App } from '../../../../index.jsx'
// component
import { Overview } from '../../../Overview.jsx'
// subcomponents
import SizeQuantity from '../SizeQuantity.jsx'
import AddToCart from '../Cart.jsx'

// dummyData
import * as review from '../../../../../../dummyTestData/reviewsDummy.js'
import * as product from '../../../../../../dummyTestData/productDummy.js'

describe('Size & Quantity Options', () => {
  let thisProduct = product.dummyProduct_id
  let styles = product.dummyProductStyles.results
  let currentStyle = product.singleDummyProductStyle
  let id = currentStyle.style_id
  let photos = currentStyle.photos
  let skus = currentStyle.skus
  let features = product.dummyProductData.features
  let ratings = review.dummyMetaReviews.ratings

  test('Correct default options selected', () => {
    render(<SizeQuantity skus={skus} currentSku={'123456'} style={currentStyle} setSkus={(obj) => props.setSkus(obj)} setCurrentSku={(sku) => props.setCurrentSku(sku)} />)
    // Select Size for sizes default
    expect(screen.getByRole('option', { name: 'Select Size' }).selected).toBe(true)
    // '--' for quantity default
    expect(screen.getByRole('option', { name: '--' }).selected).toBe(true)
  })

  test('Correct number of options show', () => {
    render(<SizeQuantity skus={skus} currentSku={'123456'} style={currentStyle} setSkus={(obj) => props.setSkus(obj)} setCurrentSku={(sku) => props.setCurrentSku(sku)} />)
    expect(screen.getAllByRole('option').length).toBe(5)
  })

  test('If no sizes are present, size alert is present', async () => {
    render(<SizeQuantity skus={skus} currentSku={'123456'} style={currentStyle} setSkus={(obj) => props.setSkus(obj)} setCurrentSku={(sku) => props.setCurrentSku(sku)} />)
    await userEvent.click(screen.getByRole('button', {name: 'Add to Cart'}))
    const notice = screen.getByText(/Please select size/i)
    expect(notice).toBeInTheDocument()
  })

  test('Selecting a size should update the selected quantity to 1', async () => {
    // render(<SizeQuantity skus={skus} currentSku={'123456'} style={currentStyle} setSkus={(obj) => props.setSkus(obj)} setCurrentSku={(sku) => props.setCurrentSku(sku)} />)
    render(<App />)
    await userEvent.selectOptions(
      screen.getByRole('size'),
      screen.getByRole('option', { name: 'XS' }),
    )
    expect(screen.getByRole('option', { name: 'XS' }).selected).toBe(true)
  })
  // when a size is selected it sets quantity to 1
})

describe('Add to Cart Functionality', () => {
  let thisProduct = product.dummyProduct_id
  let styles = product.dummyProductStyles.results
  let currentStyle = product.singleDummyProductStyle
  let id = currentStyle.style_id
  let photos = currentStyle.photos
  let skus = currentStyle.skus
  let features = product.dummyProductData.features
  let ratings = review.dummyMetaReviews.ratings

  test('Add to Cart button is present', () => {
    render(<SizeQuantity skus={skus} currentSku={'123456'} style={currentStyle} setSkus={(obj) => props.setSkus(obj)} setCurrentSku={(sku) => props.setCurrentSku(sku)} />)
    expect(screen.getByRole('button', { name: 'Add to Cart' })).toBeInTheDocument
  })

  // if a size and a quantity are present
    // test adding to the cart

  // should not be present when no stock is available
})

// IDEAS
// test for props
// test for state
