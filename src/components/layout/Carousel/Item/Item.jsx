import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '/src/contexts/CartContext';
import './Item.scss';

function Item({ data, page }) {
    const { setCart, ACTIONS } = useCart();

    const hideDialog = () => {
        setCart({ type: ACTIONS.HIDE_DIALOG });
    };

    return (
        <Link className='item' to={`/${page}/${data.id}`} onClick={hideDialog}>
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
                    { data.amount_with_currency &&
                        <div className='item__price'>{data.amount_with_currency}</div>
                    }
                </div>
            </div>
        </Link>
    );
}

export default Item;