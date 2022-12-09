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

describe('Style Selector: Style Selector', () => {
  test('sample', () => { })

  // Confirm that a style is always selected
  // Confirm styles are displayed as a thumbnail
  // Confirm the number of styles shown matches the total options
  // Confirm that the styles display in rows of 4

  // Confirm that a checkmark is displayed for the selected item
  // Confirm a title displays that matches the selected style
  // Check that the first item in the list is selected by default
  // Check that only one style can be selected at a time.
})

// IDEAS
// test for props
// test for state
