import React, {useState, useEffect} from 'react';
import { BreakdownSlider } from './BreakdownSlider.jsx';


export const ProductBreakdown = (props) => {

  // const characteristics = props.metadata.characteristics;

  // console.log(characteristics);

  if (props.metadata.characteristics) {
  let characteristics = props.metadata.characteristics;

    return (
      <div data-testid="product-breakdown" id="product-breakdown" widgetname="Reviews" className="characteristics-flex-container">
        {characteristics.Size ? <p id="size-breakdown" widgetname="Reviews" >Size<br/></p> : null}
        {characteristics.Size ? <BreakdownSlider rating={characteristics.Size.value}/> : null}
        {characteristics.Size ? <div className="characteristics-flex-item"><p>Too small</p><p>Perfect</p><p>Too big</p></div> : null}
        {/* too small, perfect, too big */}

        {characteristics.Width ? <p id="width-breakdown" widgetname="Reviews" >Width<br/></p> : null}
        {characteristics.Width ? <BreakdownSlider rating={characteristics.Width.value}/> : null}
        {characteristics.Width ? <div className="characteristics-flex-item"><p>Too narrow</p><p>Perfect</p><p>Too wide</p></div> : null}
        {/* too narrow, perfect, too wide */}


        {characteristics.Comfort ? <p id="comfort-breakdown" widgetname="Reviews" >Comfort<br/></p> : null}
        {characteristics.Comfort ? <BreakdownSlider rating={characteristics.Comfort.value}/> : null}
        {characteristics.Comfort ? <div className="characteristics-flex-item"><p>Uncomfortable</p><p>Perfect</p></div> : null}

        {characteristics.Quality ? <p id="quality-breakdown" widgetname="Reviews" >Quality<br/></p> : null}
        {characteristics.Quality ? <BreakdownSlider rating={characteristics.Quality.value} /> : null}
        {characteristics.Quality ? <div className="characteristics-flex-item"><p>Poor</p><p>Great</p></div> : null}
        {/* poor, great */}

        {characteristics.Length ? <p id="length-breakdown" widgetname="Reviews" >Length<br/></p> : null}
        {characteristics.Length ? <BreakdownSlider rating={characteristics.Length.value} /> : null}
        {characteristics.Length ? <div className="characteristics-flex-item"><p>Runs short</p><p>Perfect</p><p>Runs long</p></div> : null}

        {/* runs short, perfect, runs long */}

        {characteristics.Fit ? <p id="fit-breakdown" widgetname="Reviews" >Fit<br/></p> : null}
        {characteristics.Fit ? <BreakdownSlider rating={characteristics.Fit.value} />: null}
        {characteristics.Fit ? <div className="characteristics-flex-item"><p>Runs tight</p><p>Perfect</p><p>Runs long</p></div> : null}
        {/* runs tight, perfect, runs long */}
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
