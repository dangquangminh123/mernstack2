import React from 'react'
import './top.css'
import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
const Tops = () => {
  return (
    <>
        <Carousel infiniteLoop={true} autoPlay={true} transitionTime={1500} interval={3000} showArrows={false} showIndicators={false}>
            <div className="cImage">
                <Link to='/'>
                    <img src="./assets/images/angkor_wat.jpg" alt="Angokar Wat" />
                    <div className="cImgDesc">
                        <h2 className="cImgTitle">Angokar Wat</h2>
                        <span className="cImgP"> 12 properties</span>
                    </div>
                </Link>
            </div>
            <div className="cImage">
                <img src="./assets/images/boro_boro.jpg" alt="Boro Boro" />
                <div className="cImgDesc">
                    <h2 className="cImgTitle">Boro Boro</h2>
                    <span className="cImgP">21 properties</span>
                </div>
            </div>
            <div className="cImage">
                <img src="./assets/images/niagara_falls.jpg" alt="Niagara Falls" />
                <div className="cImgDesc">
                    <h2 className="cImgTitle">Niagara Falls</h2>
                    <span className="cImgP">5 properties</span>
                </div>
            </div>
            <div className="cImage">
                <img src="./assets/images/taj_mahal.jpg" alt="Taj Mahal" />
                <div className="cImgDesc">
                    <h2 className="cImgTitle">Taj Mahal</h2>
                    <span className="cImgP">3 properties</span>
                </div>
            </div>
            <div className="cImage">
                <img src="./assets/images/petra.jpg" alt="Petra" />
                <div className="cImgDesc">
                    <h2 className="cImgTitle">Petra</h2>
                    <span className="cImgP">10 properties</span>
                </div>
            </div>
        </Carousel>
    </>
  )
}

export default Tops