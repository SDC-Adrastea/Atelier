import React, {useState, useEffect} from "react";
import axios from 'axios';

import { AddAnswer } from "./Questions/QuestionsComponents/AddAnswer.jsx";
import { AddQuestion } from "./Questions/QuestionsComponents/AddQuestion.jsx";
import { Answer } from "./Questions/QuestionsComponents/Answer.jsx";
import { AnswerList } from "./Questions/QuestionsComponents/AnswerList.jsx";
import { Question } from "./Questions/QuestionsComponents/Question.jsx";
import { QuestionsList } from "./Questions/QuestionsComponents/QuestionsList.jsx";
import { SearchQuestions } from "./Questions/QuestionsComponents/SearchQuestions.jsx";
import { QuestionsGet } from "../api-docs/QuestionsAPI.js";


export const Questions = (props) => {


  const [returnedQs, setQs] = useState([]);



  useEffect(() => {
    axios.get('/qa/questions',{
      params:{productNum: props.productNum}
    })
    .then((data)=>{setQs(data.data.results)})
  },[]);

  return (
    <div>
      {/* {returnedQs.map(q=> <Question q={q}/>)} */}
      <h1>Questions Component</h1>
      <SearchQuestions />
      <QuestionsList productNum={props.productNum} returnedQs={returnedQs}/>
      <AddQuestion />
    </div>
  )
};