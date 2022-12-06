import React, { useState, useEffect } from "react";
import axios from "axios";

const StarRating = (props) => {


  return (
    <div className="star-rating">
      placeholder for stars
      <div>{props.rating}</div>
    </div>
  )
}

export default StarRating;