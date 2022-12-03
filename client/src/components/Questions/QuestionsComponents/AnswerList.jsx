import React, {useState, useEffect} from "react";
import { Answer } from "./Answer.jsx";
import axios from 'axios';

export const AnswerList = (props) => {
  // console.log('here are questionID props', props.questionId);

  const [returnedAs, setAs] = useState([]);

  useEffect(() => {
    axios.get('/answers',{
      params:{questionId: props.questionId}
    })
    .then((data)=>{setAs(data.data.results)})
  },[]);

  return (
    <div style={{color: 'green'}}>
      {returnedAs?.map((answerData, idx)=> <Answer answerData={answerData} key={idx}/>)}
      <h2>Answer List</h2>
    </div>
  );
};