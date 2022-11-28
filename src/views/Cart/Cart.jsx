import React from 'react';
import './Cart.scss';
import { Link } from 'react-router-dom';
import Breadcrumbs from '/src/components/layout/Breadcrumbs/Breadcrumbs';
import data from '/src/data/Cart.js';

function Cart() {
    return (
        <main className='cart'>
            <Breadcrumbs />
            { data.empty &&
                <div className='cart__content'>
                    { data.empty.title &&
                        <h2>{data.empty.title}</h2>
                    }
                    { data.empty.buttonText &&
                        <Link to={'/oferta'}>
                            <button className='btn'>{data.empty.buttonText}</button>
                        </Link>
                    }
                </div>
            }
        </main>
    )
}

export default Cart;