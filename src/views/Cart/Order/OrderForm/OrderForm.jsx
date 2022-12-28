import React from 'react';
import './OrderForm.scss';

function OrderForm({ register }) {
    return (
        <>
            <div className='order-form__container'>
                <div className="order-form__first">
                    <label htmlFor='first_and_last_name'>
                        {'Imię i Nazwisko *'}
                    </label>
                    <input {...register('first_and_last_name')} type='text' name='first_and_last_name' required />
                    <label htmlFor='street'>
                        {'Ulica *'}
                    </label>
                    <input {...register('street')} type='text' name='street' required />
                    <label htmlFor='postal_code'>
                        {'Kod pocztowy *'}
                    </label>
                    <input {...register('postal_code')} type='text' name='postal_code' required />
                    <label htmlFor='city'>
                        {'Miasto *'}
                    </label>
                    <input {...register('city')} type='text' name='city' required />
                    <label htmlFor='email'>
                        {'Adres email *'}
                    </label>
                    <input {...register('email')} type='text' name='email' required />
                    <label htmlFor='phone'>
                        {'Numer telefonu *'}
                    </label>
                    <input {...register('phone')} type='text' name='phone' required />
                </div>
                <div className="order-form__second">
                    <div className='order-form__block'>
                        <h2>{'Wybierz sposób płatności'}</h2>
                        <div className='order-form__wrapper'>
                            <label htmlFor='payment_method'>
                                {'Przelew tradycyjny'}
                            </label>
                            <input {...register('payment_method')} type='checkbox' name='payment_method' value='Przelew tradycyjny' required defaultChecked/>
                        </div>
                    </div>
                    <div className='order-form__block'>
                        <h2>{'Informacje dodatkowe'}</h2>
                        <textarea {...register('info')} />
                    </div>
                </div>
            </div>
            <div className='order-form__check'>
                <p>{'Twoje dane osobowe będą użyte do przetworzenia zamówienia, ułatwienia korzystania ze strony internetowej oraz innych celów opisanych w polityka prywatności.'}</p>
                <div className="order-form__wrapper">
                    <label htmlFor='are_service_terms_approved'>
                        {'Przeczytałem/am i akceptuję regulamin *'}
                    </label>
                    <input {...register('are_service_terms_approved')} type='checkbox' name='are_service_terms_approved' required />
                </div>
            </div>
            <div className='order-form__info'>
                {'* pola wymagane'}
            </div>
        </>
    );
}

export default OrderForm;