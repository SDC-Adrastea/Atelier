import React, {useState, useEffect} from "react";
import { Answer } from "./Answer.jsx";
import axios from 'axios';

export const AnswerList = (props) => {
  // console.log('here are questionID props', props.questionId);

  useEffect(() => {
    axios.get('/answers',{
      params:{questionId: props.questionId}
    })
    .then((data)=>{props.setAs(data.data.results)})
  },[props.questionId]);

  // moreAs is used to cap the initial viewed answers to 2
  const [moreAs, addAs] = useState(2);

  // used to render all answers
  const handleMoreAsClick = () => {
  var currentANum = moreAs;
  currentANum = props.returnedAs.length;
  addAs(currentANum);
}

  // used to collapse answerlist
  const resetAlist = () => {
    var currentANum = 2;
    addAs(currentANum);
  }

  return (
    <div className="answersList" data-testid="AnswerList">
      <div>{props.returnedAs.slice(0, moreAs)?.map((answerData, idx)=> <Answer answerData={answerData} key={idx} idx={idx} setAs={props.setAs} questionId={props.questionId}/>)}
      {moreAs <= props.returnedAs.length-1 && <button id="loadAnswersbtn" onClick={handleMoreAsClick}>Load More Answers</button> || props.returnedAs.length > 2 &&  <button onClick={resetAlist} id="loadAnswersbtn">Collapse Answers</button>}
      </div>
    </div>
  );
};