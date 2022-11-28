import React from 'react';
import './Product.scss';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '/src/components/layout/Breadcrumbs/Breadcrumbs';
import Carousel from '/src/components/layout/Carousel/Carousel';
import Item from '/src/components/layout/Carousel/Item/Item';
import data from '/src/data/Offer.js';

const getRandomProducts = (products, amount) => {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    const randomProducts = shuffled.slice(0, amount);

    return randomProducts;
}

function Product() {
    const { id } = useParams();
    const productsData = data.products;
    const product = productsData.items.find(item => item.id == id);
    const randomProducts = getRandomProducts(productsData.items, 6);

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
                                    <h2>{product.price}</h2> 
                                }
                                { product.info && 
                                    <p>{product.info}</p> 
                                }
                            </div>
                            { data.buttonText &&
                                <button className='btn btn--transparent'>{data.buttonText}</button>
                            }
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
        </main>
    )
}

export default Product;