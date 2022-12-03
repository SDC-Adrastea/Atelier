import React, {useState, useEffect} from "react";
import { Question } from "./Question.jsx";

export const QuestionsList = (props) => {
console.log('here be my props yo', props)

const [moreQs, addQs] = useState(2);

const handleClick = () => {
  var currentQNum = moreQs;
  currentQNum = currentQNum + 2;
  addQs(currentQNum);
}

  return (
    <div style={{color: 'blue'}}>
      <h2>Questions List</h2>
      {props.returnedQs.slice(0, moreQs).map((data, idx)=> (<Question data={data} key={idx}/>)) }
      <button onClick={handleClick}>Load More Questions</button>
    </div>
  );
};