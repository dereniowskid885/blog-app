import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Logo from '../../../assets/icon.svg';

function Header() {
  return (
    <header className='header'>
        <img className='header__logo' src={Logo} alt='Logo' />
        <nav className='header__nav'>
          <ul className='header__links'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>O mnie</Link></li>
            <li><Link to='/offer'>Oferta</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/panel'>Panel Klienta</Link></li>
            <li><Link to='/cart'>Koszyk</Link></li>
          </ul>
        </nav>
    </header>
  )
}

export default Header;