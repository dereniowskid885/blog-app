import React from 'react';

function ThirdStep({ next, back, order }) {
    return (
        <>
            <h2>{'Twoje zamówienie XD'}</h2>
            {order.first_and_last_name}
            <div className='cart__buttons'>
                <button className='btn' onClick={back}>
                    {'< Moje dane'}
                </button>
                <button className='btn' onClick={next}>
                    {'Zatwierdź >'}
                </button>
            </div>
        </>
    );
}

export default ThirdStep;