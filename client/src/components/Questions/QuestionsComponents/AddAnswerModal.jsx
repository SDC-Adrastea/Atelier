import React, {useState, useEffect} from "react";

import axios from "axios";

const max = 5;

export const AddAnswerModal = (props) => {

  const [photos, setPhotos] = useState([]);
  const [answer, setAnswer] = useState('');
  const [nickname, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [stateImages, setStateImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [error, setAnswerError] =useState(false);

  useEffect(()=> {
    const newImageUrls = imageURLs;
    console.log('here are stateImages in useEffect', stateImages);
    stateImages.forEach(image =>  newImageUrls.push(URL.createObjectURL(image)));
    console.log('here is newImage URLS', newImageUrls);

    setImageURLs([...newImageUrls]);
    console.log('here is setImageURLs after set',imageURLs)

}, [stateImages]);



  function handleSubmitPhotos (event) {
    // var tempStateImages = stateImages;
    // tempStateImages.push(event.target.files)
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

    })
    .catch(err => console.log(err))
  }

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
      <div className="questionCentered" >
        <div className="questionModal" >
        <h1>Submit Your Answer</h1>
        <h2>{props.product.name}: {props.data.body}</h2>
        <form onSubmit={handleAnswerSubmit}>
          Your Answer * <input size={1000} name="answer" type="text" onChange={event=>setAnswer(event.target.value)} />
          <div>
          {error && answer.length === 0 && <p style={{ color:'red'}}>Answer must be entered</p>}
          </div>

          What is your nickname * <input size={60} name="nickname" type="text" onChange={event=>setNickName(event.target.value)} placeholder={"Example: jack543!"}/>
          <p>For privacy reasons, do not use your full name or email address</p>
          <div>
          {error && nickname.length === 0 && <p style={{ color:'red'}}>Nickname must be entered</p>}
          </div>

          Your Email * <input size={60} name="email" type="email" onChange={event=>setEmail(event.target.value)} placeholder={"Example: jack@email.com"}/>
          <p>For authentication reasons, you will not be emailed</p>
          <div>
          {error && email.length=== 0 && <p style={{ color:'red'}}>email must be entered</p>}
          </div>

          Add Photos <input name="photos" type="file" multiple accept="image/*" onChange={handleSubmitPhotos} />
          <button>Submit Answer</button>
        </form>
        {imageURLs.map((photo, idx)=><img src={photo} key={idx}/>)}

          <div>
            <button
              onClick={() => props.setAnsModalIsOpen(false)}
            >
              Cancel Submission
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

