import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import Logo from '../../../assets/icon.svg';

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer__container'>
            <img className='footer__logo' src={Logo} alt='Logo' />
            <div className='footer__content'>
                <div className='footer__column'>
                    <ul>
                        <li><Link to='/about'>O mnie</Link></li>
                        <li><Link to='/offer'>Oferta</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/contact'>Kontakt</Link></li>
                    </ul>
                </div>
                <div className='footer__column'>
                    <ul>
                        <li><Link to='/terms-and-conditions'>Regulamin</Link></li>
                        <li><Link to='/payment-methods'>Sposoby płatności</Link></li>
                        <li><Link to='/privacy-policy'>Polityka Prywatności</Link></li>
                        <li><Link to='/cookies-policy'>Polityka cookies</Link></li>
                    </ul>
                </div>
                <div className='footer__column'>
                    {'Znajdziesz nas na:'}<br />
                    <ul>
                        <li>FB</li>
                        <li>INSTA</li>
                        <li>YT</li>
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