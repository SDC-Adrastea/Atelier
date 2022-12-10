import React, {useState, useEffect} from 'react';
import { BreakdownSlider } from './BreakdownSlider.jsx';


export const ProductBreakdown = (props) => {

  // const characteristics = props.metadata.characteristics;

  // console.log(characteristics);

  if (props.metadata.characteristics) {
  let characteristics = props.metadata.characteristics;

    return (
      <div>
        {characteristics.Size ? <p>Size<br/></p> : null}
        {characteristics.Size ? <BreakdownSlider rating={characteristics.Size.value} /> : null}
        {characteristics.Width ? <p>Width<br/></p> : null}
        {characteristics.Width ? <BreakdownSlider rating={characteristics.Size.value} /> : null}
        {characteristics.Comfort ? <p>Comfort<br/></p> : null}
        {characteristics.Comfort ? <BreakdownSlider rating={characteristics.Comfort.value} /> : null}
        {characteristics.Quality ? <p>Quality<br/></p> : null}
        {characteristics.Quality ? <BreakdownSlider rating={characteristics.Quality.value} /> : null}
        {characteristics.Length ? <p>Length<br/></p> : null}
        {characteristics.Length ? <BreakdownSlider rating={characteristics.Length.value} /> : null}
        {characteristics.Fit ? <p>Fit<br/></p> : null}
        {characteristics.Fit ? <BreakdownSlider rating={characteristics.Fit.value} />: null}
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
