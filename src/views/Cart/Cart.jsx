import React from 'react';
import './Cart.scss';
import { Link } from 'react-router-dom';
import Breadcrumbs from '/src/components/layout/Breadcrumbs/Breadcrumbs';
import data from '/src/data/Cart.js';
import { useCart } from '/src/contexts/CartContext';
import ShopSteps from '/src/components/layout/ShopSteps/ShopSteps';
import ProductTable from '/src/components/layout/ProductTable/ProductTable';

function Cart() {
    const { state: { cart } } = useCart();
    const isCartFilled = cart.length > 0;

    return (
        <main className='cart'>
            <Breadcrumbs />
            <div className='cart__content'>
                { isCartFilled ?
                    <div className='cart__container'>
                        <ShopSteps />
                        <ProductTable products={cart} />
                        <div className='cart__buttons'>
                            <Link to={'/oferta'}>
                                <button className='btn'>
                                    {data.cart.buttonTextBack}
                                </button>
                            </Link>
                            <button className='btn'>
                                {data.cart.buttonTextNext}
                            </button>
                        </div>
                    </div>
                :
                    <div className='cart__empty'>
                        <h2>{data.empty.title}</h2>
                        <Link to={'/oferta'}>
                            <button className='btn'>
                                {data.empty.buttonText}
                            </button>
                        </Link>
                    </div>
                }
            </div>
        </main>
    );
}

export default Cart;