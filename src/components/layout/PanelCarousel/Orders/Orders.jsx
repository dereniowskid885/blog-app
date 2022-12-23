import React from 'react';
import './Orders.scss';

function Orders() {
    return (
        <div className='orders'>
            <h2>{'Twoje zamówienia'}</h2>
            <ul>
                <li>Zamowienie nr 1</li>
                <li>Zamowienie nr 2</li>
                <li>Zamowienie nr 3</li>
            </ul>
        </div>
    );
}

export default Orders;