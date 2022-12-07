import React from 'react';
import './RegisterForm.scss';
import { useForm } from 'react-hook-form';

function RegisterForm({ setRegisterForm }) {
    const { register, handleSubmit } = useForm();

    const logData = data => {
        console.log(data);
    }

    return (
        <form className='register-form' onSubmit={handleSubmit(data => logData(data))}>
            <div className='register-form__wrapper'>
                <h2>{'Załóż konto'}</h2>
                <label htmlFor='name'>
                    {'Imię'}
                </label>
                <input {...register('name')} type='text' name='name' required />
                <label htmlFor='surname'>
                    {'Nazwisko'}
                </label>
                <input {...register('surname')} type='text' name='surname' required />
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
                <label htmlFor='password-confirm'>
                    {'Powtórz hasło'}
                </label>
                <input {...register('passwordConfirm')} type='password' name='password-confirm' required />
                <div className='register-form__check'>
                    <label htmlFor='regulations-check'>
                        {'* Oświadczam, że zapoznałem(-am) się i akceptuję treść regulaminu.'}
                    </label>
                    <input {...register('regulationsCheck')} type='checkbox' name='regulations-check' required />
                </div>
            </div>
            <div className='register-form__button'>
                <button className='btn' onClick={() => { setRegisterForm(false); }}>{'Wstecz'}</button>
                <button className='btn' type='submit'>{'Zatwierdź'}</button>
            </div>
        </form>
    )
}

export default RegisterForm;