/**
 * @jest-environment jsdom
 */

import { render, fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import React, { useEffect, useState } from "react";
// subcomponents
import { Overview } from '../../Overview.jsx';
import StarsReviews from '../StarsReviews.jsx';
import ProductCategoryTitle from '../ProductCategoryTitle.jsx';
import Price from '../Price.jsx';
import ProductOverview from '../ProductOverview.jsx';
import ToggleOutfitStar from '../ToggleOutfitStar.jsx';
import StyleSelector from '../StyleSelector.jsx';
import SizeQuantity from '../StarsReviews.jsx';
import AddToCart from '../AddToCart.jsx';
import DefaultGallery from '../DefaultGallery.jsx';
import ExpandedGallery from '../ExpandedGallery.jsx';


test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

test('Confirm initial load:', async () => {
  render(<StarsReviews />)

  expect(screen.getByRole('heading')).toHaveTextContent('Stars')
})

// describe('Confirm initial load:', () => {
//   it("SHALLOW: Renders parent Overview Widget without crashing", () => {
//     shallow(<Overview />);
//   });

//   // check for 'mount' of the subcomponents
//   it("Renders the Stars & Reviews subcomponent without crashing", () => {
//     shallow(<StarsReviews />);
//   });
//   it("Renders the Product Category & Title subcomponent without crashing", () => {
//     shallow(<ProductCategoryTitle />);
//   });
//   it("Renders the Price subcomponent without crashing", () => {
//     shallow(<Price />);
//   });
//   it("Renders the Product Overview subcomponent without crashing", () => {
//     shallow(<ProductOverview />);
//   });
//   it("Renders the Toggle the Outfit Star subcomponent without crashing", () => {
//     shallow(<ToggleOutfitStar />);
//   });
//   it("Renders the Style Selector subcomponent without crashing", () => {
//     shallow(<StyleSelector />);
//   });
//   it("Renders the Size & Quantity subcomponent without crashing", () => {
//     shallow(<SizeQuantity />);
//   });
//   it("Renders the Add to Cart subcomponent without crashing", () => {
//     shallow(<AddToCart />);
//   });
//   it("Renders the Default Gallery View subcomponent without crashing", () => {
//     shallow(<DefaultGallery />);
//   });
//   it("Renders the Expanded Gallery View subcomponent without crashing", () => {
//     shallow(<ExpandedGallery />);
//   });
// });


// IDEAS
// test for props
// test for state
