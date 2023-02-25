import React, { useState } from 'react'
import './Navbar.css'

export const Navbar = () => {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(current => !current);
    };


    return (
        <>
            <header>
                <nav className='navbar'>

                    <a className='nav-branding' href="/"><img src="https://www.the-aiff.com/assets/images/logo_blue.png" alt="" /></a>

                    <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
                        <li className='nav-item'>
                            <a className='nav-link' href="/">HOME</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="/">NEWS</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="/">SQUAD</a
                            ></li>
                        <li className='nav-item'>
                            <a className='nav-link' href="/">GALLERY</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="/">FACULTY</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="/">APPLY</a>
                        </li>
                    </ul>

                    <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={handleClick}>
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </div>
                </nav>
            </header>
        </>
    )
}
