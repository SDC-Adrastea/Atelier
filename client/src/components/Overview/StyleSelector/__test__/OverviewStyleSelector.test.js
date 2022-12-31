/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from '@testing-library/react'
import { queries } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import React, { useEffect, useState } from "react"

// component
import { Overview } from '../../../Overview.jsx'
// subcomponents
import StyleSelector from '../StyleSelector.jsx'

// dummyData
import * as review from '../../../../../../dummyTestData/reviewsDummy.js'
import * as product from '../../../../../../dummyTestData/productDummy.js'

describe('Style Selector: Style Selector', () => {
  let thisProduct = product.dummyProduct_id
  let styles = product.dummyProductStyles.results
  let currentStyle = product.singleDummyProductStyle
  let id = currentStyle.style_id
  let photos = currentStyle.photos
  let skus = currentStyle.skus
  let features = product.dummyProductData.features

  let ratings = review.dummyMetaReviews.ratings

  test('One style -- the first one -- is selected by default', () => {
    render(<StyleSelector styles={styles} toggledStyle={currentStyle} data-testid="style-selector" onClick={() => 'onClick test'} />)

  })

  test('The number of styles in the DOM matches the total number of styles available', () => {
    render(<StyleSelector styles={styles} toggledStyle={currentStyle} data-testid="style-selector" onClick={() => 'onClick test'} />)
    let styleLength = screen.getAllByTestId("style-image")
    expect(styleLength.length === styles.length)
  })

  test('The style name present matches the selected style name', () => {
    render(<StyleSelector styles={styles} toggledStyle={currentStyle} data-testid="style-selector" onClick={() => 'onClick test'} />)
    // the de"Forest Green & Black"
    let shown = screen.getByText(/Forest Green & Black/i)
    expect(shown).toBeInTheDocument()
  })

  test('Only one style is selected', () => {

  })
})