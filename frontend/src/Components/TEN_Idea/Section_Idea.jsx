import React from 'react'
import './Section.css'
import image from '../Our_Works/assets/Ten_Idea.png'

const Section = () => {
  return (
    <>
      <div className='Section-page-simple'>
        <div className='Section-page-p'>
            <p>The Idea Engine website is a creative platform designed to spark and develop innovative ideas. It features collaborative tools and resources that facilitate brainstorming and idea-sharing among users. With an intuitive interface, the site encourages cross-disciplinary collaboration, helping individuals refine and bring their concepts to fruition. Idea Engine serves as a dynamic hub for creativity, empowering users to turn their ideas into actionable projects.</p>
            
            <div className='Section-page-btn'>
                <button><a href='https://ideaengine.entrepreneurshipnetwork.net'>Explore More</a></button>
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
