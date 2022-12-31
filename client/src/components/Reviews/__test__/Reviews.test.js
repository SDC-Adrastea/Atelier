/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from '@testing-library/react';
import { queries } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import React, { useEffect, useState } from "react";

// subcomponents
import { Reviews } from '../../Reviews.jsx'
import { RatingsColumn } from '../../Reviews/RatingsColumn.jsx'

// dummy data
import { dummyReviews, dummyMetaReviews } from "../../../../../dummyTestData/reviewsDummy.js";
import { dummyProductData } from "../../../../../dummyTestData/productDummy.js";

describe('Unit Test: Reviews', () => {

  test('Confirm initial load of Reviews component', () => {
    render(<Reviews productNum={11} product={dummyProductData} metadata={dummyMetaReviews} />)
    const ReviewsElement = screen.getByTestId('reviews')
    expect(ReviewsElement).toBeInTheDocument()
  })

  test('Confirm initial load of RatingsColumn component', () => {
    render(<RatingsColumn productNum={11} averageRating={4.2} reviews={[dummyReviews]} metadata={dummyMetaReviews}/>)
    const RatingsColumnElement = screen.getByTestId('ratings-column')
    expect(RatingsColumnElement).toBeInTheDocument()
  })

  // test('Confirm initial load of ReviewsList component', () => {
  //   render(<Reviews productNum={71700} metadata={dummyMetaReviews} />)
  //   const ReviewsListElement = screen.getByTestId('reviews-list')
  //   expect(ReviewsListElement).toBeInTheDocument()
  // })

  // test('Confirm initial load of RatingsBreakdown component', () => {
  //   render(<Reviews productNum={71700} metadata={dummyMetaReviews} />)
  //   const RatingsBreakdownElement = screen.getByTestId('ratings-breakdown')
  //   expect(RatingsBreakdownElement).toBeInTheDocument()
  // })

  // test('Confirm initial load of ProductBreakdown component', () => {
  //   render(<Reviews productNum={71700} metadata={dummyMetaReviews} />)
  //   const ProductBreakdownElement = screen.getByTestId('product-breakdown')
  //   expect(ProductBreakdownElement).toBeInTheDocument()
  // })




})