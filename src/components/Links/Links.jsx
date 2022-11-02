import React from 'react';
import { Link } from 'react-router-dom';

function Links(props) {
    return (
        <ul>
            <li>
                <Link to='/' onClick={props.hideMobileNav}>
                    {'Home'}
                </Link>
            </li>
            <li>
                <Link to='/about' onClick={props.hideMobileNav}>
                    {'O mnie'}
                </Link>
            </li>
            <li>
                <Link to='/offer' onClick={props.hideMobileNav}>
                    {'Oferta'}
                </Link>
            </li>
            <li>
                <Link to='/blog' onClick={props.hideMobileNav}>
                    {'Blog'}
                </Link>
            </li>
            <li>
                <Link to='/panel' onClick={props.hideMobileNav}>
                    {'Panel Klienta'}
                </Link>
            </li>
            <li>
                <Link to='/cart' onClick={props.hideMobileNav}>
                    {'Koszyk'}
                </Link>
            </li>
        </ul>
    )
}

export default Links;