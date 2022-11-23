import React from 'react';
import './OpinionItem.scss';
import { FaUserCircle } from 'react-icons/fa';

function OpinionItem({ data }) {
    return (
        <div className='opinion-item'>
            <div className='opinion-item__header'>
                <FaUserCircle />
                { data.name && 
                    <h3>{data.name}</h3> 
                }
            </div>
            { data.text && 
                <div className='opinion-item__content'>{data.text}</div> 
            }
        </div>
    )
}

export default OpinionItem;