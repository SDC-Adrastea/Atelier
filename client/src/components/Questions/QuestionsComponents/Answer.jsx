import React, {useState, useEffect} from "react";
import { format, parseISO } from 'date-fns';
import axios from "axios";


export const Answer = (props) => {
  const answer_id = props.answerData.answer_id
  // sentAHelpful is used to toggle state to disallow reclick of helpful button
  // sentReport is used to toggle state to disallow reclick of report button


  const [sentAHelpful, setAHelpful] = useState(false);
  const [sentReport, setReported] = useState(false);

  const handleAHelpfulness = () => {
    if (sentAHelpful === false) {
      axios.put('/answers/helpful', {
        answer_id
      }).then(()=> {
        axios.get('/answers',{
          params:{questionId: props.questionId}
        })
        .then((data)=>{props.setAs(data.data.results)})
        setAHelpful(true);
        })
    }
  }

  // report an answer
  const handleReport = () => {
    if (sentReport === false) {
      axios.put('/answers/report', {
        answer_id
      }).then(()=>{setReported(true)})
    }
  };

  //date fns is used to render date
  return (
    <div className="answer" data-testid="Answer">
      <div className="answerContent">
        <div> <div>{props.idx === 0 && <div id="aBold">A: </div>}{props.answerData.body}</div>
          <div>
          {props.answerData.photos.map(image =>  <img className="answerImages" src={image.url} key ={image.id}/>)}
          </div>
        </div>
      <div className="ansBy">
        <div>by: {props.answerData.answerer_name}, {format(new Date(props.answerData.date), 'LLLL dd, yyyy')} | Helpful? <button id="aHelpfulBtn" onClick={handleAHelpfulness}> Yes</button> &#40;{props.answerData.helpfulness}&#41; | {!sentReport && <button id="reportBtn" onClick={handleReport}>Report</button>} </div> {sentReport && <div style={{ color: 'red' }}>REPORTED</div>}
      </div>
      </div>
    </div>
  );
};


