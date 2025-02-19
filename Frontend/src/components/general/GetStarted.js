import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';


const GetStarted = () => {
  return (
    <header className='w-full py-52 xl:px-0 px-5'>
        <div className='max-w-6xl my-0 mx-auto text-center flex flex-col items-center'>
            <h1 className='arima-heading font-semibold xl:text-6xl lg:text-5xl text-4xl not-italic mb-8 overflow-hidden color1'>
              Best Website Solution For <br/> Content Creators
            </h1>
            <p className='font-medium lg:text-2xl text-xl mb-16'>Create your website and showcase your talents with ease</p>
            <Link to="/signup"><Button name="Get Started"/></Link>
        </div>
    </header>
  );
}

export default GetStarted;