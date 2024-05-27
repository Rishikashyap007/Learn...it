import React from 'react'
import image from './Ten-ai.png'
import './Section.css'

const Section = () => {
  return (
    <>
      <div className='Section-page-simple'>
        <div className='Section-page-p'>
            <p>Dive into the cutting-edge world of artificial intelligence with our curated selection of ten innovative ai labs. from pioneering research to groundbreaking applications, embark on a transformative exploration of ai's
limitless possibilities.</p>
            
            <div className='Section-page-btn'>
                <button><a href='https://ailabs.entrepreneurshipnetwork.net'>Explore More</a></button>
            </div>
        </div>

        <div className='Section-page-img'>
            <img src={image} alt="" />
        </div>

      </div>
    </>
  )
}

export default Section
