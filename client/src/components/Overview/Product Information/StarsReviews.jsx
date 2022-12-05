import React from 'react';

const StarsReviews = (props) => {
  let ratings = props.ratings
  let thisRating
  let allRatings = 0

  if (ratings !== undefined) {
    let avgStars = (ratings) => {
      let keys = Object.keys(ratings)
      let total = 0
      let all = 0

      for (var i = 0; i < keys.length; i++) {
        let current = keys[i] * 20
        let ratingNum = ratings[keys[i]]
        all += parseInt(ratings[keys[i]])
        total += (current * ratingNum)
      }

      allRatings = all
      all *= 100
      return total / all
    }

    let average = parseFloat(avgStars(ratings) * 100).toFixed(2)
    thisRating = average + '% | Read all ' + allRatings + '  reviews'
  }

  return (
    <div>
      <h4>Overview - Stars & Reviews</h4>
      {thisRating}
    </div>
  )
}

export default StarsReviews;