import React, { useState, useEffect } from "react";
import RelatedCarousel from "../components/Related/RelatedCarousel.jsx"
import YourOutfit from "../components/Related/YourOutfit.jsx"

export const Related = (props) => {



  return (
    <div>
      <h1>Related Component</h1>


        <RelatedCarousel styles={props.styles} product={props.product} related={props.related} />


      <YourOutfit />
    </div>
  );
};