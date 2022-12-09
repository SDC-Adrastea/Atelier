// Quick Link to this API Doc: https://learn-2.galvanize.com/cohorts/3414/blocks/94/content_files/Front%20End%20Capstone/project-atelier/cart.md
let axios = require('axios');

let getOptions = {
  method: 'get',
  url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/cart/`,
  headers: { "Authorization": process.env.API_TOKEN },
};

let postOptions = {
  url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/cart/`,
  headers: { "Authorization": process.env.API_TOKEN },
};

module.exports.CartGet = async () => {
  try {
    let cart = await axios(getOptions);
    return cart;
  }
  catch (err) {
    console.log('err in cart get', err);
  }
}

module.exports.CartPost = async (sku_id) => {
  try {
    let url = postOptions.url;
    let body = { sku_id };
    let headers = postOptions.headers;

    let postToCart = await axios.post(url, body, { headers });
    console.log('postToCart', postToCart);
    return postToCart;
  }
  catch (err) {
    console.log('err in cart post', err);
  }
}