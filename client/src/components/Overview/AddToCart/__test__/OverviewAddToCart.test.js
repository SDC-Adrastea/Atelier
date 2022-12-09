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

  //
})

describe('Add to Cart Functionality', () => {
  test('sample', () => { })

  //
})

// IDEAS
// test for props
// test for state
