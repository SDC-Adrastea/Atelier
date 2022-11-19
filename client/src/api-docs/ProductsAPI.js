// Quick Link to this API Doc: https://learn-2.galvanize.com/cohorts/3414/blocks/94/content_files/Front%20End%20Capstone/project-atelier/products.md
// require('dotenv').config();
let axios = require('axios');

module.exports.ProductsGet = (id) => {
    return axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/`,
      // headers: {"Authorization": token},
      params: {
        "product_id": id
      }
    })
      .then(result => console.log('result from products get', result))
      .catch(err => console.log('err in products get', err));
}