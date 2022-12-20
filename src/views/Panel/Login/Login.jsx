import React from 'react';
import LoginForm from '/src/views/Panel/Login/LoginForm/LoginForm';
import data from '/src/data/Panel.js';
import CheckIcon from '/src/assets/check-circle.svg';

function Login({ showRegister }) {
    return (
        <>
            <div className='panel__block'>
                <LoginForm title={data.loginTitle} />
            </div>
            <div className='panel__block'>
                <div className='panel__wrapper'>
                    <h2>{data.register.title}</h2>
                    <div className='panel__subtitle'>
                        {data.register.subtitle}
                    </div>
                    <ul>
                        {data.register.list.map((item, index) => {
                            return (
                                <li key={index}>
                                    <img src={CheckIcon} alt='check' />
                                    {item}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className='panel__button'>
                    <button className='btn' onClick={showRegister}>
                        {data.register.buttonText}
                    </button>
                </div>
            </div>
        </>
    );
}

export default Login;