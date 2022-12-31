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
import { ReviewsList } from '../../Reviews/ReviewsList.jsx'
import { AddReviewForm } from '../../Reviews/AddReviewForm.jsx'
import { ReviewPhotoWrapper } from '../../Reviews/ReviewPhotoWrapper.jsx'
import { ReviewPhotoModal } from '../../Reviews/ReviewPhotoModal.jsx'
import { ReviewTile } from '../../Reviews/ReviewTile.jsx'
import { RatingsBreakdown } from '../../Reviews/RatingsBreakdown.jsx'

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
    render(<Reviews productNum={11} product={dummyProductData} metadata={dummyMetaReviews} />)
    // render(<RatingsColumn productNum={11} averageRating={4.2} reviews={[dummyReviews]} metadata={dummyMetaReviews}/>)
    const RatingsColumnElement = screen.getByTestId('ratings-column')
    expect(RatingsColumnElement).toBeInTheDocument()
  })

  test('Confirm initial load of ReviewsList component', () => {
    // render(<Reviews productNum={11} product={dummyProductData} metadata={dummyMetaReviews} />)
    render(<ReviewsList productNum={11} product={dummyProductData} reviews={dummyReviews.results} setReviews={() => null} reviewsShowing={2} setReviewsShowing={() => null} reviewsSortBy={'relevant'} setSort={() => null} metadata={dummyMetaReviews} />)
    const ReviewsListElement = screen.getByTestId('reviews-list')
    expect(ReviewsListElement).toBeInTheDocument()
  })

  test('Confirm initial load of ReviewsTile component', () => {
    render(<ReviewTile review={dummyReviews.results[0]} />)
    const ReviewTileElement = screen.getByTestId('review-tile')
    expect(ReviewTileElement).toBeInTheDocument()
  })

  test('Confirm initial load of RatingsBreakdown component', () => {
    render(<RatingsBreakdown reviews={dummyReviews.results}/>)
    // render(<Reviews productNum={11} product={dummyProductData} metadata={dummyMetaReviews} />)
    const RatingsBreakdownElement = screen.getByTestId('ratings-breakdown')
    expect(RatingsBreakdownElement).toBeInTheDocument()
  })

  test('Confirm initial load of ProductBreakdown component', () => {
    render(<Reviews productNum={11} product={dummyProductData} metadata={dummyMetaReviews} />)
    const ProductBreakdownElement = screen.getByTestId('product-breakdown')
    expect(ProductBreakdownElement).toBeInTheDocument()
  })

  test('Confirm initial load of AddReviewForm component', () => {
    render(<AddReviewForm open={true} product={dummyProductData} characteristics={dummyMetaReviews.characteristics} onClose={() => setModalIsOpen(false)}/>)
    const AddReviewFormElement = screen.getByTestId('add-review-form')
    expect(AddReviewFormElement).toBeInTheDocument()
  })

  // test('Confirm AddReviewForm component does not load when false modal', () => {
  //   // render(<AddReviewForm open={false} product={dummyProductData} characteristics={dummyMetaReviews.characteristics} onClose={() => setModalIsOpen(false)}/>)
  //   render(<ReviewsList productNum={11} product={dummyProductData} reviews={dummyReviews.results} setReviews={() => null} reviewsShowing={2} setReviewsShowing={() => null} reviewsSortBy={'relevant'} setSort={() => null} metadata={dummyMetaReviews} />)
  //   // const AddReviewFormElement = screen.getByTestId('add-review-form')
  //   expect(screen.getByTestId('add-review-form')).not.toBeInTheDocument()
  // })

  test('Confirm initial load of AddReviewWrapper component', () => {
    render(<Reviews productNum={11} product={dummyProductData} metadata={dummyMetaReviews} />)
    const AddReviewWrapperElement = screen.getByTestId('add-review-wrapper')
    expect(AddReviewWrapperElement).toBeInTheDocument()
  })

  test('Confirm initial load of ReviewPhotoWrapper component', () => {
    render(<ReviewPhotoWrapper image={"urlplaceholder/review_5_photo_number_1.jpg"} />)
    const ReviewPhotoWrapperElement = screen.getByTestId('review-photo-wrapper')
    expect(ReviewPhotoWrapperElement).toBeInTheDocument()
  })

  test('Confirm initial load of ReviewPhotoModal component', () => {
    render(<ReviewPhotoModal open={true} image={"urlplaceholder/review_5_photo_number_1.jpg"} onClose={() => setModalIsOpen(false)} />)
    const ReviewPhotoModalElement = screen.getByTestId('review-photo-modal')
    expect(ReviewPhotoModalElement).toBeInTheDocument()
  })

})