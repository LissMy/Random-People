import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import GenderComp from '../components/GenderComp';
import Person from '../components/Person';
import NotFound from './NotFound';

const Gender = ({ data }) => {
    const { gender } = useParams();
    let newPeople;

    if(data.results === undefined) return <div className='h-screen w-full flex items-center justify-center'>
        <h1 className='font-bold text-3xl'>Loading...</h1>
    </div>

    if( gender === 'male' ) {
        newPeople = data.results.filter(person => person.gender === gender);
        return (
            <GenderComp newPeople={newPeople} />
        )
    } else if(gender === 'female') {       
        newPeople = data.results.filter(person => person.gender === gender);
        return (
            <GenderComp newPeople={newPeople} />
        )
    } else {
        return <NotFound />
    }
};

export default Gender;
