import React, {useState, useEffect} from "react";
import { AnswerList } from "./AnswerList.jsx";
import { AddAnswer } from "./AddAnswer.jsx"
import axios from "axios";


export const Question = (props) => {

  const question_id = props.data.question_id;
  const [sentHelpful, setHelpful] = useState(false);

  const handleQHelpfulness = () => {
    if (sentHelpful === false) {
      axios.put('/questions/helpful', {
        question_id
      }).then((data)=> {console.log(data.data)
      setHelpful(true)}
      );
    }
  }

  return (
    <div>
      <h4>Q: {props.data.question_body}</h4>
      <p>Helpful? <button onClick={handleQHelpfulness}>Yes</button>{props.data.question_helpfulness}</p>
      <AnswerList questionId={props.data.question_id} />
      <AddAnswer data={props.data} product={props.product} questionId={props.data.question_id} />
    </div>
  );
};