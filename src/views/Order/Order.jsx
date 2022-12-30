import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '/src/contexts/CartContext';
import './Order.scss';

function Order() {
    const token = localStorage.getItem('authToken');
    const { id } = useParams();
    const { state: { cart } } = useCart();

    return (
        <main className='order'>
            { token ?
                <div className='order__content'>
                    <h1>{`Zamówienie ${id}`}</h1>
                    <div className='order__products'>
                        <h2>{'Produkty'}</h2>
                        <ul>
                            {cart.map(product => {
                                return (
                                    <li key={product.id}>
                                        <div className='order__product-img'>
                                            <img src={product.img} alt='product' />
                                        </div>
                                        <div className='order__product-info'>
                                            <h4>{product.title}</h4>
                                            <h4>{product.price}</h4>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className='order__buttons'>
                        <Link to={'/panel-klienta'}>
                            <button className='btn'>
                                {'Panel klienta'}
                            </button>
                        </Link>
                    </div>
                </div>
            :
                <div className='order__error'>
                    <h2>{'Najpierw musisz się zalogować !'}</h2>
                    <Link to={'/panel-klienta'}>
                        <button className='btn'>
                            {'Logowanie'}
                        </button>
                    </Link>
                </div>
            }
        </main>
    );
}

export default Order;