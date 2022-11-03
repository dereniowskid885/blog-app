import React from 'react';
import './Offer.scss';
import Breadcrumbs from '../../components/layout/Breadcrumbs/Breadcrumbs';
import Carousel from '../../components/layout/Carousel/Carousel';
import blogData from '/src/data/Blog.js';
import BlogItem from '/src/components/layout/Carousel/BlogItem/BlogItem';

function Offer() {
    return (
        <main className='offer'>
            <Breadcrumbs />
            <div className='offer__container'>
                kontener
            </div>
            <Carousel title={blogData.posts.carouselTitle} data={blogData.posts.items} block={BlogItem} />
        </main>
    )
}

export default Offer;