import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
            <div className="h-screen w-full flex items-center justify-center bg-pattern bg-no-repeat bg-cover overflow-hidden">
                <div className='w-[400px] h-auto py-20 md:w-[500px] md:h-[600px] text-center bg-white rounded-lg overflow-hidden shadow-lg flex items-center justify-center flex-col space-y-7'>
                    <img className='w-1/2 -mt-7' src="404.png" alt="" />
                    <h1 className='text-3xl'>Oops... We don't <br /> <span className='font-bold'>have this page</span></h1>
                    <p>You are lost but don't worry! You can <br /> easily go back to the homepage.</p>
                    <Link to='/' className='bg-gradient-to-r from-violet-500 to-blue-500 py-4 px-5 hover: text-md text-white font-bold mt-12 rounded-md shadow-sm shadow-blue-500 hover:shadow-md hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-2'>Go back to <span className='underlined'>Homepage</span></Link>
                </div>
            </div>
    )
}

export default NotFound
