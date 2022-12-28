import React from 'react';
import OrderForm from './OrderForm/OrderForm';
import { useForm } from 'react-hook-form';

function Order({ next, back, setOrder }) {
    const { handleSubmit, register } = useForm();

    const prepareOrder = data => {
        setOrder(data);
        next();
    };

    return (
        <form className='order-form' onSubmit={handleSubmit(data => prepareOrder(data))}>
            <OrderForm register={register} />
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