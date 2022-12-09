import React from 'react';
import './Cart.scss';
import { Link } from 'react-router-dom';
import Breadcrumbs from '/src/components/layout/Breadcrumbs/Breadcrumbs';
import data from '/src/data/Cart.js';
import { CartState } from '/src/contexts/CartContext';
import ShopSteps from '/src/components/layout/ShopSteps/ShopSteps';
import ProductTable from '/src/components/layout/ProductTable/ProductTable';

function Cart() {
    const { state: { cart } } = CartState();

    return (
        <main className='cart'>
            <Breadcrumbs />
            <div className='cart__content'>
                { cart.length > 0 ?
                    <div className='cart__container'>
                        <ShopSteps />
                        <ProductTable products={cart} />
                        <div className='cart__buttons'>
                            <Link to={'/oferta'}>
                                <button className='btn'>{'< Kontynuuj zakupy'}</button>
                            </Link>
                            <button className='btn'>{'Moje dane >'}</button>
                        </div>
                    </div>
                :
                    <div className='cart__empty'>
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
            </div>
        </main>
    )
}

export default Cart;