import React from 'react'
import './itemhotels.css'
import { Link } from 'react-router-dom'
const ItemHotels = ({item}) => {
  return (
    <div className='itemHotels'>
        <div className="itemHotelsCol">
            <img src={item.image} alt={item.name} />
        </div>
        <div className="itemHotelsCol">
            <div className="itemHotelDivs">
                    <h2>{item.name}</h2>
            </div>
            <div className="itemHotelsDivs">
                <div className="itemHotelDiv">
                    <span className="rating">9.6</span>
                </div>
                <div className="itemHotelDiv">
                    <span>Wonderful</span>
                    <span>611 Reviews</span>
                </div>
            </div>
        </div>
        <div className="itemHotelsCol">
            <div className="itemHotelsColDiv">
                <h2>${(item.price).toFixed(2)}</h2>
            </div>
            <div className="itemHotelsColDiv"> 
                <span>Free Wi-fi</span>
                <span>Free Parking</span>
                <span>Free Breakfast</span>
            </div>

            <div className="itemHotelsColDiv">
                <Link to={`/hotels/${item._id}`}>
                    <button>View deal</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ItemHotels