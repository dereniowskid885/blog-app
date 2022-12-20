import React from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.scss';
import { useForm } from 'react-hook-form';
import { useDialog } from '/src/contexts/DialogContext';

function LoginForm({ title }) {
    const { setError } = useDialog();
    const { register, handleSubmit } = useForm();

    const authenticateUser = data => {
        fetch('http://localhost:8000/auth/obtain-token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => {
            if(!response.ok) {
                setError('Logowanie nieudane, spróbuj ponownie');
            } else {
                return response.json();
            }
        })
        .then(data => {
            if (data) {
                localStorage.setItem('authToken', data.token);
                window.location.href= '/panel-klienta';
            }
        })
        .catch(error => {
            console.log('Error: ', error);
            setError('Nieudane połączenie z serwerem');
        });
    }

    return (
        <form className='login-form' onSubmit={handleSubmit(data => authenticateUser(data))}>
            <div className='login-form__wrapper'>
                <h2>{title}</h2>
                <label htmlFor='username'>
                    {'Email'}
                </label>
                <input {...register('username')} type='text' name='username' required />
                <label htmlFor='password'>
                    {'Hasło'}
                </label>
                <input {...register('password')} type='password' name='password' required />
                <Link to={'XD'}>
                    {'Przypomnij hasło'}
                </Link>
            </div>
            <div className='login-form__button'>
                <button className='btn' type='submit'>
                    {'Zaloguj się'}
                </button>
            </div>
        </form>
    );
}

export default LoginForm;