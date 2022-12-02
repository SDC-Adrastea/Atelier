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
import StarsReviews from '../StarsReviews.jsx'
import ProductCategoryTitle from '../ProductCategoryTitle.jsx'
import Price from '../Price.jsx'
import ProductOverview from '../ProductOverview.jsx'
import ToggleOutfitStar from '../ToggleOutfitStar.jsx'
import StyleSelector from '../StyleSelector.jsx'
import SizeQuantity from '../SizeQuantity'
import AddToCart from '../AddToCart.jsx'
import DefaultGallery from '../DefaultGallery.jsx'
import ExpandedGallery from '../ExpandedGallery.jsx'

// Parent component
test('Confirm initial Overview component load', () => {
  render(<Overview />)
  const h1Element = screen.getByText(/Overview Component/i)
  expect(h1Element).toBeInTheDocument()
})

// Subcomponents
test('Confirm initial load of Stars & Reviews subcomponent', () => {
  render (<StarsReviews />)
  const h4Element = screen.getByText(/Stars & Reviews/i)
  expect(h4Element).toBeInTheDocument()
})

test('Confirm initial load of Product Category & Title subcomponent', () => {
  render (<ProductCategoryTitle />)
  const h4Element = screen.getByText(/Product Category/i)
  expect(h4Element).toBeInTheDocument()
})

test('Confirm initial load of Price subcomponent', () => {
  render (<Price />)
  const h4Element = screen.getByText(/Price/i)
  expect(h4Element).toBeInTheDocument()
})

test('Confirm initial load of Product Overview subcomponent', () => {
  render (<ProductOverview />)
  const h4Element = screen.getByText(/Product Overview/i)
  expect(h4Element).toBeInTheDocument()
})

test('Confirm initial load of Toggle the Outfit Star subcomponent', () => {
  render (<ToggleOutfitStar />)
  const h4Element = screen.getByText(/Toggle Outfit Star/i)
  expect(h4Element).toBeInTheDocument()
})

test('Confirm initial load of Style Selector subcomponent', () => {
  render (<StyleSelector />)
  const h4Element = screen.getByText(/Style Selector/i)
  expect(h4Element).toBeInTheDocument()
})

test('Confirm initial load of Size & Quantity subcomponent', () => {
  render (<SizeQuantity />)
  const h4Element = screen.getByText(/Size & Quantity/i)
  expect(h4Element).toBeInTheDocument()
})

test('Confirm initial load of Add to Cart subcomponent', () => {
  render (<AddToCart />)
  const h4Element = screen.getByText(/Add to Cart/i)
  expect(h4Element).toBeInTheDocument()
})

test('Confirm initial load of Default Gallery View subcomponent', () => {
  render (<DefaultGallery />)
  const h4Element = screen.getByText(/Default Gallery View/i)
  expect(h4Element).toBeInTheDocument()
})

test('Confirm initial load of Expanded Gallery View subcomponent', () => {
  render (<ExpandedGallery />)
  const h4Element = screen.getByText(/Expanded Gallery View/i)
  expect(h4Element).toBeInTheDocument()
})