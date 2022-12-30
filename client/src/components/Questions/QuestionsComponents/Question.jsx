import React, {useState, useEffect} from "react";
import { AnswerList } from "./AnswerList.jsx";
import { AddAnswerModal } from "./AddAnswerModal.jsx"

import axios from "axios";


export const Question = (props) => {
  // question_id is used for helpfulness api call
  // sentHelpful is used to block a resend of the helpfulness click
  // returnedAs is an array of a list of the answers for each question
  // ansModalIsOpen toggels the view of the Add Answer modal
  const question_id = props.data.question_id;
  const [sentHelpful, setHelpful] = useState(false);
  const [returnedAs, setAs] = useState([]);
  const [ansModalIsOpen, setAnsModalIsOpen] = useState(false);


  // setQs is being passed down in order to rerender list to show updated helpfulness when clicked

  const handleQHelpfulness = () => {
    if (sentHelpful === false) {
      axios.put('/questions/helpful', {
        question_id
      }).then(()=> {
        axios.get('/qa/questions',{
          params:{productNum: props.productNum}
        })
        .then((data)=>{props.setQs(data.data.results)
          setHelpful(true)
        })
        }
      );
    }
  }

  return (
    <div className="Question" data-testid="QuestionComponent">
          <div className="questionText">Q: {props.data.question_body}</div>
          <div id="qHelpful"> Helpful?  |  <button id="qHelpfulBtn" onClick={handleQHelpfulness}>Yes</button>  &#40;{props.data.question_helpfulness}&#41; |
            <button id="addAnswerBtn" onClick={() => setAnsModalIsOpen(true)}> Add Answer</button>
      </div>
      <AnswerList questionId={props.data.question_id} setAs={setAs} returnedAs={returnedAs}/>
      {ansModalIsOpen && <AddAnswerModal setAnsModalIsOpen={setAnsModalIsOpen} data={props.data} product={props.product} questionId={props.data.question_id} setAs={setAs}/>}
    </div>
  );
};