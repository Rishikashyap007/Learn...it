import React from 'react'
import image from '../Our_Works/assets/TENHRMS.png';
import './Section.css'

const Section = () => {
  return (
    <>
      <div className='Section-page-simple'>
        <div className='Section-page-p'>
            <p>Internal HRMS is a tailored software solution designed for streamlined internal human resource management. It efficiently centralizes employee data, automates payroll processes, and enhances communication through user-friendly interfaces. This system optimizes internal operations, ensures data accuracy, and empowers HR professionals for effective workforce management within the organization. it promotes employee engagement and facilitates informed decision-making.</p>
            
            <div className='Section-page-btn'>
                <button><a href='https://hrportal.entrepreneurshipnetwork.net'>Explore More</a></button>
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
