import React from 'react';
import CartForm from '../CartForm/CartForm';
import { useForm } from 'react-hook-form';

function SecondStep({ next, back, setOrder }) {
    const { handleSubmit, register } = useForm();

    const prepareOrder = data => {
        setOrder(data);
        next();
    };

    return (
        <form className='cart-form' onSubmit={handleSubmit(data => prepareOrder(data))}>
            <CartForm register={register} />
            <div className='cart-form__buttons'>
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

export default SecondStep;