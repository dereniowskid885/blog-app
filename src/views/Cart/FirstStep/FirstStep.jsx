import React from 'react';
import ProductTable from '/src/components/layout/ProductTable/ProductTable';
import { Link } from 'react-router-dom';

function FirstStep({ next, back }) {
    return (
        <>
            <ProductTable />
            <div className='cart__buttons'>
                <Link to={'/oferta'}>
                    <button className='btn' onClick={back}>
                        {'< Kontynuuj zakupy'}
                    </button>
                </Link>
                <button className='btn' onClick={next}>
                    {'Moje dane >'}
                </button>
            </div>
        </>
    )
}

export default FirstStep;