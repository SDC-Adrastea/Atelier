import React, {useState, useEffect} from 'react';


export const ProductBreakdown = (props) => {

  // const characteristics = props.metadata.characteristics;

  // console.log(characteristics);

  if (props.metadata.characteristics) {
  let characteristics = props.metadata.characteristics

    return (
      <div>
        <p>hello</p>
        {characteristics.Comfort.value}
      </div>
    )
  } else {
    return (
      <div>
        <p>loading...</p>
      </div>
    )
  }

};
