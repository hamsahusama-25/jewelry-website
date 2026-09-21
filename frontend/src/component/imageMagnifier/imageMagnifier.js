import React, { useState } from 'react'
import './imageMagnifier.css'

function ImageMagnifier({ src }) {
  console.log(src)
  const [showMagnifier, setShowMagnifier] = useState(false)
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })

  function handleMove(e) {
    const { top, left, height, width } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const currentx = (x / width) * 100;
    const currenty = (y / height) * 100;

    setPosition({ x: currentx, y: currenty })


  }
  return (
    <div className='magnifier-container' onMouseEnter={() => setShowMagnifier(true)} onMouseLeave={() => setShowMagnifier(false)} onMouseMove={handleMove}>
      <img className='magnifier-image' src={src} alt='product' />
      {showMagnifier === true && <div className='magnifier'
        style={{
          top: `${position.y}%`,
          left: `${position.x}%`,
              transform: "translate(-50%, -50%)",

          backgroundImage: `url("${encodeURI(src)}")`,
          backgroundPosition: `${position.x}% ${position.y}%`

        }}></div>}
    </div>
  )
}

export default ImageMagnifier
