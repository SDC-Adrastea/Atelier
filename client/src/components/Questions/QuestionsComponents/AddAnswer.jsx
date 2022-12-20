import React, {useState} from "react";
import Modal from "react-modal";
import axios from "axios";

export const AddAnswer = (props) => {

  const [ansModalToggle, setAnsModalToggle] = useState(false);
  const [answer, setAnswer] = useState('')
  const [nickname, setNickName] = useState('')
  const [email, setEmail] = useState('')

  const [error, setAnswerError] =useState(false);

  const handleAnswerSubmit = (event) => {
    event.preventDefault();
    if(answer.length === 0 || nickname.length === 0 || email.length === 0) {
      setAnswerError(true);
    } else {
      const formInfo= {
        answer: answer,
        nickname: nickname,
        email: email,
        questionId: props.data.question_id
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
        axios.get('/answers',{
          params:{questionId: props.questionId}
        })
        .then((data)=>{props.setAs(data.data.results)
          handleAnswerCloseClick()
        })
      })

    }
  };

  const handleAnswerModalOpenClick = () => {
    setAnsModalToggle(true);
  };


  const handleAnswerCloseClick = () => {
    setAnsModalToggle(false);
  };

  return (
    <div>

      <button onClick={handleAnswerModalOpenClick}>Add Your Answer</button>
      <Modal
        isOpen={ansModalToggle}
        onRequestClose={handleAnswerCloseClick}
        ariaHideApp={false}
      >

        <h1>Submit Your Answer</h1>
        <h2>{props.product.name}: {props.data.body}</h2>
        <form onSubmit={handleAnswerSubmit}>
          Your Answer * <input size={1000} name="answer" type="text" onChange={event=>setAnswer(event.target.value)} />
          <div>
          {error && answer.length === 0 && <p style={{ color:'red'}}>Answer must be entered</p>}
          </div>

          What is your nickname * <input size={60} name="nickname" type="text" onChange={event=>setNickName(event.target.value)} placeholder={"Example: jack543!"}/>
          <p>“For privacy reasons, do not use your full name or email address”</p>
          <div>
          {error && nickname.length === 0 && <p style={{ color:'red'}}>Nickname must be entered</p>}
          </div>

          Your Email * <input size={60} name="email" type="email" onChange={event=>setEmail(event.target.value)} placeholder={"Example: jack@email.com"}/>
          <p>“For authentication reasons, you will not be emailed”</p>
          <div>
          {error && email.length=== 0 && <p style={{ color:'red'}}>email must be entered</p>}
          </div>

          <button>Submit Answer</button>
        </form>
      </Modal>
    </div>
  );
}


// The modal should be subtitled: “[Product Name]: [Question Body]” . The appropriate product name and question body should be inserted into the subtitle.
// The following inputs should appear on the question form. Each should be labeled as titled below. Those indicated as mandatory should have an asterisk next to the title.
// 1.3.6.1. Your Answer (mandatory) This text input should be a large text window allowing up to 1000 characters.
// 1.3.6.2. What is your nickname (mandatory) A text input allowing up to 60 characters for the user’s display name.
// Placeholder text should read: “Example: jack543!”.
// Below this field, the text “For privacy reasons, do not use your full name or email address” will appear.
// 1.3.6.3. Your email (mandatory) A text input allowing up to 60 characters.
// Placeholder text should read: “Example: jack@email.com”.
// Below this field, the text “For authentication reasons, you will not be emailed” will appear.


// 1.3.6.4. Upload your photos A button will appear allowing users to upload their photos to the form. Up to five photos should be allowed for each answer.
// Clicking the button should open a separate window where the photo to be can be selected.
// After the first image is uploaded, a thumbnail showing the image should appear. A user should be able to add up to five images before the button to add disappears, preventing further additions.
// 1.3.6.5. Submit answer (button) A button by which the answer can be submitted.
// Upon selecting this button the form’s inputs should be validated. If there are any invalid entries, the submission should be prevented, and a warning message will appear. This message should be titled “You must enter the following:”
// This error will occur if:
// Any mandatory fields are blank
// The email address provided is not in correct email format
// The images selected are invalid or unable to be uploaded.