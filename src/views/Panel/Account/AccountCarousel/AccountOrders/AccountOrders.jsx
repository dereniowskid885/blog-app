import React from 'react';
import { Link } from 'react-router-dom';
import './AccountOrders.scss';

function AccountOrders() {
    return (
        <div className='account-orders'>
            <h2>{'Twoje zamówienia'}</h2>
            <div className='account-orders__content'>
                <ul>
                    <li>
                        <Link to={'/zamowienie/1'}>
                            Zamowienie nr 1
                        </Link>
                    </li>
                    <li>
                        <Link to={'/zamowienie/2'}>
                            Zamowienie nr 2
                        </Link>
                    </li>
                    <li>
                        <Link to={'/zamowienie/2'}>
                            Zamowienie nr 2
                        </Link>
                    </li>
                    <li>
                        <Link to={'/zamowienie/2'}>
                            Zamowienie nr 2
                        </Link>
                    </li>
                    <li>
                        <Link to={'/zamowienie/2'}>
                            Zamowienie nr 2
                        </Link>
                    </li>
                    <li>
                        <Link to={'/zamowienie/2'}>
                            Zamowienie nr 2
                        </Link>
                    </li>
                    <li>
                        <Link to={'/zamowienie/2'}>
                            Zamowienie nr 2
                        </Link>
                    </li>
                    <li>
                        <Link to={'/zamowienie/2'}>
                            Zamowienie nr 2
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default AccountOrders;