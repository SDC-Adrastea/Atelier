import React, {useState, useEffect} from "react";
import axios from 'axios';
import { ReviewsList } from "./Reviews/ReviewsList.jsx";
import { RatingsColumn } from "./Reviews/RatingsColumn.jsx";


export const Reviews = (props) => {
  // console.log('props in Reviews', props)

  return (
    <div>
    <h1>Ratings & Reviews</h1>
    <div style={{ display: "grid", gridTemplateColumns: "20% 66%", gridGap: 20 }}>
      <div>
        <RatingsColumn  />
      </div>
      <div>
        <ReviewsList productNum={props.productNum} />
      </div>
    </div>
  </div>

  )
};