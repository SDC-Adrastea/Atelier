import React, {useState} from "react";

export const SearchQuestions = (props) => {

  return (
    <div style={{color: 'red'}}>
      <input
      type="text"
      placeholder="Have a question? Search for answers…"
      name="searchQuestions"
      onChange={(event) => {props.setSearch(event.target.value)}}
      minLength={3}

      />
    </div>
  );
};

// onChange={(event) => {props.setSearch(event.target.value)}}
