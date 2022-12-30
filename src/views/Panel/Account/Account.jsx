import React from 'react';
import './Account.scss';
import AccountCarousel from './AccountCarousel/AccountCarousel';

function Account({ user }) {
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
        <div className='account'>
            <h1>{`Witaj ${user.first_name}!`}</h1>
            <div className='account__content'>
                <AccountCarousel user={user} />
            </div>
            <button className='btn' onClick={logOut}>
                {'Wyloguj'}
            </button>
        </div>
    );
}

export default Account;