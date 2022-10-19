import React from 'react';
import './Hero.scss';
import Logo from '/src/assets/icon.svg';

function Hero() {
    return (
        <div className='hero'>
            <div className='hero__content'>
                <img className='hero__logo' src={Logo} alt='Logo' />
                <button className='btn'>{'Skorzystaj z oferty'}</button>
            </div>
            <div className='hero__image'>
                <img src='/src/assets/contact_image.jpg' alt='thoughtful man' />
            </div>
        </div>
    )
}

export default Hero;