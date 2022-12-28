import React from 'react';
import { useCart } from '/src/contexts/CartContext';
import './Summary.scss';

function Summary({ next, back, order }) {
    const { 
        state: {
            cart,
            orderSum
        },
        setCart, 
        ACTIONS
    } = useCart();

    const finishOrder = () => {
        setCart({ type: ACTIONS.CLEAR_CART });
        // todo api call


        next();
    };

    console.log(cart, order);

    return (
        <>
            <div className='summary'>
                <div className='summary__products'>
                    <h2>{'Twoje zamówienie'}</h2>
                    <ul>
                        {cart.map(product => {
                            return (
                                <li key={product.id}>
                                    <div className='summary__product-img'>
                                        <img src={product.img} alt='product' />
                                    </div>
                                    <div className='summary__product-info'>
                                        <h4>{product.title}</h4>
                                        <h4>{product.price}</h4>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className='summary__order'>
                    <h2>{'Szczegóły'}</h2>
                    <div className='summary__info'>
                        <div className='summary__column'>
                            <h4>{'Dane'}</h4>
                            <p>{order.first_and_last_name}</p>
                            <p>{order.street}</p>
                            <p>{order.postal_code}{' '}{order.city}</p>
                            <p>{order.email}</p>
                            <p>{order.phone}</p>
                        </div>
                        <div className='summary__column'>
                            <h4>{'Informacje dodatkowe'}</h4>
                            <p>{order.info}</p>
                        </div>
                        <div className='summary__column'>
                            <h4>{'Sposób płatności'}</h4>
                            <p>{order.payment_method}</p>
                        </div>
                        <div className='summary__column'>
                            <h4>{'Suma'}</h4>
                            <p>{orderSum}{' PLN'}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='cart__buttons'>
                <button className='btn' onClick={back}>
                    {'< Moje dane'}
                </button>
                <button className='btn' onClick={finishOrder}>
                    {'Zatwierdź >'}
                </button>
            </div>
        </>
    );
}

export default Summary;