import React from 'react';
import { Link } from 'react-router-dom';
import './Offer.scss';
import Breadcrumbs from '../../components/layout/Breadcrumbs/Breadcrumbs';
import Carousel from '../../components/layout/Carousel/Carousel';
import blogData from '/src/data/Blog.js';
import BlogItem from '/src/components/layout/Carousel/BlogItem/BlogItem';
import data from '/src/data/Offer.js';

function Offer() {
    return (
        <main className='offer'>
            <Breadcrumbs />
            <div className='offer__container'>
                <ul>
                    {data.map((item) => {
                        return (
                            <li key={item.id}>
                                { item.img &&
                                    <div className='offer__image'>
                                        <img src={item.img} alt='item' />
                                    </div>
                                }
                                <div className='offer__content'>
                                    { item.title && <h3>{item.title}</h3> }
                                    { item.price && <h4>{item.price}</h4> }
                                    { item.buttonText &&
                                        <Link>
                                            <button className='btn'>
                                                {item.buttonText}
                                            </button> 
                                        </Link>
                                    }
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <Carousel title={blogData.posts.carouselTitle} data={blogData.posts.items} block={BlogItem} />
        </main>
    )
}

export default Offer;