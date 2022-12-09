import React from 'react';
import { Link } from 'react-router-dom';
import './Offer.scss';
import Breadcrumbs from '/src/components/layout/Breadcrumbs/Breadcrumbs';
import Carousel from '/src/components/layout/Carousel/Carousel';
import Item from '/src/components/layout/Carousel/Item/Item';
import Dialog from '/src/components/layout/Dialog/Dialog';
import CartIcon from '/src/assets/cart.svg';
import blogData from '/src/data/Blog.js';
import { CartState } from '/src/contexts/CartContext';

function Offer() {
    const blogPosts = blogData.posts;
    const { 
        state: {
            productsData,
            showDialog,
            cart
        },
        setCart,
        ACTIONS 
    } = CartState();

    return (
        <main className='offer'>
            <Breadcrumbs />
            { productsData &&
                <div className='offer__container'>
                    <ul>
                        {productsData.items.map(product => {
                            return (
                                <li key={product.id}>
                                    { product.img &&
                                        <div className='offer__image'>
                                            <img className='offer__icon' src={CartIcon} alt='cart'
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
                                                }} 
                                            />
                                            <img src={product.img} alt='product' />
                                        </div>
                                    }
                                    <div className='offer__content'>
                                        { product.title && 
                                            <h3>{product.title}</h3> 
                                        }
                                        { product.price && 
                                            <h4>{product.price}{' zł'}</h4>
                                        }
                                        { product.buttonText &&
                                            <Link to={`/oferta/${product.id}`}>
                                                <button className='btn'>{product.buttonText}</button> 
                                            </Link>
                                        }
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            }
            { blogPosts &&
                <Carousel data={blogPosts} Block={Item} />
            }
            { showDialog &&
                <Dialog product={cart[cart.length - 1]} />
            }
        </main>
    )
}

export default Offer;