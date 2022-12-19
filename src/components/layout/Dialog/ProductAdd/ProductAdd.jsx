import React from 'react';
import { Link } from 'react-router-dom';
import './ProductAdd.scss';
import Carousel from '/src/components/layout/Carousel/Carousel';
import Item from '/src/components/layout/Carousel/Item/Item';
import getRandomProducts from '/src/components/ProductRandomizer/ProductRandomizer';
import { CartState } from '/src/contexts/CartContext';
import { useDialog } from '/src/contexts/DialogContext';

function ProductAdd({ product }) {
    const { state: { productsData } } = CartState();
    const { toggleDialog } = useDialog();
    const randomProducts = getRandomProducts(4, product.id);

    return (
        <div className='product-add'>
            <h2>{'Dodałeś do koszyka:'}</h2>
            <div className='product-add__content'>
                <div className='product-add__image'>
                    <img src={product.img} alt='product' />
                </div>
                <div className='product-add__wrapper'>
                    <h3>{product.title}</h3>
                    <h4>{product.price}{' zł'}</h4>
                </div>
            </div>
            <div className='product-add__recommendations'>
                <Carousel randomProducts={randomProducts} data={productsData} Block={Item} title={'Sprawdź również'} />
            </div>
            <div className='product-add__buttons'>
                <button className='btn' onClick={toggleDialog}>
                    {'< Kontynuuj zakupy'}
                </button>
                <Link to={'/koszyk'} onClick={toggleDialog}>
                    <button className='btn'>{'Przejdź do koszyka >'}</button>
                </Link>
            </div>
        </div>
    );
}

export default ProductAdd;