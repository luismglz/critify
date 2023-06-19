import { useState } from "react"

const FeedbackItem = ({item}) => {


  const handleClick = (e) => {

  }


  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </div>
  )
}

export default FeedbackItem