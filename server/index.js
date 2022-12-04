const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
app.use(express.json());
const axios = require("axios");
require('dotenv').config();
const TOKEN = process.env.API_TOKEN;

//TECH DEBT add routers

const DIST_DIR = path.join(__dirname, '../client/dist');
app.use(express.static(DIST_DIR));

// Questions Controllers
const { QuestionsGet } = require("./api-helpers/QuestionsAPI.js");
const { AnswersGet } = require("./api-helpers/QuestionsAPI.js");
const { currentProduct } = require('./api-helpers/ProductsAPI.js');
const { getMetadata } = require('./api-helpers/ReviewsAPI.js');

// Products Funcs
app.get('/qa/questions', function (req, res) {
  QuestionsGet(req.query.productNum, TOKEN)
    .then((data) => { res.send(data) })
    .catch(function (error) {
      res.send(error);
      console.error(error);
    })
})

app.get('/answers', function (req, res) {
  AnswersGet(req.query.questionId, TOKEN)
    .then((data) => { res.send(data) })
    .catch(function (error) {
      res.send(error);
      console.error(error);
    })
})

app.get('/currentProduct', (req, res) => {
  currentProduct(req.query.productNum)
    .then(data => res.send(data))
    .catch(err => {
      res.send(err)
      console.log('err in currentProduct get server-side', err)
    })
})

app.get('/getMetadata', (req, res) => {
  getMetadata(req.query.productNum)
    .then(data => res.send(data))
    .catch(err => {
      res.send(err)
      console.lof('err in getMetadata server-side', err)
    })
})


app.listen(port, () => {
  console.log(`Atelier is listening on port ${port}`)
})