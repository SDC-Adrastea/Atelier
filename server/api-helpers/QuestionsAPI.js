// Quick Link to this API Doc: https://learn-2.galvanize.com/cohorts/3414/blocks/94/content_files/Front%20End%20Capstone/project-atelier/qa.md
const axios = require('axios');
const TOKEN = process.env.API_TOKEN;


module.exports.QuestionsGet = async (productId, token) => {
  const options = {
    method: "get",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions`,
    headers: { "Authorization": token },
    params: {
      product_id: productId,
      page: 1,
      count: 100
    }
  }

  try {
    let Questions = await axios(options);
    return Questions.data;
  }
  catch (err) {
    console.log('error in QuestionsGet', err);
  }
}

module.exports.AnswersGet = async (questionId, token) => {
  const options = {
    method: "get",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${questionId}/answers`,
    headers: { "Authorization": token },
    params: {
      question_id: questionId,
      page: 1,
      count: 100
    }
  }
  try {
    let Answers = await axios(options);
    return Answers.data;
  }
  catch (err) {
    console.log('error in AnswersGet: ', err);
  }
}

module.exports.QuestionPost = async (productId, questionFormData) => {
  // tech debt object literals will need to be swapped with values from questionFormData once form is built
  const options = {
    method: "post",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions`,
    headers: { "Authorization": TOKEN },
    data: {
      body: 'hello',
      name: 'user32',
      email: 'joeBob@aol.com',
      product_id: 71697
    }
  }

  try {
    let questionPost = await axios(options);
    return questionPost.data;
    console.log('posted');
  }
  catch (err) {
    console.log('error in QuestionPost: ', err);
  }
}

module.exports.AnswerPost = async (questionId, answerFormData) => {
  // tech debt object literals will need to be swapped with values from answerFormData once form is built
  questionId = 642681;
  const options = {
    method: "post",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${questionId}/answers`,
    headers: { "Authorization": TOKEN },
    data: {
      body: 'Here is the answer',
      name: 'user32',
      email: 'joeBob32@aol.com',
      photos: []
    }
  }

  try {
    let questionPost = await axios(options);
    return questionPost.data;
  }
  catch (err) {
    console.log('error in QuestionPost: ', err);
  }
}

module.exports.helpfulQuestion = async (questionId) => {
  const options = {
    method: "put",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${questionId}/helpful`,
    headers: { "Authorization": TOKEN },
    params: {
      question_id: questionId
    }
  }

  try {
    let hQuestion = await axios(options);
    return hQuestion;
  }
  catch (err) {
    console.log('error in helpful question put: ', err);
  }
}

module.exports.reportQuestion = async (questionId) => {
  const options = {
    method: "put",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${questionId}/report`,
    headers: { "Authorization": TOKEN },
    params: {
      question_id: questionId
    }
  }

  try {
    let reportQuestion = await axios(options);
    return reportQuestion;
  }
  catch (err) {
    console.log('error in report question put: ', err);
  }
}

module.exports.helpfulAnswer = async (answerId) => {
  const options = {
    method: "put",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/${answerId}/helpful`,
    headers: { "Authorization": TOKEN },
    params: {
      answer_id: answerId
    }
  }

  try {
    let hAnswer = await axios(options);
    return hAnswer;
  }
  catch (err) {
    console.log('error in helpful answer put: ', err);
  }
}

module.exports.reportAnswer = async (answerId) => {
  const options = {
    method: "put",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/${answerId}/report`,
    headers: { "Authorization": TOKEN },
    params: {
      answer_id: answerId
    }
  }

  try {
    let rAnswer = await axios(options);
    return rAnswer;
  }
  catch (err) {
    console.log('error in report answer put: ', err);
  }
}