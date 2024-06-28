import React from 'react'
import Foreign from '../assets/images/lingual.jpg'
import Foreign2 from '../assets/images/ladies.jpg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <section className='about '>
      <div className='grid md:grid-cols-2 gap-8 place-items-center'>
      <div className='border-[3px] border-solid border-teal rounded-lg my-7 m-1'>
         <img src={Foreign} alt='' className='p-4'/>
      </div>
      <div>
        <div className='font-bols sm:text-[1.875rem] text-[1.5rem] mb-5 m-4'>
         We Provide the <br /> best{" "}
         <span className='text-teal-500'>
          Online Courses
         </span>
        </div>
        <p className='text-sm text-gray-500 leading-7 mb-4'>
         Lingual Cafe' Academy, a language school, is deeply committed to the global significance of language education.
         We aim to empower Nigerian students with linguistic proficiency, enabling them to excel internationally.
         Proficiency in a language not only open doors to countless oppurtunities but also fosters cross-cultural understanding
         and collaboration. We understand the challenges Nugerian students face in acquiring language skills and are dedicated to 
         addressing this issue with tailored, high-quality language education. Our experienced instructors, cutting-edge teaching methods,
          and modern resources ensure the highest standards of education.
        </p>
        <Link to='/register'>
        <button className='py-3 px-6 text-sm border border-solid border-sky-400
         rounded-lg font-bold'>
         Register
        </button>
        </Link>
      </div>
      <div>
        <div className='font-bols sm:text-[1.875rem] text-[1.5rem] mb-5 mx-4'>
         OUR APPROACH! <br /> 
        
        </div>
        <p className='text-sm text-gray-500 leading-7 mb-4 mx-4'>
         Lingual cafe' offers reduced course fee to students who show keen interest and maintains a certain level of consistency during their program.
         <br />
         <span>
          Lingual CAFE' PARTY EXPERIENCE
          Students of lingual cafe' who have passed intermediary levels in any of our languages we offer,
          would be invited to participate in the EVOLVE PARTY. The essence of the evolve party is for the students to meet our international partners for friendly chats.
          The main objective of lingual cafe' evolve party is for our students to build
         </span>
        </p>
        <Link to='/register'>
        <button className='py-3 px-6 text-sm border border-solid border-sky-400
         rounded-lg font-bold mx-4'>
         Register
        </button>
        </Link>
      </div>
      <div className='border-[3px] border-solid border-teal rounded-lg my-7 m-1'>
         <img src={Foreign2} alt='' className='p-4'/>
      </div>
      </div>
      
      </section>
    </div>
  )
}

export default About