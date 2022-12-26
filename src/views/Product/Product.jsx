import React from 'react';
import './Product.scss';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '/src/components/layout/Breadcrumbs/Breadcrumbs';
import Carousel from '/src/components/layout/Carousel/Carousel';
import Item from '/src/components/layout/Carousel/Item/Item';
import { useCart } from '/src/contexts/CartContext';
import { useDialog } from '/src/contexts/DialogContext';
import Dialog from '/src/components/layout/Dialog/Dialog';
import getRandomProducts from '/src/components/ProductRandomizer/ProductRandomizer';
import ProductAdd from '/src/components/layout/Dialog/Message/ProductAdd/ProductAdd';

function Product() {
    const { 
        state: { cart },
        setCart,
        ACTIONS,
        products
    } = useCart();

    const {
        showDialog,
        toggleDialog
    } = useDialog();

    const { id } = useParams();
    const product = products.find(product => product.id == id);
    const randomProducts = getRandomProducts(product.id, 6);
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
                                { product.amount_with_currency && 
                                    <h2>{product.amount_with_currency}</h2> 
                                }
                                { product.short_description && 
                                    <p>{product.short_description}</p> 
                                }
                            </div>
                            <button className='btn btn--transparent'
                                onClick={() => {
                                    const priceValue = parseInt(product.amount_with_currency.split(' ')[0]);

                                    setCart({
                                        type: ACTIONS.ADD_TO_CART,
                                        payload: {
                                            id: product.id,
                                            img: product.img,
                                            title: product.title,
                                            price: product.amount_with_currency,
                                            priceValue: priceValue
                                        }
                                    });

                                    toggleDialog();
                                }}
                            >
                                {'Dodaj do koszyka'}
                            </button>
                        </div>
                    </div>
                    { product.full_description &&
                        <div className='product__description'>
                            <h2>{'Opis'}</h2>
                            <p>{product.full_description}</p>
                        </div>
                    }
                    { products &&
                        <Carousel 
                            randomProducts={randomProducts}
                            data={products}
                            Block={Item}
                            title={'Podobne produkty'}
                            page={'oferta'}
                        />
                    }
                </div>
            }
            { showDialog &&
                <Dialog>
                    <ProductAdd product={addedProduct} /> 
                </Dialog>  
            }
        </main>
    );
}

export default Product;