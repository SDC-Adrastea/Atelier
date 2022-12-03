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

  const [moreAs, addAs] = useState(2);

  const handleMoreAsClick = () => {
  var currentANum = moreAs;
  currentANum = currentANum + 2;
  addAs(currentANum);
}

  return (
    <div style={{color: 'green'}}>
      <h2>Answer List</h2>
      {returnedAs.slice(0, moreAs)?.map((answerData, idx)=> <Answer answerData={answerData} key={idx}/>)}
      {moreAs <= returnedAs.length && <button onClick={handleMoreAsClick}>Load More Answers</button>}
    </div>
  );
};