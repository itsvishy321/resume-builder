import { Card } from './UI/Card'
import React from 'react'
import resume1 from "../assets/Resumes/resume1.jpg"
import resume2 from "../assets/Resumes/resume2.png"
import resume3 from "../assets/Resumes/resume3.png"

export const LandingPage = () => {
  return (
    <Card className="">
      <div className='flex justify-center pt-5 mx-5 flex-wrap mt-28 motion-safe:animate-fadeIn'>
        <h1 className='text-text text-8xl font-semibold'>Build a Professional <span className='text-highlight '>Resume.</span></h1>
        <p className='text-text text-2xl pt-5'>&#8223; More Than a Template: Curate Your Journey with Our Dynamic Resume Builder &#8221;</p>
      </div>

      <div className='flex gap-10 mt-44 motion-safe:animate-fadeIn'>
        <div className='w-1/2'>
         <img src={resume1} alt="a sample resume img" />
        </div>
      </div>

    </Card>    
  )
}
