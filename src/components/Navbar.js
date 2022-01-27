import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => window.onscroll = null;
    }


    return (
        <div className={isScrolled ? 'navbar scrolled' : 'navbar'}> 
                <div className='font-bold text-3xl'>
                    Random
                </div>
                <div className='space-x-5'>
                    <Link to='/'>Home</Link>
                    <Link to='/random-users'>Random Users</Link>
                    <Link to='/female'>Female</Link>
                    <Link to='/male'>Male</Link>
                </div>
        </div>
    )
}

export default Navbar;
