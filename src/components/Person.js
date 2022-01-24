import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Person = ({ gender, name, email, login, dob, location, picture }) => {

    const male_style = {
        background: `linear-gradient(to bottom, #1e40af99, #3b82f699), url(${picture.large})`,
        height: '250px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
    
    const female_style = {
        background: `linear-gradient(to bottom, #86198f99, #d946ef99), url(${picture.large})`,
        height: '250px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }

    return (
        <div className='w-[300px] h-[450px] bg-white shadow-md rounded-lg hover:-translate-y-5 hover:shadow-2xl transition-all duration-300 overflow-hidden'>
            <Link key={login.uuid} to={`/notfound`}>
                <div className='w-full h-[250px] bg-no-repeat bg-center' style={ gender === 'male' ? male_style : female_style} />
                <div className='p-5'>
                    <h1 className='text-xl'>Full Name: <span className="font-bold">{name.first} {name.last}</span></h1>
                    <h3 className='my-2'>From: <span className='font-bold'>{location.country}</span></h3>
                </div>
            </Link>
        </div>
    )
}

export default Person
