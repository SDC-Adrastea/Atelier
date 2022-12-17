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
  },[]);

  const [moreAs, addAs] = useState(2);

  const handleMoreAsClick = () => {
  var currentANum = moreAs;
  currentANum = props.returnedAs.length;
  addAs(currentANum);
}

const resetAlist = () => {
  var currentANum = 2;
  addAs(currentANum);
}

  return (
    <div className="answersList" data-testid="AnswerList">
      {/* <h3>Answers</h3> */}
      {props.returnedAs.slice(0, moreAs)?.map((answerData, idx)=> <Answer answerData={answerData} key={idx} setAs={props.setAs} questionId={props.questionId}/>)}

      {moreAs <= props.returnedAs.length-1 && <button onClick={handleMoreAsClick}>Load More Answers</button> || props.returnedAs.length > 2 &&  <button onClick={resetAlist}>Collapse Answers</button>}


    </div>
  );
};