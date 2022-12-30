const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
app.use(express.json());
const axios = require('axios');
require('dotenv').config();
const fileupload = require("express-fileupload");


const TOKEN = process.env.API_TOKEN;

//TECH DEBT add routers

const DIST_DIR = path.join(__dirname, '../client/dist');
app.use(express.static(DIST_DIR));


// Interaction Controller
const { interactionPost } = require('./api-helpers/InteractionsAPI.js');

// Questions Controllers
const { QuestionsGet } = require('./api-helpers/QuestionsAPI.js');
const { AnswersGet } = require('./api-helpers/QuestionsAPI.js');
const { QuestionPost } = require('./api-helpers/QuestionsAPI.js');
const { AnswerPost } = require('./api-helpers/QuestionsAPI.js');
const { helpfulQuestion } = require('./api-helpers/QuestionsAPI.js');
const { helpfulAnswer } = require("./api-helpers/QuestionsAPI.js");
const { reportAnswer } = require("./api-helpers/QuestionsAPI.js");

// Products Controllers
const { currentProduct, SingleProductGet } = require('./api-helpers/ProductsAPI.js');

// Cart Controllers
const { CartGet, CartPost } = require('./api-helpers/CartAPI.js');

// Ratings and Reviews Controllers
const { getReviews, getMetadata, addReview } = require('./api-helpers/ReviewsAPI.js');

// ==============================================
//       Interaction Route
// ==============================================

app.post('/interactions', function (req, res) {
  interactionPost(req.body, TOKEN)
    .then((data) => { res.send(data) })
    .catch(function (error) {
      res.send(error);
      console.error(error);
    })
})


// ==============================================
//       Questions Routes
// ==============================================

app.get('/qa/questions', function (req, res) {
  QuestionsGet(req.query.productNum, TOKEN)
    .then((data) => { res.send(data) })
    .catch(function (error) {
      res.send(error);
      console.error(error);
    })
})

app.post('/qa/questions', function (req, res) {
  // console.log('here is query', req.body.formInfo)
  QuestionPost(req.body.formInfo, TOKEN)
    .then((data) => { res.send(data) })
    .catch(function (error) {
      res.send(error);
      console.error(error);
    })
});

app.put('/questions/helpful', function (req, res) {
  // console.log('here is query', req.body.question_id)
  helpfulQuestion(req.body.question_id, TOKEN)
    .then((data) => { res.send(data) })
    .catch(function (error) {
      res.send(error);
      console.error(error);
    })
});

app.put('/answers/helpful', function (req, res) {
  console.log('here is query', req.body.answer_id)
  helpfulAnswer(req.body.answer_id, TOKEN)
    .then((data) => { res.send(data) })
    .catch(function (error) {
      res.send(error);
      console.error(error);
    })
});



app.get('/answers', function (req, res) {
  AnswersGet(req.query.questionId, TOKEN)
    .then((data) => { res.send(data) })
    .catch(function (error) {
      res.send(error);
      console.error(error);
    })
})

app.post('/answers', function (req, res) {
  AnswerPost(req.body.formInfo, TOKEN)
    .then((data) => { res.send(data) })
    .catch(function (error) {
      res.send(error);
      console.error('here is answer post', error);
    })
});

app.put('/answers/report', function (req, res) {
  console.log('here is query', req.body.answer_id, TOKEN)
  reportAnswer(req.body.answer_id, TOKEN)
    .then((data) => { res.send(data) })
    .catch(function (error) {
      res.send(error);
      console.error(error);
    })
});


// ==============================================
//       Products Routes
// ==============================================

app.get('/currentProduct', (req, res) => {
  currentProduct(req.query.productNum)
    .then(data => res.send(data))
    .catch(err => {
      res.send(err)
      console.log('err in currentProduct get server-side', err)
    })
})


// ==============================================
//       Cart Routes
// ==============================================

app.get('/cart', (req, res) => {
  CartGet()
    .then(data => res.send(data))
    .catch(err => {
      res.send(err)
      console.log('err in cart get server-side', err)
    })
})

app.post('/cart', (req, res) => {
  CartPost(req.body.sku)
    .then(data => res.send(data))
    .catch(err => {
      res.send(err)
      console.log('err in cart post server-side', err)
    })
})

// ==============================================
//       Ratings and Reviews Routes
// ==============================================

app.get('/reviews', function (req, res) {
  // console.log('GET /reviews');
  var product_id = req.query.product_id;
  var page = req.query.page;
  var count = req.query.count;
  var sort = req.query.sort;

  getReviews(product_id, page, count, sort)
    .then(reviews => res.send(reviews))
    .catch(err => {
      res.send(err);
      console.log('err in getReviews get server-side', err);
    })
});

app.get('/getMetadata', (req, res) => {
  getMetadata(req.query.productNum)
    .then(data => res.send(data))
    .catch(err => {
      res.send(err)
      console.lof('err in getMetadata server-side', err)
    })
})

app.post('/addReview', (req, res) => {
  addReview(req.body)
    .then(data => res.send(data))
    .catch(err => {
      res.send(err)
      console.log('err in addReview server-side', err)
    })
})

// ==============================================
//       Related Routes
// ==============================================

app.get('/relatedProductCardInformation', (req, res) => {
  let formattedResponseData = {}
  currentProduct(req.query.productNum, TOKEN)
    .then((data) => {
      formattedResponseData.product_id = data.product.id
      formattedResponseData.category = data.product.category;
      formattedResponseData.productName = data.product.name
      formattedResponseData.originalPrice = data.styles.results[0].original_price
      formattedResponseData.salePrice = data.styles.results[0].sale_price
      formattedResponseData.imageUrl = data.styles.results[0].photos[0].thumbnail_url
      return getMetadata(req.query.productNum)
    })
    .catch((err) => {
      res.send(err)
      console.log('err in relatedProductCardInformation get server-side', err)
    })
    .then((data) => {
      let ratingData = Object.entries(data.ratings)
      let sum = 0
      let count = 0
      ratingData.forEach(rating => {
        sum += (Number(rating[0]) * Number(rating[1]));
        count += (Number(rating[1]))
      });
      let average = (sum / count)
      formattedResponseData.averageReview = Math.round(average * 100) / 100
    })
    .catch((err) => {
      res.send(err)
      console.log('err in getMetaData get server-side', err)
    })
    .then(() => {
      res.send(formattedResponseData)
    })
}
)

app.get('/comparisonModal', (req, res) => {
  console.log(req.query)
  const datacontainer = []
  currentProduct(req.query.primaryProduct, TOKEN)
    .then((primaryProductData) => {
      let primaryProductFormat = {}
      primaryProductFormat.productName = primaryProductData.product.name
      primaryProductFormat.features = primaryProductData.product.features
      datacontainer.push(primaryProductFormat)
      return currentProduct(req.query.relatedProductCurrent, TOKEN)
    })
    .catch((err) => {
      res.send(err)
      console.log('err in relatedProductCardInformation get server-side', err)
    })
  .then((relatedProductCurrentData) => {
    let relatedProductFormat = {}
    relatedProductFormat.productName = relatedProductCurrentData.product.name
    relatedProductFormat.features = relatedProductCurrentData.product.features
    datacontainer.push(relatedProductFormat)
  })
  .then(() => {
    res.send(datacontainer)
  })

})

app.get('/getMetadata', (req, res) => {
  getMetadata(req.query.productNum)
    .then(data => res.send(data))
    .catch(err => {
      res.send(err)
      console.log('err in getMetadata server-side', err)
    })
})

app.listen(port, () => {
  console.log(`Atelier is listening on port ${port}`)
})
