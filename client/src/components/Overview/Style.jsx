import React, { useState, useEffect } from 'react';

const Style = (props) => {

  return (
    <div className="each-style">
      {props.style.name}
    </div>
  )
}

export default Style;