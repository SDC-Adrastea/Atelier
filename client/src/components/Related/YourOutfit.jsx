import React, { useState, useEffect } from "react"
import OutfitCarousel from "./OutfitCarousel.jsx"

const YourOutfit = (props) => {

  const [dummyData , addToDummyData] = useState([71700])

  const test = (num) => {
    let temp = dummyData
    let test1 = dummyData.push(num)
    addToDummyData(test1)
  }

  return (
    <>
      <h4>Your Outfit</h4>
      <div>
        <OutfitCarousel productNum={props.productNum} dummyData={dummyData} test={test}/>
      </div>
    </>
  )
}

export default YourOutfit;