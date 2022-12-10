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
import Price from '../ProductInformation/Price.jsx'
import ProductOverview from '../ProductInformation/ProductOverview.jsx'
import ToggleOutfitStar from '../ProductInformation/ToggleOutfitStar.jsx'
import StyleSelector from '../StyleSelector/StyleSelector.jsx'
import SizeQuantity from '../AddToCart/SizeQuantity'
import AddToCart from '../AddToCart/Cart.jsx'
import DefaultGallery from '../ImageGallery/DefaultGallery.jsx'
import ExpandedGallery from '../ImageGallery/ExpandedGallery.jsx'

describe('Unit: Initial rendering of all Overview components', () => {
  // Parent component --> need to consider a new test option for the parent after removing the heading

  // test('Confirm initial Overview component load', () => {
  //   render(<Overview productNum={71697} product={{}} styles={[]} metadata={{}} />)
  //   const divElement = screen.getByRole('div')
  //   expect(divElement).toHaveClass('subcomponents')
  // })

  // Subcomponents
  test('Confirm initial load of Stars & Reviews subcomponent', () => {
    render(<StarsReviews ratings={{}} />)
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
    render(<Price defaultPrice={'defaultPrice'} styles={[]} />)
    const priceElement = screen.getAllByText(/$/i)
    expect(priceElement.length >= 1)
  })

  test('Confirm initial load of Product Overview subcomponent', () => {
    render(<ProductOverview slogan={'Slogan'} description={'Description'} features={[]} />)
    const sloganElement = screen.getByText(/Slogan/i)
    const descriptionElement = screen.getByText(/Description/i)
    expect(sloganElement).toBeInTheDocument()
    expect(descriptionElement).toBeInTheDocument()
  })

  test('Confirm initial load of Toggle the Outfit Star subcomponent', () => {
    render(<ToggleOutfitStar onClick={() => 'onClick test'} />)
    const starButton = screen.getByRole('button')
    expect(starButton).toBeInTheDocument()
  })

  test('Confirm initial load of Style Selector subcomponent', async () => {
    render(<StyleSelector styles={[]} />)
    const h3Element = screen.getByText(/Styles:/i)
    expect(h3Element).toBeInTheDocument()
  })

  test('Confirm initial load of Size & Quantity subcomponent', () => {
    render(<SizeQuantity style={{name: "test", skus: {2580604: {size: 'test1', quantity: 1}, 2580605: {size: 'test2', quantity: 2}}}} />)
    const h4Element = screen.getByText(/Select Size/i)
    expect(h4Element).toBeInTheDocument()
  })

  test('Confirm initial load of Add to Cart subcomponent', () => {
    render(<AddToCart />)
    const h4Element = screen.getByText(/Add to Cart/i)
    expect(h4Element).toBeInTheDocument()
  })

  test('Confirm initial load of Default Gallery View subcomponent', () => {
    render(<DefaultGallery style={{name: "test", photos: []}} main={''} images={[]} onClick={() => 'onClick test'} />)
    const imgElement = screen.getAllByRole('img')
    expect(imgElement.length >= 1)
  })

  test('Confirm initial load of Expanded Gallery View subcomponent', () => {
    render(<ExpandedGallery style={{name: "test", photos: []}} main={''} images={[]} onClick={() => 'onClick test'} />)
    const imgElement = screen.getAllByRole('img')
    expect(imgElement.length >= 1)
  })
})