import React from 'react';
import { Link } from 'react-router-dom';
import Overlay from '/src/components/layout/Overlay/Overlay';
import './Dialog.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { CartState } from '/src/contexts/CartContext';
import Carousel from '/src/components/layout/Carousel/Carousel';
import Item from '/src/components/layout/Carousel/Item/Item';
import getRandomProducts from '/src/components/ProductRandomizer/ProductRandomizer';

function Dialog({ product }) {
    const {
        state: { productsData },
        setCart,
        ACTIONS 
    } = CartState();

    const randomProducts = getRandomProducts(4, product.id);

    const hideDialog = () => {
        setCart({ type: ACTIONS.HIDE_DIALOG });
    };

    return (
        <>
            <div className='dialog'>
                <h2>{'Dodałeś do koszyka:'}</h2>
                <div className='dialog__product'>
                    <div className='dialog__image'>
                        <img src={product.img} alt='product' />
                    </div>
                    <div className='dialog__content'>
                        <h3>{product.title}</h3>
                        <h4>{product.price}{' zł'}</h4>
                    </div>
                </div>
                <div className='dialog__recommendations'>
                    <Carousel randomProducts={randomProducts} data={productsData} Block={Item} title={'Sprawdź również'} />
                </div>
                <div className='dialog__buttons'>
                    <button className='btn' onClick={hideDialog}>
                        {'< Kontynuuj zakupy'}
                    </button>
                    <Link to={'/koszyk'} onClick={hideDialog}>
                        <button className='btn'>{'Przejdź do koszyka >'}</button>
                    </Link>
                </div>
                <AiOutlineClose onClick={hideDialog} />
            </div>
            <Overlay hideOverlay={hideDialog} />
        </>
    )
}

export default Dialog;