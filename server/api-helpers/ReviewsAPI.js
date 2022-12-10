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

// module.exports.addReview = (product_id, rating, summary, body, recommend, name, email, photos, characteristics) => {
//   options.url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/`;
//   options.method = 'get';
//   options.data = {
//     product_id: 71697,
//     rating: 5,
//     summary: "Best purchase ever!",
//     body: "Best purchase ever! Best purchase ever! Best purchase ever! Best purchase ever! Best purchase ever! Best purchase ever! Best purchase ever! Best purchase ever! Best purchase ever! Best purchase ever!",
//     recommend: true,
//     name: "twicestan",
//     email: "twicestan@twicefanclub.org",
//     photos: [],
//     characteristics: {
//         "14": 5,
//         "15": 5
//     }
//   }

//   return axios(options)
//     .then(response => {
//       console.log('review post success')
//       console.log(response)
//       return response.data;
//     })
//     .catch(err => {
//       console.log('error posting reviews:', err);
//     })
// }
