import React, {useState, useEffect} from "react";
import axios from 'axios';

import { AddAnswer } from "./Questions/QuestionsComponents/AddAnswer.jsx";
import { AddQuestion } from "./Questions/QuestionsComponents/AddQuestion.jsx";
import { Answer } from "./Questions/QuestionsComponents/Answer.jsx";
import { AnswerList } from "./Questions/QuestionsComponents/AnswerList.jsx";
import { Question } from "./Questions/QuestionsComponents/Question.jsx";
import { QuestionsList } from "./Questions/QuestionsComponents/QuestionsList.jsx";
import { SearchQuestions } from "./Questions/QuestionsComponents/SearchQuestions.jsx";
import { AddQuestionModal } from  "./Questions/QuestionsComponents/AddQuestionModal.jsx";


export const Questions = (props) => {


  const [returnedQs, setQs] = useState([]);
  const [searchQ, setSearch] =useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);


  useEffect(() => {
    axios.get('/qa/questions',{
      params:{productNum: props.productNum}
    })
    .then((data)=>{setQs(data.data.results)})
  },[props.productNum]);
// tech debt No error boundaries
// look into optional chaining setQs() to undefined
// wrap api call
// data.data.results the second ".data" could fail and .catch will not save

  return (
    <div data-testid="Questions Component" className="Questions">
      <h1>Questions & Answers</h1>
      <SearchQuestions setSearch={setSearch} />

      {returnedQs.length > 0 && <QuestionsList productNum={props.productNum} product={props.product} returnedQs={returnedQs} searchQ={searchQ} setQs={setQs}/>}
      <button onClick={() => setModalIsOpen(true)}>
        Add Question
      </button>
      {modalIsOpen && <AddQuestionModal setModalIsOpen={setModalIsOpen} product={props.product} productNum={props.productNum}/>}
    </div>
  )
};
// look at questions component. If more than 4 arguments, create an object to pass props
