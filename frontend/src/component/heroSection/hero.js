import React from 'react'
import "./heroSection.css"
import { BsFillStarFill } from "react-icons/bs";
import { Link } from 'react-router-dom';


function Hero() {
  return (
    <div className=''>
        <div className='hero'>
            <div className='cover'>
                <div className='data'>
                    <h1>Discover Our Unique Luxury Jewelry Collection </h1>
                    <p>Immerse yourself in elegance with our exclusive luxury jewelry collection. Each piece is meticulously crafted, combining timeless designs with modern sophistication. </p>
                    <Link to="/newCollection"> <button >Shop Now</button></Link>
                    <h2>Product</h2>
                    <div className='images'>
                        <img src='assets/download2.jfif'/>
                        <img src='assets/download (1).jfif'/>
                        <img src='assets/Aesthetic Jewelry Photography.jfif'/>
                    </div>
                </div>
                <div className='hero-img'>
                    <img src='/assets/hero full.png'/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Hero
