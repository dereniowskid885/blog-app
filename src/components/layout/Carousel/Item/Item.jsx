import React from 'react';
import { Link } from 'react-router-dom';
import './Item.scss';

function Item({ data, page }) {
    return (
        <Link className='item' to={`/${page}/${data.id}`}>
            <div className='item__container'>
                { data.img &&
                    <img src={data.img} alt='blog carousel item' /> 
                }
                <div className='item__content'>
                    { data.title && 
                        <div className='item__title'>{data.title}</div> 
                    }
                    { data.date && 
                        <div className='item__date'>{data.date}</div> 
                    }
                    { data.price &&
                        <div className='item__price'>{data.price}</div>
                    }
                </div>
            </div>
        </Link>
    )
}

export default Item;