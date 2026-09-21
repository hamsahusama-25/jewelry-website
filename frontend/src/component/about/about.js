import React from 'react'
import "./about.css"

function About() {
  return (
    <div className='section' id='about'>
        <div className='container'>
            <div className='about-section'>
                <div className='data'>
                <p> At <span>Glamora</span> , we believe jewelry is more than an accessory—it's a reflection of your personality, confidence, and unique style. Our collections are thoughtfully designed to combine timeless elegance with modern trends, offering pieces that make every moment feel special.</p>
            </div>
            <div className='image'>
                <img src='/assets/about.jfif'/>
            </div>
            <div className='data'>
                <p>Crafted with premium materials and exceptional attention to detail, each item is made to celebrate life's meaningful occasions, from everyday elegance to unforgettable milestones. Whether you're searching for the perfect gift or a statement piece for yourself, we're here to help you shine with confidence.</p>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default About
