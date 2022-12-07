import React, {useState, useEffect} from "react";
import { Question } from "./Question.jsx";

export const QuestionsList = (props) => {

const [moreQs, addQs] = useState(2);

  const handleMoreQsClick = () => {
    var currentQNum = moreQs;
    currentQNum = currentQNum + 2;
    addQs(currentQNum);
  }

  return (
    <div style={{color: 'blue'}} data-testid="QuestionsList Component">

      {props.returnedQs.filter(data => data.question_body.match(new RegExp(props.searchQ, "u")))
      .slice(0, moreQs)?.map((data, idx)=> (<Question data={data} key={idx} product={props.product}/>)) }
      <button onClick={handleMoreQsClick}>Load More Questions</button>
    </div>
  );
};