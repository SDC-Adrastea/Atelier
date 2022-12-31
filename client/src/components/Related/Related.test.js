/**
 * @jest-environment jsdom
 */

 import { fireEvent, render, screen } from '@testing-library/react'
 import { queries } from '@testing-library/dom'
 import userEvent from '@testing-library/user-event'
 import '@testing-library/jest-dom'
 import React, { useEffect, useState } from "react";

//Related Components
import ComparisonModal from "./ComparisonModal.jsx";
import OutfitCarousel from "./OutfitCarousel.jsx";
import RelatedCarousel from "./RelatedCarousel.jsx";
import RelatedProductCard from "./RelatedProductCard.jsx";
import YourOutfit from "./YourOutfit.jsx";
import YourOutfitCard from "./YourOutfitCard.jsx";
import { Related } from "../Related.jsx"

import { dummyProductData } from "../../../../dummyTestData/productDummy.js";


 describe('Unit: Initial rendering of all Questions components', () => {


  test("Renders Related Component without crashing", ()=> {
    render(<Related productNum={71700} product={dummyProductData} styles={[]} related={[]} yourOutfit={[]}/>)
    const RCompElement = screen.getByTestId("related")
    expect(RCompElement).toBeInTheDocument()
  })


  test("Renders Related Carousel Component without crashing", ()=> {
    render(<Related productNum={71700} product={dummyProductData} styles={[]} related={[]} yourOutfit={[]}/>)
    const RCarouselComponent = screen.getByTestId("related-carousel")
    expect(RCarouselComponent).toBeInTheDocument()
  })

  test("Renders Related Product Card Component without crashing", ()=> {
    render(<Related productNum={71700} product={dummyProductData} styles={[]} related={[71697]} yourOutfit={[]}/>)
    const RRelatedProductCardComponent = screen.getByTestId("related-product-card-test")
    expect(RRelatedProductCardComponent).toBeInTheDocument()
  })


  test("Renders Related Product Card Image without crashing", ()=> {
    render(<Related productNum={71700} product={dummyProductData} styles={[]} related={[71697]} yourOutfit={[]}/>)
    const RRelatedProductCardComponent = screen.getByTestId("related-product-card-image")
    expect(RRelatedProductCardComponent).toBeInTheDocument()
  })

  test("Renders Related Product Card Category without crashing", ()=> {
    render(<Related productNum={71700} product={dummyProductData} styles={[]} related={[71697]} yourOutfit={[]}/>)
    const RRelatedProductCardComponent = screen.getByTestId("related-product-card-category")
    expect(RRelatedProductCardComponent).toBeInTheDocument()
  })

  test("Renders Related Product Card Product Name without crashing", ()=> {
    render(<Related productNum={71700} product={dummyProductData} styles={[]} related={[71697]} yourOutfit={[]}/>)
    const RRelatedProductCardComponent = screen.getByTestId("related-product-card-name")
    expect(RRelatedProductCardComponent).toBeInTheDocument()
  })



  test("Renders Related Your Outfit Component without crashing", ()=> {
    render(<Related productNum={71700} product={dummyProductData} styles={[]} related={[]} yourOutfit={[]}/>)
    const RYourOutfitComponent = screen.getByTestId("your-outfit")
    expect(RYourOutfitComponent).toBeInTheDocument()
  })

  test("Renders Related Your Outfit Carousel Component without crashing", ()=> {
    render(<Related productNum={71700} product={dummyProductData} styles={[]} related={[]} yourOutfit={[]}/>)
    const ROutfitCarouselComponent = screen.getByTestId("outfit-carousel")
    expect(ROutfitCarouselComponent).toBeInTheDocument()
  })

  test("Renders Related Your Outfit Product Card Component without crashing", ()=> {
    render(<OutfitCarousel productNum={71700} dummyData={[71697]} yourOutfit={[71697]}/>)
    const ROutfitProductCardComponent = screen.getByTestId("your-outfit-card")
    expect(ROutfitProductCardComponent).toBeInTheDocument()
  })

  test("Renders Related Your Outfit Product Card Image without crashing", ()=> {
    render(<OutfitCarousel productNum={71700} dummyData={[71697]} yourOutfit={[71697]}/>)
    const ROutfitProductCardComponent = screen.getByTestId("your-outfit-card-image")
    expect(ROutfitProductCardComponent).toBeInTheDocument()
  })

  test("Renders Related Your Outfit Product Card Category without crashing", ()=> {
    render(<OutfitCarousel productNum={71700} dummyData={[71697]} yourOutfit={[71697]}/>)
    const ROutfitProductCardComponent = screen.getByTestId("your-outfit-card-category")
    expect(ROutfitProductCardComponent).toBeInTheDocument()
  })

  test("Renders Related Your Outfit Product Card Product Name without crashing", ()=> {
    render(<OutfitCarousel productNum={71700} dummyData={[71697]} yourOutfit={[71697]}/>)
    const ROutfitProductCardComponent = screen.getByTestId("your-outfit-card-product-name")
    expect(ROutfitProductCardComponent).toBeInTheDocument()
  })

  test("Renders Related Your Outfit Product Card Price without crashing", ()=> {
    render(<OutfitCarousel productNum={71700} dummyData={[71697]} yourOutfit={[71697]}/>)
    const ROutfitProductCardComponent = screen.getByTestId("your-outfit-card-price")
    expect(ROutfitProductCardComponent).toBeInTheDocument()
  })

})

