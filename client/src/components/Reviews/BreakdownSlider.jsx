import React from 'react';
import { VscTriangleDown } from 'react-icons/vsc'

export const BreakdownSlider = ({ rating }) => {

  const OUTER_STYLES = {
    width: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: "white",
    textAlign: 'center',
    position: "relative"
  }
  const MIDDLE_STYLES = {
    height: 6,
    width: '91%',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: "lightgray",
    textAlign: 'center',
    position: "relative"
  }

  const INNER_STYLES = {
    height: 28,
    top: '0%',
    transform: 'translateY(0%)',
    width: `${rating * 20}%`,
    textAlign: 'right',
    position: 'absolute'
  }

  const ARROW_STYLES = {
    top: -9,
    transform: 'translateY(0%)',
    textAlign: 'center',
    position: 'relative'
  }


  return (
    <div id="outer-div" style={OUTER_STYLES}>
      <div id="outer-div" style={MIDDLE_STYLES}>
      </div>
      <div id="inner-div" style={INNER_STYLES}>
        <VscTriangleDown style={ARROW_STYLES} size={28} />
      </div>
    </div>
  )
}