import React from 'react';
import Navbar from './Navbar';
import Person from './Person';

const GenderComp = ({ newPeople }) => {
    console.log(newPeople)
    return (
            <>
            <Navbar />
            <div className="mt-24 w-full flex flex-col justify-center items-center pb-20">
            <h1 className='font-bold text-3xl capitalize'>Out of 20 people that we collected, you got <span className='font-bold bg-gradient-to-r from-violet-500 to-blue-500 text-transparent bg-clip-text'>{newPeople.length} { newPeople[0].gender === 'male' ? 'males' : 'females' }</span></h1>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12'>
            {newPeople.map(person=> (
                <div>
                    <Person {...person} />
                </div>
            ))}
            </div>
            </div>
        </>
        )
};

export default GenderComp;
