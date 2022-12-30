import React, {useState, useEffect} from 'react';
import {OverallReviewStars} from './OverallReviewStars.jsx';


export const AddReviewForm = ({ open, children, image, onClose, product, characteristics }) => {
  const [reviewBody, setReviewBody] = useState('');

  const [reviewObject, setReviewObject] = useState({product_id: 0, recommend: false, body: reviewBody});

  const [characteristicState, setCharacteristicState] = useState({});


  const [imageURL, setImage] = useState('');

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

  var characteristicsMap = [
    {
      name: 'Size',
      1: 'A size too small',
      2: '½ a size too small',
      3: 'Perfect',
      4: '½ a size too big',
      5: 'A size too wide'
    },
    {
      name: 'Width',
      1: 'Too narrow',
      2: 'Slightly narrow',
      3: 'Perfect',
      4: 'Slightly wide',
      5: 'Too wide',
    },
    {
      name: 'Comfort',
      1: 'Uncomfortable',
      2: 'Slightly uncomfortable',
      3: 'Ok',
      4: 'Comfortable',
      5: 'Perfect'
    },
    {
      name: 'Quality',
      1: 'Poor',
      2: 'Below average',
      3: 'What I expected',
      4: 'Pretty great',
      5: 'Perfect'
    },
    {
      name: 'Length',
      1: 'Runs Short',
      2: 'Runs slightly short',
      3: 'Perfect',
      4: 'Runs slightly long',
      5: 'Runs long'
    },
    {
      name: 'Fit',
      1: 'Runs tight',
      2: 'Runs slightly tight',
      3: 'Perfect',
      4: 'Runs slightly long',
      5: 'Runs long'
    }
  ];

  function onImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]))
    }
  };

  function onChangeRecommend(event) {
    spreadReviewFunc('recommend', event.target.value);
  }

  function spreadReviewFunc(key, value) {
    setReviewObject(prevReviewObject => {
      return {
        ...prevReviewObject,
        [key]: value
      }
    })
  }

  useEffect(() => {
    spreadReviewFunc('product_id', product.id)
  },[product]);

  useEffect(() => {
    spreadReviewFunc('characteristics', characteristicState)
  },[characteristicState]);

  useEffect(() => {
    spreadReviewFunc('body', reviewBody)
  },[reviewBody]);

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
            <div id="recommended" onChange={onChangeRecommend}>
                Recommended:
                <input type="radio" name="recommended" value="true" />
                Yes
                <input type="radio" name="recommended" value="false" />
                No
                <br/>
            </div>
            {characteristicsMap.map((characteristic, index) => {
              characteristic.name = characteristic.name.charAt(0).toUpperCase() + characteristic.name.slice(1);
              if (characteristics[characteristic.name]) {
                return (
                  <div id={characteristic.name} key={index}>
                  {characteristic.name}:  {characteristicsMap[index][characteristicState[characteristics[characteristic.name].id]] || 'none selected'}<br/>
                  <input type="radio" name={characteristic.name}  value="1" onClick={() => {characteristicState[characteristics[characteristic.name].id] = 1; setCharacteristicState({...characteristicState})}} />1
                  <input type="radio" name={characteristic.name}  value="2" onClick={() => {characteristicState[characteristics[characteristic.name].id] = 2; setCharacteristicState({...characteristicState})}} />2
                  <input type="radio" name={characteristic.name}  value="3" onClick={() => {characteristicState[characteristics[characteristic.name].id] = 3; setCharacteristicState({...characteristicState})}} />3
                  <input type="radio" name={characteristic.name}  value="4" onClick={() => {characteristicState[characteristics[characteristic.name].id] = 4; setCharacteristicState({...characteristicState})}} />4
                  <input type="radio" name={characteristic.name}  value="5" onClick={() => {characteristicState[characteristics[characteristic.name].id] = 5; setCharacteristicState({...characteristicState})}} />5
                  <br/>
                </div>
                )
              } else {
                return null;
              }
            })}
            <div>

            <label htmlFor="reviewSummary">Review Summary: </label>
            <input type="text" id="reviewSummary" name="reviewSummary" placeholder="Example: Best purchase ever!" required maxLength="60" size="65" onChange={e => spreadReviewFunc('summary', e.target.value)}></input><br/>

            <label>Review Body: </label>
            <textarea
              name="reviewBody"
              placeholder="Why did you like the product or not?"
              value={reviewBody}
              onChange={e => setReviewBody(e.target.value)}
              required
              minLength="50"
              maxLength="1000">
            </textarea><br/>
            {reviewBody.length < 50 ? `Minimum required characters left: ${50-reviewBody.length}` : 'Minimum reached'}<br/>
            <br/>
            <input type="file" accept="image/*" multiple onChange={onImageChange} ></input><br/>
            <img id="target" src={imageURL} className="reviewImage"/><br/>
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" name="username" placeholder="Example: jackson11!" required maxLength="60" size="65"></input><br/>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" placeholder="Example: jackson11@email.com" required maxLength="60" size="65"></input><br/>
            For authentication reasons, you will not be emailed
            <br/>
            <input type="submit" value="Submit" />
            </div>
        </form>
      </div>
      </div>
    </>
  )
};