  // user clicks arrows to update thumbnail and main image selections
  export const handleArrowLeft = () => {
    props.thumbnailChange(leftArrowOption)
  }

  export const handleArrowRight = () => {
    props.thumbnailChange(rightArrowOption)
  }