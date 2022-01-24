import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Landing.css'

const Landing = () => {
    
    return (
        <>
        <Navbar />
        <div className="h-screen w-full font-['Montserrat'] ">
            <div className='flex flex-col items-center md:flex-row h-screen'>
                <div className='my-auto mt-20 md:my-auto md:pl-20'>
                    <h1 className="uppercase font-regular mb-10 leading-10 text-[40px] xl:text-[80px] xl:leading-[5rem]"> Best place to <br /> fetch random <br /> <span className='font-semibold text-[60px] xl:text-[120px]'>identities</span></h1>
                    <h5 className='font-semibold text-xl mt-5'>Random details you will get:</h5>
                    <ul className='list-disc pl-8 mb-10 lg:mb-20'>
                        <li>name</li>
                        <li>email address</li>
                        <li>location</li>
                        <li>profile picture</li>
                        <li>phone number & much more</li>
                    </ul>
                    <div className='hover:-translate-y-3 transition-all duration-300 inline-block'>
                        <Link to='/random-users' className='hover:shadow-lg transition-all bg-gradient-to-r from-violet-500 to-blue-500 text-white rounded-lg font-semibold shadow-md py-4 px-6 mb-5'>Let's get started!</Link>
                    </div>
                </div>
                <div className='justify-self-end flex-1 my-auto md:justify-center'>
                    <img className='people md:rotate-[10deg] w-[80%] md:w-[90%] mx-auto' src="profilepics.png" alt="" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Landing
