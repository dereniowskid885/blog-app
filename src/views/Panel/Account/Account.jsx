import React, { useEffect, useState } from 'react';
import './Account.scss';
import PanelCarousel from '/src/components/layout/PanelCarousel/PanelCarousel';

function Account() {
    const token = localStorage.getItem('authToken');
    const [ user, setUser ] = useState({});

    useEffect(() => {
        fetch('http://localhost:8000/api/user/', {
            method: 'GET',
            headers: { 'Authorization': `Token ${token}` }
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(data => {
            if (data) {
                setUser(data[0]);
            }
        })
        .catch(error => console.log('Error: ', error));
    }, []);

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
                <PanelCarousel />
            </div>
            <button className='account__btn btn' onClick={logOut}>
                {'Wyloguj'}
            </button>
        </div>
    );
}

export default Account;