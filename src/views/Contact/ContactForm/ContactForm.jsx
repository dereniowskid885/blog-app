import React from 'react';
import './ContactForm.scss';
import { useForm } from 'react-hook-form';

function ContactForm() {
    const { register, handleSubmit } = useForm();

    const logData = (data) => {
        console.log(data);
    }

    return (
        <form className='contact-form' onSubmit={handleSubmit(data => logData(data))}>
            <label htmlFor='name'>
                {'Imię i Nazwisko *'}
            </label>
            <input {...register('name')} type='text' name='name' required />
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
            <button className='btn' type='submit'>{'Wyślij'}</button>
        </form>
    )
}

export default ContactForm;