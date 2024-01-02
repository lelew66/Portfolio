import React from 'react'
const QuoteCard = (props) => {
  return (
  <div className="quote__card">
    <h3 className='quote'>{props.text}</h3>
    <p className='quote__author'>-{props.author}</p>
  </div>

  )
}

export default QuoteCard