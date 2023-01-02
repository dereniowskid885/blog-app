import React from 'react';
import './ContactForm.scss';
import { useForm } from 'react-hook-form';
import { useDialog } from '/src/contexts/DialogContext';
import FormInput from '/src/components/other/FormInput/FormInput';

function ContactForm() {
    const { 
        setError,
        toggleDialog
    } = useDialog();
    const { register, handleSubmit } = useForm();

    const sendMail = (data) => {
        fetch('http://localhost:8000/api/contact-form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                setError('Wiadomość nie została wysłana');
            } else {
                toggleDialog();
            }
        })
        .catch(error => {
            console.log('Error: ', error);
            setError('Nieudane połączenie z serwerem');
        });
    };

    return (
        <form className='contact-form' onSubmit={handleSubmit(data => sendMail(data))}>
            <FormInput id={'first_and_last_name'} label={'Imię i Nazwisko *'} type={'text'} maxLength={100} register={{...register('first_and_last_name')}} />
            <FormInput id={'email'} label={'Twój Email *'} type={'text'} maxLength={100} register={{...register('email')}} />
            <FormInput id={'phone'} label={'Numer telefonu *'} type={'text'} maxLength={9} register={{...register('phone')}} />
            <label htmlFor='message'>{'Wiadomość *'}</label>
            <textarea {...register('message')} name='message' maxLength={300} placeholder={'Treść wiadomości...'} required />
            <button className='btn' type='submit'>
                {'Wyślij'}
            </button>
        </form>
    );
}

export default ContactForm;