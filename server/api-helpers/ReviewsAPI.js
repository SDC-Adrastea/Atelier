// Quick Link to this API Doc: https://learn-2.galvanize.com/cohorts/3414/blocks/94/content_files/Front%20End%20Capstone/project-atelier/reviews.md
let axios = require('axios');

let options = {
  method: 'get',
  url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/`,
  headers: { "Authorization": process.env.API_TOKEN },
};

module.exports.getReviews = (product_id, page = 1, count = 5, sort = 'newest') => {
  options.url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/`;
  options.params = {
    product_id: product_id,
    page: page,
    sort: sort,
    count: count
  }
  // console.log(options.params);
  return axios(options)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log('error getting reviews:', err);
    })
}

module.exports.getMetadata = (product_id) => {
  options.url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta/`;
  options.params = {
    product_id: product_id
  }
  return axios(options)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log('error getting reviews:', err);
    })
}

module.exports.addReview = (product_id, rating, summary, body, recommend, name, email, photos, characteristics) => {
  options.url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/`;
  options.method = 'post';

  options.data = {
    product_id: 71699,
    rating: 5,
    summary: 'I have become reborn after these.',
    body: 'They fit soooo good. Really attracting all people with these.',
    recommend: true,
    name: 'Tommy',
    email: 'tommy@tommy.com',
    photos:[],
    characteristics:{
      "240587": 5, // Fit
      "240588": 5, // Length
      "240589": 5, // Comfort
      "240590": 5  // Quality
      // Size
      // Width
    }
  };

  return axios(options)
    .then(response => {
      console.log(`review post successful for ${options.data.product_id}`)
      console.log(response)
      return response.data;
    })
    .catch(err => {
      console.log('error posting reviews:', err);
    })

//   return axios.post(options.url, requestBody, options.headers)
//     .then(response => {
//       console.log(`review post successful for ${requestBody.product_id}`)
//       console.log(response)
//       return response.data;
//     })
//     .catch(err => {
//       console.log('error posting reviews:', err);
//     })
}
