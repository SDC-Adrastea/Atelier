/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from '@testing-library/react'
import { queries } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import React, { useEffect, useState } from "react";

// Questions components
import { Questions } from '../../Questions.jsx';
import { AddAnswerModal } from "../QuestionsComponents/AddAnswerModal.jsx";
import { AddQuestionModal } from "../QuestionsComponents/AddQuestionModal.jsx";
import { Answer } from "../QuestionsComponents/Answer.jsx";
import { AnswerList } from "../QuestionsComponents/AnswerList.jsx";
import { Question } from "../QuestionsComponents/Question.jsx";
import { QuestionsList } from "../QuestionsComponents/QuestionsList.jsx";
import { SearchQuestions } from "../QuestionsComponents/SearchQuestions.jsx";

import { dummyProductData } from "../../../../../dummyTestData/productDummy.js";
import { dummyQuestions, dummyAnswers } from "../../../../../dummyTestData/questionDummy.js";

describe('Unit: Initial rendering of all Questions components', () => {


  test("Renders Questions Widget without crashing", ()=> {
    render(<Questions productNum={71700} product={dummyProductData}/>)
    const QCompElement = screen.getByText('Questions & Answers')
    expect(QCompElement).toBeInTheDocument()
  })

  test("Renders SearchQuestions Widget without crashing", ()=> {
    render(<SearchQuestions setSearch={'test'}/>)
    const SearchCompElement = screen.getByTestId('SearchComponent')
    expect(SearchCompElement).toBeInTheDocument()
  })

  test("Renders QuestionsList Widget without crashing", ()=> {
    render(<QuestionsList productNum={71700} product={dummyProductData} returnedQs={dummyQuestions} searchQ={'test'} setQs={'setQs'} />)
    const QCompElement = screen.getByTestId('QuestionsList')
    expect(QCompElement).toBeInTheDocument()
  })

  test("Renders AnswerList Widget without crashing", ()=> {
    render( <AnswerList questionId={43} setAs={'test'} returnedAs={dummyAnswers}/> )
    const AnswerListCompId = screen.getByTestId('AnswerList')
    expect(AnswerListCompId).toBeInTheDocument()
  })

  test("Renders AddQuestionModal Widget without crashing", ()=> {
    render(<AddQuestionModal setAnsModalIsOpen={true} setAs={'test'} productNum={71700} data={'props.data'} questionId={32} product={dummyProductData}/>)
    const QCompElement = screen.getByText('Ask Your Question')
    expect(QCompElement).toBeInTheDocument()
  })

    test("Renders AddAnswerModal Widget without crashing", ()=> {
    render( <AddAnswerModal setAnsModalIsOpen={true} data={dummyQuestions[0]} product={dummyProductData} questionId={43} />)
    const AddQuestionCompElement = screen.getByText('Submit Your Answer')
    expect(AddQuestionCompElement).toBeInTheDocument()
  })

  test("Renders Question Widget without crashing", ()=> {
    render( <Question data={dummyQuestions[0]} key={1} productNum={71700} product={dummyProductData} />)
    const QCompElement = screen.getByTestId('QuestionComponent')
    expect(QCompElement).toBeInTheDocument()
  })

  test("Renders Answer Widget without crashing", ()=> {
    render( <Answer answerData={dummyAnswers[1]} key={1}  questionId={43}/> )
    const AnswerCompId = screen.getByTestId('Answer')
    expect(AnswerCompId).toBeInTheDocument()
  })

})