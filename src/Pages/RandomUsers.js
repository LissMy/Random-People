import React from 'react'
import Navbar from '../components/Navbar';
import Person from '../components/Person';

const RandomUser = ({ data, loading, getData }) => {
        
    if(data.results === undefined) return <div className='h-screen w-full flex items-center justify-center'>
        <h1 className='font-bold text-3xl'>Loading...</h1>
    </div>


    return (
            <>
            <Navbar />
            <div className='mt-24 w-full flex flex-col justify-center items-center pb-20'>
                <h1 className='font-bold text-3xl capitalize text-center px-5'><span className=' bg-gradient-to-r from-violet-500 to-blue-500 text-transparent bg-clip-text'>20 random people</span> over the World!</h1>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12'>
                    {
                        data.results.map(person => (
                            <Person key={person.login.uuid} {...person} />
                        ))
                    }
                </div>
                <div className='hover:-translate-y-3 transition-all duration-300 inline-block'>
                    <button onClick={getData} className='mt-12 hover:shadow-lg transition-all bg-gradient-to-r from-violet-500 to-blue-500 text-white rounded-lg font-semibold shadow-md py-4 px-6 mb-5'>Refresh people!</button>
                </div>
            </div>
            </>
    )
}

export default RandomUser
