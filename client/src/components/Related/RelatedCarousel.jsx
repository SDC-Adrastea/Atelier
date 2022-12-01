import React, {useState , useEffect} from "react";

const RelatedCarousel = () => {
  const data= [
    {"product" : 1},
    {"product" : 2},
    {"product" : 3},
    {"product" : 4},
    {"product" : 5}
  ]

  const [currentIndex , setCurrentIndex] = useState(0)
  const carouselInfiniteScroll = () => {
    if(currentIndex === data.length-1) {
      return setCurrentIndex(0)
    }
    return setCurrentIndex(currentIndex+1)
  }

  useEffect(() => {
    const interval = setInterval(() => {carouselInfiniteScroll()}, 3000)
    return () => clearInterval(interval)
  })


  return (
    <div className="carousel">
      {data.map((item, index) => {
        return (
          <div key={index}>
            {item.product}
          </div>
        )
      })}
    </div>
  )
}

export default RelatedCarousel;