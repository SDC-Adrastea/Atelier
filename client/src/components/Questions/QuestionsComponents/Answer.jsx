import React, {useState} from "react";
import { format, parseISO } from 'date-fns';


export const Answer = (props) => {
  // console.log('here are props for Answer Component', props)
  return (
    <div>
      <p>A: {props.answerData.body}</p>
      <p>by: {props.answerData.answerer_name}</p>
      <p>Helpful? <button>yes?</button> {props.answerData.helpfulness}</p>
      <button>Report</button>
      <p>
      {/* {format ( new Date(), 'do MMMM Y')} */}
      {format(new Date(props.answerData.date), 'LLLL dd, yyyy')}
</p>

    </div>
  );
};


