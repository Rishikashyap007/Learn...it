import React from 'react'
import Card from './Card'
import { FaRegCircle } from "react-icons/fa6";
import Button from './Button';
const Features = () => {
    const data=[{
        img:<i class="fa-solid fa-clock"></i>,
        heading:'Flexible Time',
        description:'Learn at your own pace with flexible scheduling'
    },
    { 
            img:<i class="fa-solid fa-user-graduate"></i>,
            heading:'Certificate',
            description:'Earn a certificate upon completion of your course'  
    },
    {
            img:<i class="fa-solid fa-house"></i>,
            heading:'Practical Class',
            description:'Gain practical skills with hands-on learning.'  
    },
    {
            img:<i class="fa-solid fa-globe"></i>,
            heading:'Global access',
            description:'Access courses from anywhere in the world.'  
    },
    {
            img:<i class="fa-solid fa-video"></i>,
            heading:'Video Course',
            description:'Discover tailored video courses for you.'  
    },
    {
            img:<i class="fa-solid fa-book-open"></i>,
            heading:'Test series',
            description:'Unlock personalized test series for you.'  
    },
    {
            img:<i class="fa-solid fa-newspaper"></i>,
            heading:'Current Affairs',
            description:'AStay updated with curated current affairs.'  
    },
    {
            img:<i class="fa-solid fa-book"></i>,
            heading:'Books and E-books',
            description:'Explore our library of books and ebooks.'  
    }
]
  return (
    <div className='  '>
        <div className='flex flex-col px-[10%]'>
            <p className=' text-black font-bold text-3xl p-3'>What we provide</p>
            <h1 className='text-black text-2xl'>The amazing features we offer our students</h1>
            <div className='flex gap-10 justify-between px-[3%] mt-8 flex-wrap'>
                {
                    data.map((element,index)=>(
                        <Card element={element} key={index}/>
                    ))
                }
            </div>
            
        </div>
        <div className=' p-8 mt-[80px] flex flex-col sm:flex-row md:justify-between md:items-center gap-10'>
            <div className=' flex flex-col gap-9'>
                <div>
                    <p className=' text-black font-bold text-5xl '>About Us</p>
                    <h1 className=' text-slate-500 text-left font-mono text-xl'>One Platform,plenty benefits</h1>
                </div>
                <ul className='flex flex-col gap-5 text-sm md:text-xl md:font-medium justify-start items-start'>
                    <p className='flex items-center gap-3 '> 
                    <i class="fa-solid fa-arrow-right"></i>Learn...it is a global platform fostering entrepreneurial endeavors.</p>
                    <p className='flex items-center gap-3 '> 
                    <i class="fa-solid fa-arrow-right"></i>We offers online courses, mentorship, and networking opportunities for aspiring and established entrepreneurs.</p>
                    <p className='flex items-center gap-3'>
                    <i class="fa-solid fa-arrow-right"></i> It provides resources for skill development, idea incubation, and startup growth.</p>
                    <p className='flex items-center gap-3'>
                    <i class="fa-solid fa-arrow-right"></i>
                    our's mission is to drive innovation and economic development worldwide through entrepreneurship.</p>
                </ul>
                <Button text={'Learn More'}/>
            </div>

        </div>
        
    </div>
  )
}

export default Features