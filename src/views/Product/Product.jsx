import React from 'react';
import './Product.scss';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '/src/components/layout/Breadcrumbs/Breadcrumbs';
import Carousel from '/src/components/layout/Carousel/Carousel';
import Item from '/src/components/layout/Carousel/Item/Item';
import { CartState } from '/src/contexts/CartContext';
import Dialog from '/src/components/layout/Dialog/Dialog';
import getRandomProducts from '/src/components/ProductRandomizer/ProductRandomizer';

function Product() {
    const {
        state: {
            productsData,
            showDialog,
            cart
        },
        setCart,
        ACTIONS 
    } = CartState();

    const { id } = useParams();
    const product = productsData.items.find(product => product.id == id);
    const randomProducts = getRandomProducts(6, product.id);
    const addedProduct = cart[cart.length - 1];

    return (
        <main className='product'>
            { product.title &&
                <Breadcrumbs title={product.title} />
            }
            { product &&
                <div className='product__container'>
                    <div className='product__info'>
                        { product.img &&
                            <div className='product__image'>
                                <img src={product.img} alt='offer' />
                            </div>
                        }
                        <div className='product__content'>
                            <div className='product__wrapper'>
                                { product.title && 
                                    <h1>{product.title}</h1> 
                                }
                                { product.price && 
                                    <h2>{product.price}{' zł'}</h2> 
                                }
                                { product.info && 
                                    <p>{product.info}</p> 
                                }
                            </div>
                            <button className='btn btn--transparent'
                                    onClick={() => {
                                        setCart({
                                            type: ACTIONS.ADD_TO_CART,
                                            payload: {
                                                id: product.id,
                                                img: product.img,
                                                title: product.title,
                                                price: product.price
                                            }
                                        });
                                    }}>
                                {'Dodaj do koszyka'}
                            </button>
                        </div>
                    </div>
                    { product.description &&
                        <div className='product__description'>
                            <h2>{'Opis'}</h2>
                            <p>{product.description}</p>
                        </div>
                    }
                    { productsData &&
                        <Carousel randomProducts={randomProducts} data={productsData} Block={Item} />
                    }
                </div>
            }
            { showDialog &&
                <Dialog product={addedProduct} />
            }
        </main>
    );
}

export default Product;