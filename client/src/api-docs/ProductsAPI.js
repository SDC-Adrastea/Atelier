// Quick Link to this API Doc: https://learn-2.galvanize.com/cohorts/3414/blocks/94/content_files/Front%20End%20Capstone/project-atelier/products.md
// require('dotenv').config();
let axios = require('axios');
// const TOKEN = "replace this token";
const TOKEN = "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";

module.exports.ProductsGet = async () => {
  try {
    return await axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/`,
      headers: { "Authorization": TOKEN },
    });
  }
  catch (err) {
    console.log('err in products get', err);
  }
}

let SingleProductGet = async (id) => {
  try {
    return await axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}`,
      headers: { "Authorization": TOKEN },
    })
  }
  catch (err) {
    console.log('err in single product get', err);
  }
}

let Styles = async (id) => {
  try {
    return await axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}/styles`,
      headers: { "Authorization": TOKEN },
    })
  }
  catch (err) {
    console.log('err in styles get', err);
  }
}

let Similar = async (id) => {
  try {
    return await axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}/related`,
      headers: { "Authorization": TOKEN },
    });
  }
  catch (err) {
    console.log('err in similar products get', err);
  }
}

module.exports.currentProduct = async (id) => {
  try {
    let productDetails = {};

    let selectedProduct = await SingleProductGet(id);
    let selectedStyles = await Styles(id);
    let selectedRelated = await Similar(id);

    productDetails.product = selectedProduct;
    productDetails.styles = selectedStyles;
    productDetails.related = selectedRelated;

    return productDetails;
  }
  catch (err) {
    console.log('err in current product get details', err);
  }
}