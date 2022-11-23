import React from 'react';
import { Link } from 'react-router-dom';
import './Offer.scss';
import Breadcrumbs from '../../components/layout/Breadcrumbs/Breadcrumbs';
import Carousel from '../../components/layout/Carousel/Carousel';
import Item from '/src/components/layout/Carousel/Item/Item';
import Cart from '/src/assets/cart.svg';
import blogData from '/src/data/Blog.js';
import data from '/src/data/Offer.js';

function Offer() {
    const productsData = data.products;
    const blogPosts = blogData.posts;

    return (
        <main className='offer'>
            <Breadcrumbs />
            <div className='offer__container'>
                <ul>
                    {productsData.items.map((item) => {
                        return (
                            <li key={item.id}>
                                { item.img &&
                                    <div className='offer__image'>
                                        <img className='offer__icon' src={Cart} alt='cart' />
                                        <img src={item.img} alt='item' />
                                    </div>
                                }
                                <div className='offer__content'>
                                    { item.title && 
                                        <h3>{item.title}</h3> 
                                    }
                                    { item.price && 
                                        <h4>{item.price}</h4>
                                    }
                                    { item.buttonText &&
                                        <Link to={`/oferta/${item.id}`}>
                                            <button className='btn'>{item.buttonText}</button> 
                                        </Link>
                                    }
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            { blogPosts &&
                <Carousel data={blogPosts} Block={Item} />
            }
        </main>
    )
}

export default Offer;