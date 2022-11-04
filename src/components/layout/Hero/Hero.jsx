import React from 'react';
import './Hero.scss';

function Hero(props) {
    return (
        <div className='hero'>
            <div className='hero__content'>
                { props.title && <h1 className='hero__title'>{props.title}</h1> }
                { props.subtitle && <h2 className='hero__sub-title'>{props.subtitle}</h2> }
                { props.logo && <img className='hero__logo' src={props.logo} alt='Logo' /> }
                { props.buttonText && <button className='btn'>{props.buttonText}</button> }
            </div>
            { props.img && 
                <div className='hero__image'>
                    <img src={props.img} alt='hero' />
                </div>
            }
        </div>
    )
}

export default Hero;