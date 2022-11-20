// Quick Link to this API Doc: https://learn-2.galvanize.com/cohorts/3414/blocks/94/content_files/Front%20End%20Capstone/project-atelier/products.md
// require('dotenv').config();
let axios = require('axios');

module.exports.ProductsGet = () => {
  return axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/`,
    headers: { "Authorization": TOKEN },
  })
    .then(result => { return result; })
    .catch(err => console.log('err in products get', err));
}

module.exports.SingleProductGet = (id) => {
  return axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}`,
    headers: { "Authorization": TOKEN },
  })
    .then(result => { return result; })
    .catch(err => console.log('err in products get', err));
}

module.exports.Styles = (id) => {
  return axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}/styles`,
    headers: { "Authorization": TOKEN },
  })
    .then(result => { return result; })
    .catch(err => console.log('err in products get', err));
}

module.exports.Similar = (id) => {
  return axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}/related`,
    headers: { "Authorization": TOKEN },
  })
    .then(result => { return result; })
    .catch(err => console.log('err in products get', err));
}