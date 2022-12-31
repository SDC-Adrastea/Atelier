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
import DefaultGallery from '../DefaultGallery.jsx'
import ExpandedGallery from '../ExpandedGallery.jsx'

describe('Image Gallery: Default View', () => {
  test('sample', () => { })

  // click arrow left

  // click arrow right
})

describe('Image Gallery: Expanded View', () => {
  test('sample', () => { })

  // click arrow left

  // click arrow right

  // test for expanded imaging
    // need to mock mouse over a certain point on a screen
    // test to see if zoomed image shows
})
