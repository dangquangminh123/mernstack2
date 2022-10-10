import React from 'react'
import './subscribe.css'
const Subscribe = () => {
  return (
    <div className='subscribe'>
        <div className='subscribeRow'>
            <h2 className="subscribeTitle">Save Time, save money</h2>
            <p className="subscribeDesc">Sign up and we'll send the best deals to you</p>
            <div className="subscribeInput">
                <input type="text" placeholder='Your E-mail' />
                <button>Subcribe</button>
            </div>
        </div>
    </div>
  )
}

export default Subscribe