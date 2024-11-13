import React, {useState, useEffect} from 'react'
import './slider.scss'

const Slider = ({images}) => {
  const [imageIndex, setImageIndex] = useState(null)

  const changeSlide = (direction) => {
    if (direction === 'prev') {
      if (imageIndex === 0) setImageIndex(images.length-1)
      else setImageIndex(imageIndex-1) 
    } 
    else {
      if (imageIndex === images.length-1) setImageIndex(0)
      else setImageIndex(imageIndex+1)
    }
  }

  return (
    <div className='slider'>
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow">
            <img src="/arrow.png" alt="" onClick={() => changeSlide('prev')} />
          </div>
          <div className="imageContainer">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow">
            <img src="/arrow.png" className='right' alt="" onClick={() => changeSlide('next')} />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>X</div>
        </div>
      )}
        
      <div className="bigImage">
          <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
          {images.slice(1).map((image, idx) => (
              <img src={image} alt='' key={idx} onClick={() => setImageIndex(idx+1)} />
          ))}
      </div>
    </div>
  ) 
}

export default Slider