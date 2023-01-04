
import React, {useState} from "react";
import axios from "axios";

export const AddQuestionModal = (props) => {

  const [question, setQuestion] = useState('')
  const [nickname, setNickName] = useState('')
  const [email, setEmail] = useState('')

  const [error, setQuestionError] =useState(false);

  const handleQuestionSubmit = (event) => {
    event.preventDefault();
    if(question.length == 0 || nickname.length == 0 || email.length == 0) {
      setQuestionError(true)
    } else {
      const formInfo= {
        question: question,
        nickname: nickname,
        email: email,
        productNum: props.productNum
      }
      axios.post('/qa/questions',{
        formInfo
      })
      .then((data)=>{console.log(data.data)
        alert('Question posted!')
        props.setModalIsOpen(false)
      })
    }
  };



  return (
    <>
      <div className="questionCentered" >
        <div className="questionModal" >
        <h1>Ask Your Question</h1>
        <h2>about: {props.product.name}</h2>
        <form onSubmit={handleQuestionSubmit} data-testid="form">
          Your Question * <input size={1000} id="yourQuestion" name="question" type="text" onChange={event=>setQuestion(event.target.value)} placeholder={"Why did you like the product or not?"}/>
          <div>
          {error && question.length=== 0 && <p style={{ color: 'red' }}>Question must be entered</p>}
          </div>

          What is your nickname * <input size={60} name="nickname" type="text" onChange={event=>setNickName(event.target.value)} placeholder={"Example: jackson11!"}/>
          <p>“For privacy reasons, do not use your full name or email address”</p>
          <div>
          {error && nickname.length === 0 && <p style={{ color: 'red' }}>Nickname must be entered</p>}
          </div>

          Your Email * <input size={60} name="email" type="email" onChange={event=>setEmail(event.target.value)} placeholder={"Example: TSwiftyFan32@hotmail.com"}/>
          <p>“For authentication reasons, you will not be emailed”</p>
          <div>
          {error && email.length === 0 && <p style={{ color:'red'}}>email must be entered</p>}
          </div>

          <button id="moreQuestionsBtn">Submit Question</button>

              <button id="moreQuestionsBtn"
                onClick={() => props.setModalIsOpen(false)}
              >
                Cancel Submission
              </button>

        </form>
        </div>
      </div>
    </>
  );
};

