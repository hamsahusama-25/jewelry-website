import React from 'react'
import "./feature.css"
import { Link } from 'react-router-dom'
function Feature() {
  return (
    <div >
      <div className='container'>
        <div className='feature-collection'>
          <h3>Featured Collections</h3>
        <p>Browse our exquisite Collection of engagement rings designed to capture the essence of overlatin love.</p>
        </div>
        <div className='cards'>
          <div className='card'>
           <div className='image'>
             <img  src='/assets/download2.jfif' />
           </div>
            <h3>Women Section</h3>
            <Link to="/newCollection"> <button>Discover More</button></Link>
          </div>
          <div className='card'>
            <div className='image'>
             <img  src='/assets/men section.jpg' />
           </div>
            <h3>Men Section</h3>
            <Link to="/newCollection"> <button>Discover More</button></Link>
          </div>
          <div className='card'>
            <div className='image'>
             <img  src='/assets/kids section.jpg' />
           </div>
            <h3>Kids Section</h3>
            <Link to="/newCollection"> <button>Discover More</button></Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Feature
