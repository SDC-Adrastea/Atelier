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
import SizeQuantity from '../SizeQuantity.jsx'
import AddToCart from '../Cart.jsx'

describe('Size & Quantity Options', () => {
  test('sample', () => { })
  // check for the select options
  // check that the options start with the sizes and '--' for the quantity
  // if you click the button and no sizes are present, size alert is present
  // when a size is selected it sets quantity to 1
  //
})

describe('Add to Cart Functionality', () => {
  test('sample', () => { })
  // check for the button
  // if a size and a quantity are present
    // test adding to the cart

  // should not be present when no stock is available
})

// IDEAS
// test for props
// test for state
