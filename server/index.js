const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
app.use(express.json());
const axios = require("axios");
require('dotenv').config();

//TECH DEBT add routers

const DIST_DIR = path.join(__dirname, '../client/dist');
app.use(express.static(DIST_DIR));

// Questions Controllers
const { QuestionsGet } = require("./api-helpers/QuestionsAPI.js");
const { AnswersGet } = require("./api-helpers/QuestionsAPI.js");

// Products Funcs


app.get('/qa/questions',function (req, res) {
  QuestionsGet(req.query.productNum, TOKEN)
    .then((data)=>{res.send(data)})
  .catch(function (error) {
    res.send(error);
    console.error(error);
  })
});

app.get('/answers',function (req, res) {
  AnswersGet(req.query.questionId, TOKEN)
    .then((data)=>{res.send(data)})
  .catch(function (error) {
    res.send(error);
    console.error(error);
  })
});


app.listen(port, () => {
  console.log(`Atelier is listening on port ${port}`)
})