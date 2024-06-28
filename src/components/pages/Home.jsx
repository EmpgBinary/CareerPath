

import React from 'react';
import Ladies from '../assets/images/group2.jpg';
import China from '../assets/images/IMG_7316.jpg';
import Log1 from '../assets/images/china.png';
import Log2 from '../assets/images/us.png';
import Log3 from '../assets/images/spain.png';
import Log4 from '../assets/images/uk.png';
import Log5 from '../assets/images/german.png';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-cover bg-center h-96 relative" style={{ backgroundImage: `url(${Ladies})` }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-75 p-6 border-2 h-60 border-white rounded w-3/5 md:w-1/2 lg:w-1/3">
          <h1 className="text-2xl font-bold text-center">
            Welcome to Lingual Cafe'<br />
            Your best school of languages.<br />
            Apply now
          </h1>
          <p className="mt-2 text-center">Application is open for our interested eligible candidates</p>
        </div>
      </div>
    </div>
  );
};

export const Space = () => {
  return (
    <div className="bg-slate-200 h-5">
      {/* <h2 className="text-black text-xl font-bold text-center">Where languages come alive!</h2> */}
    </div>
  );
};

export const Learn = () => {
  return (
    <div>
      <section className="learn">
        <div className="grid md:grid-cols-2 gap-8 place-items-center">
          <div>
            <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5 m-4">
              Unlock the power of language<br />Unlock the world! <span className="text-teal-500"></span>
            </div>
            <p className="text-sm text-gray-500 leading-7 mb-4">
             At LINGUAL CAFE', we believe that language is the key to unlocking new oppurtunities, cultures, and connections.
             Our mission is to provide high-quality language education that empowers students to achieve their goals and succeed 
             in an increasingly globalized world.
            </p>
            <Link to='/about'>
            <button className="py-3 px-6 text-sm border border-solid border-sky-400 rounded-lg font-bold">
              About
              
            </button>
            </Link>
            
          </div>
          <div className="border-[3px] border-solid border-teal rounded-lg my-7 m-1">
            <img src={China} alt="China" className="p-4" />
          </div>
        </div>
      </section>
    </div>
  );
};



export const Online = () => {
  return (
    <section className='online'>
      
        <div className='border-[1px] border-solid border-teal-50 rounded-lg my-7 m-1 p-4'>
          <div className='grid md:grid-cols-1 lg:grid-cols-5 gap-8 justify-center mx-7 m-6'>
            <img src={Log1} alt="log" className='w-full lg:w-1/2' />
            <img src={Log2} alt="log" className='w-full lg:w-1/2' />
            <img src={Log3} alt="log" className='w-full lg:w-1/2' />
            <img src={Log4} alt="log" className='w-full lg:w-1/2' />
            <img src={Log5} alt="log" className='w-full lg:w-1/2' />
          </div>
        </div>
      
    </section>
  );
};






export default Home;



