import React from 'react'
import Button from './Button'
import { MdSlowMotionVideo } from "react-icons/md";

const FirstPart = () => {
  return (
    <div className='bg-[rgb(6,5,5)] flex flex-col gap-2 justify-between justify-items-center md:h-[70vh]  w-[100%] text-white relative font-serif '>
        <div className='pt-[60px] px-[10%] font-medium'>
            <div className='flex flex-col justify-center items-center md:p-4 text-left md:text-center gap-5'>
                <h1 className=' text-2xl md:text-3xl  font-semibold sm:leading-[55px] md:w-[80%]'>Discover Limitless Learning with Learn...it</h1>
                <p className=' text-lg md:text-xl font-normal text-gray-400  md:w-[80%] '>Learn...it is a global platform dedicated to nurturing entrepreneurial spirit and facilitating knowledge exchange. By offering online courses, mentorship, and networking opportunities, Learn...it empowers both aspiring and seasoned entrepreneurs. It provides essential resources for skill development, idea incubation, and startup growth, fostering innovation and driving economic development worldwide.</p>
                
            </div>
        </div>
        <div className='sm:h-[130px]  py-1 text-black flex flex-wrap gap-8 bg-[rgb(202,77,255)] px-[10%] justify-center items-center'>
            <div className='flex flex-col  gap-1  border-gray-500 w-[110px] '>
                <h1 className='text-3xl text-black text-bold font-bold'>100%</h1>
                <p className='text-gray-700 text-xl'>Online</p>
            </div>
            <div className='flex flex-col gap-1  border-gray-500 w-[110px] '>
                <h1 className='text-3xl text-black text-bold font-bold'>10k+</h1>
                <p className='text-gray-700 text-xl'>Students</p>
            </div>
            <div className='flex flex-col gap-1  border-gray-500 w-[110px] '>
                <h1 className='text-3xl text-black text-bold font-bold'>150+</h1>
                <p className='text-gray-700 text-xl'>Tutors</p>
            </div>
            <div className='flex flex-col gap-1  border-gray-500 w-[110px] '>
                <h1 className='text-3xl text-black text-bold font-bold'>100+</h1>
                <p className='text-gray-700 text-xl'>Courses</p>
            </div>

        </div>
        {/* <img src={people} alt=""  className='absolute bottom-[30%] right-0 h-[400px] sm:bottom-[-2%] w-[40%] sm:right-[10%]'/> */}
    </div>
  )
}

export default FirstPart