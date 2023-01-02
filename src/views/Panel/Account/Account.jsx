import React from 'react';
import './Account.scss';
import AccountCarousel from './AccountCarousel/AccountCarousel';
import { useUser } from '/src/contexts/UserContext';

function Account() {
    const { user } = useUser();
    const token = localStorage.getItem('authToken');

    const logOut = () => {
        fetch('http://localhost:8000/auth/remove-token', {
            method: 'POST',
            headers: { 'Authorization': `Token ${token}` }
        })
        .then(response => {
            if (response.ok) {
                localStorage.removeItem('authToken');
                window.location.href = '/panel-klienta';
            }
        })
        .catch(error => console.log('Error: ', error));
    };

    return (
        <>
            { user.first_name &&
                <div className='account'>
                    <h1>{`Witaj ${user.first_name}!`}</h1>
                    <div className='account__content'>
                        <AccountCarousel />
                    </div>
                    <button className='btn' onClick={logOut}>
                        {'Wyloguj'}
                    </button>
                </div>
            }
        </>
    );
}

export default Account;