import React from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.scss';
import { useForm } from 'react-hook-form';

function LoginForm({ title }) {
    const { register, handleSubmit } = useForm();

    const logData = data => {
        console.log(data);
    }

    return (
        <form className='login-form' onSubmit={handleSubmit(data => logData(data))}>
            <div className='login-form__wrapper'>
                <h2>{title}</h2>
                <label htmlFor='email'>
                    {'Email'}
                </label>
                <input {...register('email')} type='text' name='email' required />
                <label htmlFor='password'>
                    {'Hasło'}
                </label>
                <input {...register('password')} type='password' name='password' required />
                <Link to={'XD'}>
                    {'Przypomnij hasło'}
                </Link>
            </div>
            <div className='login-form__button'>
                <button className='btn' type='submit'>{'Zaloguj się'}</button>
            </div>
        </form>
    )
}

export default LoginForm;