import React from 'react'

function Feedback(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h6>{props.comment}</h6>
    </div>
  )
}

export default Feedback;