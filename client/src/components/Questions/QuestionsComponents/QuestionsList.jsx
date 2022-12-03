import React, {useState, useEffect} from "react";
import { Question } from "./Question.jsx";

export const QuestionsList = (props) => {
console.log('here be my props yo', props)
  return (
    <div style={{color: 'blue'}}>
      {props.returnedQs.map((data)=> (<Question data={data}/>)) }
      <h2>Questions List</h2>
    </div>
  );
};