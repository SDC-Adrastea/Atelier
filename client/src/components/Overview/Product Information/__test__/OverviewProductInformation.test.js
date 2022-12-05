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
import StarsReviews from '../StarsReviews.jsx'
import ProductCategoryTitle from '../ProductCategoryTitle.jsx'
import Price from '../Price.jsx'
import ProductOverview from '../ProductOverview.jsx'
import ToggleOutfitStar from '../ToggleOutfitStar.jsx'

describe('Product Information: Stars Rating & Reviews', () => {
  test('sample', () => { })

  // no reviews - section should be hidden
  // 5 stars - check that all 5 full stars are filled in
  // 2.5 stars - check that 2 and 1/2 stars are filled
})

describe('Product Information: Category & Title', () => {
  test('sample', () => { })

  // check that the category is displayed; in the correct area
  // check that the title is displayed; in the correct area

})

describe('Product Information: Price', () => {
  test('sample', () => { })

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
