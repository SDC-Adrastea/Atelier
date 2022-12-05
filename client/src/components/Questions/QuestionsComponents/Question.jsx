import React, {useState, useEffect} from "react";
import { AnswerList } from "./AnswerList.jsx";
import { AddAnswer } from "./AddAnswer.jsx"


export const Question = (props) => {
//addAnswer Button

  return (
    <div>
      <h4>Q: {props.data.question_body}</h4>
      <p>Helpful? <button>Yes</button>{props.data.question_helpfulness}</p>
      <AnswerList questionId={props.data.question_id} />
      <AddAnswer data={props.data} product={props.product} questionId={props.data.question_id} />
    </div>
  );
};