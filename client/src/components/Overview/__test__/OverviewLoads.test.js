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
import StarsReviews from '../Product Information/StarsReviews.jsx'
import ProductCategoryTitle from '../Product Information/ProductCategoryTitle.jsx'
import Price from '../Product Information/Price.jsx'
import ProductOverview from '../Product Information/ProductOverview.jsx'
import ToggleOutfitStar from '../Product Information/ToggleOutfitStar.jsx'
import StyleSelector from '../Style Selector/StyleSelector.jsx'
import SizeQuantity from '../Add To Cart/SizeQuantity'
import AddToCart from '../Add to Cart/AddToCart.jsx'
import DefaultGallery from '../Image Gallery/DefaultGallery.jsx'
import ExpandedGallery from '../Image Gallery/ExpandedGallery.jsx'

describe('Unit: Initial rendering of all Overview components', () => {
  // Parent component
  test('Confirm initial Overview component load', () => {
    render(<Overview productNum={71697} product={{}} styles={[]} metadata={{}} />)
    const h1Element = screen.getByText(/Overview Component/i)
    expect(h1Element).toBeInTheDocument()
  })

  // Subcomponents
  test('Confirm initial load of Stars & Reviews subcomponent', () => {
    render(<StarsReviews ratings={{}} />)
    const h4Element = screen.getByText(/Stars & Reviews/i)
    expect(h4Element).toBeInTheDocument()
  })

  test('Confirm initial load of Product Category & Title subcomponent', () => {
    render(<ProductCategoryTitle title={'Name'} category={'Category'} />)
    const h4Element = screen.getByText(/Product Category/i)
    expect(h4Element).toBeInTheDocument()
  })

  test('Confirm initial load of Price subcomponent', () => {
    render(<Price defaultPrice={'defaultPrice'} styles={[]} />)
    const h4Element = screen.getAllByText(/Price/i)
    expect(h4Element.length >= 1)
  })

  test('Confirm initial load of Product Overview subcomponent', () => {
    render(<ProductOverview slogan={'Slogan'} description={'Description'} features={[]} />)
    const h4Element = screen.getByText(/Product Overview/i)
    expect(h4Element).toBeInTheDocument()
  })

  test('Confirm initial load of Toggle the Outfit Star subcomponent', () => {
    render(<ToggleOutfitStar onClick={() => 'onClick test'} />)
    const h4Element = screen.getByText(/Toggle Outfit Star/i)
    expect(h4Element).toBeInTheDocument()
  })

  test('Confirm initial load of Style Selector subcomponent', async () => {
    render(<StyleSelector styles={[]} />)
    const h4Element = screen.getByText(/Style Selector/i)
    expect(h4Element).toBeInTheDocument()
  })

  test('Confirm initial load of Size & Quantity subcomponent', () => {
    render(<SizeQuantity />)
    const h4Element = screen.getByText(/Size & Quantity/i)
    expect(h4Element).toBeInTheDocument()
  })

  test('Confirm initial load of Add to Cart subcomponent', () => {
    render(<AddToCart />)
    const h4Element = screen.getByText(/Add to Cart/i)
    expect(h4Element).toBeInTheDocument()
  })

  test('Confirm initial load of Default Gallery View subcomponent', () => {
    render(<DefaultGallery />)
    const h4Element = screen.getByText(/Default Gallery View/i)
    expect(h4Element).toBeInTheDocument()
  })

  test('Confirm initial load of Expanded Gallery View subcomponent', () => {
    render(<ExpandedGallery />)
    const h4Element = screen.getByText(/Expanded Gallery View/i)
    expect(h4Element).toBeInTheDocument()
  })
})