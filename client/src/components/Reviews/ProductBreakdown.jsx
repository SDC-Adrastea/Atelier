import React, {useState, useEffect} from 'react';
import { BreakdownSlider } from './BreakdownSlider.jsx';


export const ProductBreakdown = (props) => {

  // const characteristics = props.metadata.characteristics;

  // console.log(characteristics);

  if (props.metadata.characteristics) {
  let characteristics = props.metadata.characteristics;

    return (
      <div>
        {characteristics.Size ? <p>Size <br/> <BreakdownSlider rating={characteristics.Size.value} /></p>: null}
        {characteristics.Width ? <p>Width <br/> <BreakdownSlider rating={characteristics.Width.value} /></p>: null}
        {characteristics.Comfort ? <p>Comfort <br/> <BreakdownSlider rating={characteristics.Comfort.value} /></p>: null}
        {characteristics.Quality ? <p>Quality <br/> <BreakdownSlider rating={characteristics.Quality.value} /></p>: null}
        {characteristics.Length ? <p>Length <br/> <BreakdownSlider rating={characteristics.Length.value} /></p>: null}
        {characteristics.Fit ? <p>Fit <br/> <BreakdownSlider rating={characteristics.Fit.value} /></p>: null}
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
