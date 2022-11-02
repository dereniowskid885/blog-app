import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import Logo from '/src/assets/logo.jpg';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useState } from 'react';

function Footer() {
    const [ clickedDropdownId, saveClickedDropdownId ] = useState('');

    const isDropdownClicked = {
        first: clickedDropdownId === 'dropdown-1',
        second: clickedDropdownId === 'dropdown-2',
        third: clickedDropdownId === 'dropdown-3'
    };

    const expandDropdown = (e) => {
        const dropdownId = e.target.nextSibling.id;

        if (clickedDropdownId === dropdownId) {
            saveClickedDropdownId('');
        } else {
            saveClickedDropdownId(dropdownId);
        }
    };

    return (
        <footer className='footer'>
            <div className='footer__container'>
                <img className='footer__logo' src={Logo} alt='Logo' />
                <div className='footer__content'>
                    <div className='footer__column'>
                        <div className='footer__dropdown' onClick={expandDropdown}>
                            {'Podstrony'}
                            <RiArrowDropDownLine className={`${isDropdownClicked.first ? 'animate' : ''}`} />
                        </div>
                        <ul id='dropdown-1' className={`${isDropdownClicked.first ? '' : 'hidden'}`}>
                            <li><Link to='/about'>O mnie</Link></li>
                            <li><Link to='/offer'>Oferta</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/contact'>Kontakt</Link></li>
                        </ul>
                    </div>
                    <div className='footer__column'>
                        <div className='footer__dropdown' onClick={expandDropdown}>  
                            {'Regulaminy'}
                            <RiArrowDropDownLine className={`${isDropdownClicked.second ? 'animate' : ''}`} />
                        </div>
                        <ul id='dropdown-2' className={`${isDropdownClicked.second ? '' : 'hidden'}`}>
                            <li><Link to='/terms-and-conditions'>Regulamin</Link></li>
                            <li><Link to='/payment-methods'>Sposoby płatności</Link></li>
                            <li><Link to='/privacy-policy'>Polityka prywatności</Link></li>
                            <li><Link to='/cookies-policy'>Polityka cookies</Link></li>
                        </ul>
                    </div>
                    <div className='footer__column'>
                        <div className='footer__dropdown' onClick={expandDropdown}>
                            {'Portale społecznościowe'}
                            <RiArrowDropDownLine className={`${isDropdownClicked.third ? 'animate' : ''}`} />
                        </div>
                        <ul id='dropdown-3' className={`footer__socials ${isDropdownClicked.third ? '' : 'hidden'}`}>
                            <li>
                                <a href='https://facebook.com' target='_blank'><FaFacebookSquare /></a>
                            </li>
                            <li>
                                <a href='https://instagram.com' target='_blank'><FaInstagramSquare /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer__copyright'>
                {'All rights reserved kolarstwo od kuchni '} &copy; {' 2022'}
            </div>
        </footer>
    )
}

export default Footer;