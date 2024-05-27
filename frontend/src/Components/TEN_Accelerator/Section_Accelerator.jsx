import React from 'react'
import './Section.css'
import image from '../Our_Works/assets/Accelerator.png'

const Section = () => {
  return (
    <>
      <div className='Section-page-simple'>
        <div className='Section-page-p'>
            <p>The TEN Accelerator website is a dynamic platform designed to catalyze growth and innovation. It serves as a hub for entrepreneurs, providing resources, mentorship opportunities, and networking avenues. Through a user-friendly interface, it facilitates collaboration, knowledge-sharing, and accelerates the development of startups. The Accelerator website aims to fuel entrepreneurial success by offering a centralized space for essential tools and connections.</p>
            
            <div className='Section-page-btn'>
                <button><a href='https://tenaccelerator.wixsite.com/ten-accelerator'>Explore More</a></button>
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
