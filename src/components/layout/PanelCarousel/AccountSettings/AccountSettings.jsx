import React from 'react';
import './AccountSettings.scss';

function AccountSettings() {
    return (
        <div className='account-settings'>
            <h2>{'Ustawienia konta'}</h2>
            <button className='btn'>{'Zmień dane'}</button>
            <button className='btn'>{'Usuń konto'}</button>
        </div>
    );
}

export default AccountSettings;