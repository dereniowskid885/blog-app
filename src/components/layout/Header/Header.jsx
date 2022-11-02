import React from 'react';
import './Header.scss';
import Logo from '/src/assets/logo.jpg';
import Links from '../../Links/Links';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import MobileOverlay from '../MobileOverlay/MobileOverlay';

function Header() {
    const [ isMobileNav, setMobileNav ] = useState(false);

    const hideMobileNav = () => {
        setMobileNav(false);
    };

    return (
        <header className='header'>
            <img className='header__logo' src={Logo} alt='Logo' />
            <nav className='header__nav'>
                <Links />
            </nav>
            <nav className='header__mobile-nav'>
                <AiOutlineMenu className={`${isMobileNav ? 'hidden' : ''}`} onClick={() => { setMobileNav(true) }} />
                <div className={`header__mobile-links ${isMobileNav ? '' : 'hidden'}`}>
                    <AiOutlineClose className={`${isMobileNav ? '' : 'hidden'}`} onClick={() => { setMobileNav(false) }} />
                    <Links hideMobileNav={hideMobileNav} />
                </div>
            </nav>
            { isMobileNav && <MobileOverlay hideMobileNav={hideMobileNav} /> }
        </header>
    )
}

export default Header;