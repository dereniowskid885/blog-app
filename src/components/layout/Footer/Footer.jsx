import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import Logo from '/src/assets/icon.svg';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'

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
                    <div>{'Znajdziesz nas na:'}</div>
                    <ul className='footer__socials'>
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