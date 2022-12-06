import React, {useState} from "react";

export const Answer = (props) => {
  // console.log('here are props for Answer Component', props)
  return (
    <div>
      <p>A: {props.answerData.body}</p>
      <p>by: {props.answerData.answerer_name}</p>
      <p>{props.answerData.date}</p>
      <p>{props.answerData.helpfulness}</p><button>yes?</button>
      <button>Report</button>
      <p>{props.answerData.date}</p>
    </div>
  );
};


