import React, {useState, useEffect} from "react";
import { Question } from "./Question.jsx";

export const QuestionsList = (props) => {

// moreQs increases questions by a count of 2 to the rendered list of questions
const [moreQs, addQs] = useState(2);

  const handleMoreQsClick = () => {
    var currentQNum = moreQs;
    currentQNum = currentQNum + 2;
    addQs(currentQNum);
  }


  // note line 21 .filter is used to search through returnedQs with regex and the prop of searchQ
  // the list is then mapped with Question Component to create the viewed Questions
  return (
    <div data-testid="QuestionsList Component" className="QuestionsList" data-testid="QuestionsList">

      {props.returnedQs.filter(data => data.question_body.match(new RegExp(props.searchQ, "u")))
      .slice(0, moreQs)
      ?.map((data, idx)=> (<Question data={data} key={idx} productNum={props.productNum} product={props.product} setQs={props.setQs}/>)) }
      <button onClick={handleMoreQsClick} id="moreQuestionsBtn">More Answered Questions</button>
      <button onClick={() => props.setModalIsOpen(true)} id="moreQuestionsBtn">
        Add Question
      </button>
    </div>
  );
};