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
import SizeQuantity from '../SizeQuantity'

test('sample', () => {

})

// IDEAS
// test for props
// test for state
