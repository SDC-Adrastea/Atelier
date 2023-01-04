import React, {useState, useEffect} from "react";
import ReactDOM from 'react-dom';

import axios from "axios";

export const AddAnswerModal = (props) => {

  // all constants here are used in api post
  const [photos, setPhotos] = useState([]);
  const [answer, setAnswer] = useState('');
  const [nickname, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [imageURLs, setImageURLs] = useState([]);

  // underMax and max are used to limit uploaded photos to 5
  const [underMax, setUnderMax] =useState(true);
  const [max, setMax] = useState(1);

  // stateImages is used to create the preview of images in modal
  const [stateImages, setStateImages] = useState([]);

  // error is used if all information is not entered before answer is submitted
  const [error, setAnswerError] =useState(false);



  useEffect(()=> {
    const newImageUrls = imageURLs;
    stateImages.forEach(image =>  newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs([...newImageUrls]);

}, [stateImages, props.data]);

  // handleSubmitPhotos uploads photos to third party cloudinary.com and thenr returns the URL to be sent to heroku
  function handleSubmitPhotos (event) {

    setStateImages([...event.target.files]);
    console.log('stateImages in handleSubmit', stateImages);

    const files = event.target.files;
    const data = new FormData()
    data.append("file", files[0])
    data.append("upload_preset", "kuzmabr")
    axios.post("https://api.cloudinary.com/v1_1/dblteitfp/image/upload", data)
    .then(res => {
      const tempPhotosArr = photos;
      tempPhotosArr.push(res.data.secure_url);
    setPhotos(tempPhotosArr);
    console.log(photos);

    if (max <= 5) {
      console.log(max)
      setMax(max + 1);
      if (max >= 5) {
        setUnderMax(false);
      }
    }
    })
    .catch(err => console.log(err))
  }


  // note that state is set to initial state once answer is submitted
  const handleAnswerSubmit = (event) => {
    event.preventDefault();
    if(answer.length === 0 || nickname.length === 0 || email.length === 0) {
      setAnswerError(true);
    } else {
      const formInfo= {
        answer: answer,
        nickname: nickname,
        email: email,
        questionId: props.data.question_id,
        photos: photos
      }
      console.log('Answer formInfo',formInfo)
      axios.post('/answers',{
        formInfo
      })
      .then((data)=>{console.log(data.data)
        alert('Answer posted!')
        setAnswer('')
        setNickName('')
        setEmail('')
        setPhotos([])
        axios.get('/answers',{
          params:{questionId: props.questionId}
        })
        .then((data)=>{props.setAs(data.data.results)
          props.setAnsModalIsOpen(false)
        })
      })

    }
  };

  return (
    <>
      <div className="questionCentered" widgetname='Questions'>
        <div className="questionModal" widgetname='Questions'>
        <h1 widgetname='Questions' id="submitAnswerHeading">Submit Your Answer</h1>
        <h2 widgetname='Questions' id="submiAnswertitle">{props.product.name}: {props.data.question_body}</h2>
        <form onSubmit={handleAnswerSubmit} widgetname='Questions' id="answerForm" data-testid="answerForm">
          Your Answer * <input size={1000} id="yourQuestion" name="answer" type="text" onChange={event=>setAnswer(event.target.value)} />
          <div widgetname='Questions'>
          {error && answer.length === 0 && <p style={{ color:'red'}}>Answer must be entered</p>}
          </div>

          What is your nickname * <input size={60} name="nickname" type="text" onChange={event=>setNickName(event.target.value)} placeholder={"Example: jack543!"}/>
          <p widgetname='Questions' id="AnswerDisclaimer">For privacy reasons, do not use your full name or email address</p>
          <div widgetname='Questions'>
          {error && nickname.length === 0 && <p style={{ color:'red'}}>Nickname must be entered</p>}
          </div>

          Your Email * <input size={60} widgetname='Questions' name="email" type="email" onChange={event=>setEmail(event.target.value)} placeholder={"Example: jack@email.com"}/>
          <p widgetname='Questions'>For authentication reasons, you will not be emailed</p>
          <div widgetname='Questions'>
          {error && email.length=== 0 && <p style={{ color:'red'}}>email must be entered</p>}
          </div>
          {/* <img className="addPhotosButton" src="lucy-upload-photo.PNG"  id="uploadImage" style="cursor:pointer"/> */}
          {underMax && <input name="photosInput" type="file" multiple accept="image/*" onChange={handleSubmitPhotos} /> }
          <div widgetname='Questions'>
          <button id="moreQuestionsBtn" widgetname='Questions'>Submit Answer</button> <button id="moreQuestionsBtn"
              onClick={() => props.setAnsModalIsOpen(false)}
              widgetname='Questions'
            >
              Cancel Submission
            </button>
            </div>
        </form>
        {imageURLs.map((photo, idx)=><img src={photo} key={idx} alt="uploaded Answer Image"/>)}
        </div>
      </div>
    </>
  );
};

