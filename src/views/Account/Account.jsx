import React from 'react';
// import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Account.scss';
import Breadcrumbs from '/src/components/layout/Breadcrumbs/Breadcrumbs';

function Account() {
    // const [ username, setUsername ] = useState('');

    // useEffect(() => {
    //     const token = localStorage.getItem('authToken');
    //     const userId = localStorage.getItem('loggedUserId');

    //     fetch('http://localhost:8000/api/user/registration', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(data)
    //     })
    //     .then(response => {
    //         if (!(response.ok && response.status === 204)) {
    //             setErrorState('Rejestracja nie powiodła się');
    //         }
                
    //         showDialog();
    //     })
    //     .catch(error => console.log('Error: ', error));
    // }, []);

    const token = localStorage.getItem('authToken');

    return (
        <main className='account'>
            <Breadcrumbs />
            <div className='account__content'>
                <div className='account__container'>
                    <h1>{'Witaj !'}</h1>
                    <h2>{'Jesteś zalogowany'}</h2>
                    <p className='account__text'>
                        {'Twój token: '}{token}
                    </p>
                    <Link to={'/panel-klienta'}>
                        <button className='btn'>
                            {'Wróć'}
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default Account;