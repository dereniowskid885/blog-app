import React from 'react';
import './CartForm.scss';

function CartForm({ register }) {
    return (
        <>
            <div className='cart-form__container'>
                <div className="cart-form__first">
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
                <div className="cart-form__second">
                    <div className='cart-form__block'>
                        <h2>{'Wybierz sposób płatności'}</h2>
                        <div className='cart-form__wrapper'>
                            <label htmlFor='payment_method'>
                                {'Przelew tradycyjny'}
                            </label>
                            <input {...register('payment_method')} type='checkbox' name='payment_method' required defaultChecked/>
                        </div>
                    </div>
                    <div className='cart-form__block'>
                        <h2>{'Informacje dodatkowe'}</h2>
                        <textarea {...register('info')} />
                    </div>
                </div>
            </div>
            <div className='cart-form__check'>
                <p>{'Twoje dane osobowe będą użyte do przetworzenia zamówienia, ułatwienia korzystania ze strony internetowej oraz innych celów opisanych w polityka prywatności.'}</p>
                <div className="cart-form__wrapper">
                    <label htmlFor='are_service_terms_approved'>
                        {'Przeczytałem/am i akceptuję regulamin *'}
                    </label>
                    <input {...register('are_service_terms_approved')} type='checkbox' name='are_service_terms_approved' required />
                </div>
            </div>
            <div className='cart-form__info'>
                {'* pola wymagane'}
            </div>
        </>
    );
}

export default CartForm;