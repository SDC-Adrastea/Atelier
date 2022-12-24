import React, {useState} from "react";

export const SearchQuestions = (props) => {
// note line 13 "event.target.value.length > 2" this allows the search to only be fired after 3 chars entered

  return (
    <div data-testid="SearchComponent">
      <input
      type="text"
      placeholder="Have a question? Search for answers…"
      id="searchQuestions"
      name="searchQuestions"
      onChange={(event) => {
        if (event.target.value.length > 2){
          props.setSearch(event.target.value)} else {
            props.setSearch('');
          }
        }}
      />
    </div>
  );
};

