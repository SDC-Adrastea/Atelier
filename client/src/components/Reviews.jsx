import React, {useState, useEffect} from "react";
import axios from 'axios';
import { ReviewsList } from "./Reviews/ReviewsList.jsx";


export const Reviews = (props) => {
  // console.log('props in Reviews', props)

  return (
    <div>
      <h1>Ratings & Reviews</h1>
      <ReviewsList productNum={props.productNum} />
    </div>
  )
};