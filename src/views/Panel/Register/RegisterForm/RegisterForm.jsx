import React, { useState } from 'react';
import './RegisterForm.scss';
import { useForm } from 'react-hook-form';
import { useDialog } from '/src/contexts/DialogContext';
import FormInput from '/src/components/other/FormInput/FormInput';

const termsLabel = '* Oświadczam, że zapoznałem(-am) się i akceptuję treść regulaminu.';

function RegisterForm({ hideRegister }) {
    const [ errors, setErrors ] = useState();
    const { register, handleSubmit } = useForm();

    const { 
        setError,
        toggleDialog
    } = useDialog();

    const registerUser = data => {
        fetch('http://localhost:8000/api/user/registration', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                return response.json();
            } else {
                toggleDialog();
            }
        })
        .then(data => {
            console.log(data);
            // setErrors(data);
        })
        .catch(error => {
            console.log('Error: ', error);
            setError('Nieudane połączenie z serwerem');
        });
    };

    console.log(errors);

    return (
        <form className='register-form' onSubmit={handleSubmit(data => registerUser(data))}>
            <div className='register-form__wrapper'>
                <h2>{'Załóż konto'}</h2>
                <FormInput id={'first_name'} label={'Imię *'} type={'text'} maxLength={50} register={{...register('first_name')}} />
                <FormInput id={'last_name'} label={'Nazwisko *'} type={'text'} maxLength={50} register={{...register('last_name')}} />
                <div className='form-group'>
                    <div className='form-element'>
                        <FormInput id={'street'} label={'Ulica *'} type={'text'} maxLength={50} register={{...register('street')}} />
                    </div>
                    <div className='form-element'>
                        <FormInput id={'house_number'} label={'Numer budynku *'} type={'text'} maxLength={4} register={{...register('house_number')}} />
                    </div>
                </div>
                <div className='form-group'>
                    <div className='form-element'>
                        <FormInput id={'post_code'} label={'Kod pocztowy *'} type={'text'} maxLength={6} register={{...register('post_code')}} />
                    </div>
                    <div className='form-element'>
                        <FormInput id={'city'} label={'Miasto *'} type={'text'} maxLength={30} register={{...register('city')}} />
                    </div>
                </div>
                <FormInput id={'email'} label={'Email *'} type={'text'} maxLength={100} register={{...register('email')}} />
                <FormInput id={'phone'} label={'Numer telefonu *'} type={'text'} maxLength={9} register={{...register('phone')}} />
                <div className='form-info'>
                    <h3>{'Hasło musi zawierać:'}</h3>
                    {'• min. 8 znaków • mała litera • wielka litera • cyfra •'}
                </div>
                <FormInput id={'password'} label={'Hasło *'} type={'password'} minLength={8} maxLength={50} register={{...register('password')}} />
                <FormInput id={'password_repeat'} label={'Powtórz hasło *'} type={'password'} minLength={8} maxLength={50} errorMessage={errors?.error_message} register={{...register('password_repeat')}} />
                <div className='register-form__check'>
                    <FormInput id={'are_service_terms_approved'} label={termsLabel} type={'checkbox'} register={{...register('are_service_terms_approved')}} />
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
    );
}

export default RegisterForm;