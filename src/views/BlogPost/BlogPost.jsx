import React from 'react';
import './BlogPost.scss';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../components/layout/Breadcrumbs/Breadcrumbs';
import blogData from '/src/data/Blog.js';
import Carousel from '../../components/layout/Carousel/Carousel';
import BlogItem from '/src/components/layout/Carousel/BlogItem/BlogItem';

function BlogPost() {
    const { id } = useParams();
    const blogPosts = blogData.posts.items;
    const post = blogPosts.find(post => post.id == id);

    return (
        <main className='blog-post'>
            <Breadcrumbs title={post.title} />
            <div className='blog-post__container'>
                { post.title && <h1 className='blog-post__title'>{post.title}</h1> }
                { post.date && <div className='blog-post__info'>{`Kolarstwo od kuchni  |  ${post.date}`}</div> }
                { post.img && <img className='blog-post__img' src={post.img} alt='blog post' /> }
                <div className='blog-post__wrapper'>
                    { post.content_1 && <div className='blog-post__content'>{post.content_1}</div> }
                    { post.content_img && <img className='blog-post__content-img' src={post.content_img} alt='content' /> }
                    { post.content_2 && <div className='blog-post__content'>{post.content_2}</div> }
                </div>
            </div>
            <Carousel title={blogData.posts.carouselTitle} data={blogPosts} block={BlogItem} />
        </main>
    )
}

export default BlogPost;