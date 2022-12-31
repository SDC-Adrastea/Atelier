import React, {useState, useEffect} from "react";
import axios from 'axios';

import { Answer } from "./Questions/QuestionsComponents/Answer.jsx";
import { AnswerList } from "./Questions/QuestionsComponents/AnswerList.jsx";
import { Question } from "./Questions/QuestionsComponents/Question.jsx";
import { QuestionsList } from "./Questions/QuestionsComponents/QuestionsList.jsx";
import { SearchQuestions } from "./Questions/QuestionsComponents/SearchQuestions.jsx";
import { AddQuestionModal } from  "./Questions/QuestionsComponents/AddQuestionModal.jsx";


export const Questions = (props) => {

  // returnedQs is set to the returned list of questions from axios call using the product number
  // setSearch is passed to the SearchQuestions component and searchQ is then passed to questionsList component
  // modalIsOpen toggles the view of the AddQuestion Modal component

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
    <div data-testid="Questions Component" widgetname='Questions' className="Questions">
      <h1 id="qAHeader" widgetname='Questions'>Questions & Answers</h1>
      <SearchQuestions setSearch={setSearch} />

      {returnedQs.length > 0 && <QuestionsList productNum={props.productNum} setModalIsOpen={setModalIsOpen} product={props.product} returnedQs={returnedQs} searchQ={searchQ} setQs={setQs}/>}
      {modalIsOpen && <AddQuestionModal setModalIsOpen={setModalIsOpen} product={props.product} productNum={props.productNum}/>}
      {/* <button onClick={(event)=>handleTrackClick(event.target)}>Send Click Track</button> */}
    </div>
  )
};
// look at questions component. If more than 4 arguments, create an object to pass props
