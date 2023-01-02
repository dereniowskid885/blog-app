import React from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.scss';
import { useForm } from 'react-hook-form';
import { useDialog } from '/src/contexts/DialogContext';
import FormInput from '/src/components/other/FormInput/FormInput';

function LoginForm() {
    const { setError } = useDialog();
    const { register, handleSubmit } = useForm();

    const authenticateUser = data => {
        fetch('http://localhost:8000/auth/obtain-token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data.invalid_fields) {
                setError(data.invalid_fields.non_field_errors);
            } else {
                localStorage.setItem('authToken', data.token);
                window.location.href = '/panel-klienta';
            }
        })
        .catch(error => {
            console.log('Error: ', error);
            setError('Nieudane połączenie z serwerem');
        });
    };

    return (
        <form className='login-form' onSubmit={handleSubmit(data => authenticateUser(data))}>
            <div className='login-form__wrapper'>
                <h2>{'Logowanie'}</h2>
                <FormInput id={'username'} label={'Email'} type={'text'} maxLength={100} register={{...register('username')}} />
                <FormInput id={'password'} label={'Hasło'} type={'password'} minLength={8} maxLength={50} register={{...register('password')}} />
                <Link to={'#'}>
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