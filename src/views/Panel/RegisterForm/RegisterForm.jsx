import React from 'react';
import './RegisterForm.scss';
import { useForm } from 'react-hook-form';

function RegisterForm({ hideRegister, showDialog, setErrorState }) {
    const { register, handleSubmit } = useForm();

    const registerUser = data => {
        fetch('http://localhost:8000/api/user/registration', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!(response.ok && response.status === 204)) {
                setErrorState('Rejestracja nie powiodła się');
            }
                
            showDialog();
        })
        .catch(error => console.log('Error: ', error));
    }

    return (
        <form className='register-form' onSubmit={handleSubmit(data => registerUser(data))}>
            <div className='register-form__wrapper'>
                <h2>{'Załóż konto'}</h2>
                <label htmlFor='first_name'>
                    {'Imię'}
                </label>
                <input {...register('first_name')} type='text' name='first_name' required />
                <label htmlFor='last_name'>
                    {'Nazwisko'}
                </label>
                <input {...register('last_name')} type='text' name='last_name' required />
                <label htmlFor='email'>
                    {'Email'}
                </label>
                <input {...register('email')} type='text' name='email' required />
                <div className='register-form__info'>
                    <h3>{'Hasło musi zawierać:'}</h3>
                    {'• min. 8 znaków • mała litera • wielka litera • cyfra •'}
                </div>
                <label htmlFor='password'>
                    {'Hasło'}
                </label>
                <input {...register('password')} type='password' name='password' required />
                <label htmlFor='password_repeat'>
                    {'Powtórz hasło'}
                </label>
                <input {...register('password_repeat')} type='password' name='password_repeat' required />
                <div className='register-form__check'>
                    <label htmlFor='are_service_terms_approved'>
                        {'* Oświadczam, że zapoznałem(-am) się i akceptuję treść regulaminu.'}
                    </label>
                    <input {...register('are_service_terms_approved')} type='checkbox' name='are_service_terms_approved' required />
                </div>
            </div>
            <div className='register-form__button'>
                <button className='btn' onClick={hideRegister}>
                    {'Wstecz'}
                </button>
                <button className='btn' type='submit'>
                    {'Zatwierdź'}
                </button>
            </div>
        </form>
    )
}

export default RegisterForm;