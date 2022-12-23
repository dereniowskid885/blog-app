import React from 'react';
import './ContactForm.scss';
import { useForm } from 'react-hook-form';
import { useDialog } from '/src/contexts/DialogContext';

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
            <label htmlFor='first_and_last_name'>
                {'Imię i Nazwisko *'}
            </label>
            <input {...register('first_and_last_name')} type='text' name='first_and_last_name' required />
            <label htmlFor='email'>
                {'Twój Email *'}
            </label>
            <input {...register('email')} type='text' name='email' required />
            <label htmlFor='phone'>
                {'Numer telefonu *'}
            </label>
            <input {...register('phone')} type='text' name='phone' required />
            <label htmlFor='message'>
                {'Wiadomość *'}
            </label>
            <textarea {...register('message')} name='message' maxLength={300} placeholder={'Treść wiadomości...'} required />
            <button className='btn' type='submit'>
                {'Wyślij'}
            </button>
        </form>
    );
}

export default ContactForm;