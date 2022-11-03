import React from 'react';
import './OpinionItem.scss';
import { FaUserCircle } from 'react-icons/fa';

function OpinionItem(props) {
    return (
        <div className='opinion-item'>
            <div className='opinion-item__header'>
                <FaUserCircle />
                <h3>{props.name}</h3>
            </div>
            <div className='opinion-item__content'>
                {props.text}
            </div>
        </div>
    )
}

export default OpinionItem;