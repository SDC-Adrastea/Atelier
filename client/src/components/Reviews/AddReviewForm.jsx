import React, {useState, useEffect} from 'react';
import {OverallReviewStars} from './OverallReviewStars.jsx';

export const AddReviewForm = ({ open, children, image, onClose, product }) => {

  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
  }

  const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    height: '80%',
    width: '80%',
    zIndex: 1000
  }

  var characteristics = ['size', 'width', 'comfort', 'quality', 'length', 'fit'];

  if (!open) return null

  return (
    <>
      <div style={OVERLAY_STYLES}>
      <div style={MODAL_STYLES}>
        <button onClick={onClose}>&#10006;</button>
        <br/>
        <form>
          <h2>Write Your Review</h2>
          <h3>About the {product.name}</h3>
            Overall Rating*<br/>
            <OverallReviewStars/><br/>
            <br/>
            <div id="recommended">
              Recommended:
              <input type="radio" name="recommended" value="true" />Yes
              <input type="radio" name="recommended" value="false" />No
              <br/>
            </div>
            {characteristics.map((characteristic, index) => {
              return (
                <div id={characteristic} key={index}>
                  {characteristic.charAt(0).toUpperCase() + characteristic.slice(1)} :
                  <input type="radio" name={characteristic}  value="1" />1
                  <input type="radio" name={characteristic}  value="2" />2
                  <input type="radio" name={characteristic}  value="3" />3
                  <input type="radio" name={characteristic}  value="4" />4
                  <input type="radio" name={characteristic}  value="5" />5
                  <br/>
                </div>
              )
            })}
        </form>
      </div>
      </div>
    </>
  )
};