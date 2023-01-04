import React, {useState, useEffect} from 'react';
import { BreakdownSlider } from './BreakdownSlider.jsx';


export const ProductBreakdown = (props) => {

  // const characteristics = props.metadata.characteristics;

  // console.log(characteristics);

  if (props.metadata.characteristics) {
  let characteristics = props.metadata.characteristics;

    return (
      <div data-testid="product-breakdown" id="product-breakdown" widgetname="Reviews">
        {characteristics.Size ? <p id="size-breakdown" widgetname="Reviews" >Size<br/></p> : null}
        {characteristics.Size ? <BreakdownSlider rating={characteristics.Size.value}/> : null}
        {characteristics.Width ? <p id="width-breakdown" widgetname="Reviews" >Width<br/></p> : null}
        {characteristics.Width ? <BreakdownSlider rating={characteristics.Width.value}/> : null}
        {characteristics.Comfort ? <p id="comfort-breakdown" widgetname="Reviews" >Comfort<br/></p> : null}
        {characteristics.Comfort ? <BreakdownSlider rating={characteristics.Comfort.value}/> : null}
        {characteristics.Quality ? <p id="quality-breakdown" widgetname="Reviews" >Quality<br/></p> : null}
        {characteristics.Quality ? <BreakdownSlider rating={characteristics.Quality.value} /> : null}
        {characteristics.Length ? <p id="length-breakdown" widgetname="Reviews" >Length<br/></p> : null}
        {characteristics.Length ? <BreakdownSlider rating={characteristics.Length.value} /> : null}
        {characteristics.Fit ? <p id="fit-breakdown" widgetname="Reviews" >Fit<br/></p> : null}
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
