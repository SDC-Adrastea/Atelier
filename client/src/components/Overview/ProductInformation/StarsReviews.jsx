import React from 'react'
import { StarRating } from '../../shared/StarRating/StarRating.jsx'

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
        let current = keys[i]
        let ratingNum = ratings[keys[i]]
        all += parseInt(ratingNum)
        total += (current * ratingNum)
      }

      allRatings = all
      return total / all
    }

    let average = Number(parseFloat(avgStars(ratings)).toFixed(2))
    thisRating = <div><StarRating rating={average} /> | <a href ="#reviews-anchor">Read all {allRatings} reviews</a></div>
  }

  return (
    <div>
      {thisRating}
    </div>
  )
}

export default StarsReviews;