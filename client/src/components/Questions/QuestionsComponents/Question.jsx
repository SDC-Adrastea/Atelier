import React, {useState, useEffect} from "react";
import { AnswerList } from "./AnswerList.jsx";
import { AddAnswer } from "./AddAnswer.jsx"


export const Question = (props) => {
//addAnswer Button

  return (
    <div>
      <h4>Q: {props.data.question_body}</h4> <button>Add Answer</button>
      <p>Helpful? <button>Yes</button>{props.data.question_helpfulness}</p>
      <AnswerList questionId={props.data.question_id} />
      <AddAnswer />
    </div>
  );
};