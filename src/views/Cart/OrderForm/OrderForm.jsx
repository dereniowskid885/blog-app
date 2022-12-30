import React from 'react';
import './OrderForm.scss';
import { useForm } from 'react-hook-form';
import FormInput from '/src/components/other/FormInput/FormInput';

function Order({ next, back, setOrderForm }) {
    const { handleSubmit, register } = useForm();

    const prepareOrder = data => {
        setOrderForm(data);
        next();
    };

    return (
        <form className='order-form' onSubmit={handleSubmit(data => prepareOrder(data))}>
            <div className='order-form__container'>
                <div className="order-form__first">
                    <FormInput id={'first_name'} label={'Imię *'} type={'text'} register={{...register('first_name')}} />
                    <FormInput id={'last_name'} label={'Nazwisko *'} type={'text'} register={{...register('last_name')}} />
                    <div className='form-group'>
                        <div className='form-element'>
                            <FormInput id={'street'} label={'Ulica *'} type={'text'} register={{...register('street')}} />
                        </div>
                        <div className='form-element'>
                            <FormInput id={'house_number'} label={'Numer budynku *'} type={'text'} register={{...register('house_number')}} />
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='form-element'>
                            <FormInput id={'post_code'} label={'Kod pocztowy *'} type={'text'} register={{...register('post_code')}} />
                        </div>
                        <div className='form-element'>
                            <FormInput id={'city'} label={'Miasto *'} type={'text'} register={{...register('city')}} />
                        </div>
                    </div>
                    <FormInput id={'email'} label={'Email *'} type={'text'} register={{...register('email')}} />
                    <FormInput id={'phone'} label={'Numer telefonu *'} type={'text'} register={{...register('phone')}} />
                </div>
                <div className="order-form__second">
                    <div className='order-form__block'>
                        <h2>{'Wybierz sposób płatności'}</h2>
                        <div className='order-form__wrapper'>
                            <label htmlFor='payment_method'>{'Przelew tradycyjny'}</label>
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
                    <FormInput id={'are_service_terms_approved'} label={'Przeczytałem/am i akceptuję regulamin *'} type={'checkbox'} register={{...register('are_service_terms_approved')}} />
                </div>
            </div>
            <div className='form-info'>
                {'* pola wymagane'}
            </div>
            <div className='order-form__buttons'>
                <button className='btn' onClick={back}>
                    {'< Koszyk'}
                </button>
                <button className='btn' type='submit'>
                    {'Podsumowanie >'}
                </button>
            </div>
        </form>
    );
}

export default Order;