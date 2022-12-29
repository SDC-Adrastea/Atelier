// Quick Link to this API Doc: https://learn-2.galvanize.com/cohorts/3414/blocks/94/content_files/Front%20End%20Capstone/project-atelier/interactions.md

const axios = require('axios');
const TOKEN = process.env.API_TOKEN;

module.exports.interactionPost = async (clickTrackFormData, TOKEN) => {
  console.log('here is form data from client',clickTrackFormData)
  const options = {
    method: "post",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/interactions`,
    headers: { "Authorization": TOKEN },
    data: {
      widget: `${clickTrackFormData.widget}`,
      element: `${clickTrackFormData.element}`,
      time: `${clickTrackFormData.time}`
    }
  }

  try {
    let interactionPost = await axios(options);
    return interactionPost.data;
    console.log('posted');
  }
  catch (err) {
    console.log('error in QuestionPost: ', err);
  }
}