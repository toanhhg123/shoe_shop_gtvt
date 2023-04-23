import React from 'react'
import '../App.css'

const NewsLetter=()=>{
    return(
        <div className="news-letter">
        <h3>NEWS LETTER</h3>
        <p>Get timely updates from your favourite product</p>
        <input type="email" placeholder="Enter your Email"  size="50"/>
        <button>Subscribe</button>
      </div>
    )
}

export default NewsLetter