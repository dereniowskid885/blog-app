import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.scss';
import data from '/src/data/Blog.js';
import Breadcrumbs from '/src/components/layout/Breadcrumbs/Breadcrumbs';
import { useBlog } from '/src/contexts/BlogContext';

function Blog() {
    const [ isShowMoreClicked, setShowMore ] = useState(false);
    const { posts } = useBlog();
    const anyPosts = posts.length > 0;
    const showBtn = posts.length > 6;

    const toggleShowMore = () => {
        setShowMore(!isShowMoreClicked);
    };

    return (
        <main className='blog'>
            <Breadcrumbs />
            <div className='blog__content'>
                <h1 className='blog__title'>{data.text.title}</h1> 
                <p className='blog__sub-title'>{data.text.subtitle}</p> 
                <div className='blog__image'>
                    <img src={data.text.img} alt='blog' />
                </div>
            </div>
            { anyPosts &&
                <div className='blog__posts'>
                    <div className='blog__section-title'>{data.posts.title}</div> 
                    <ul className={`${isShowMoreClicked ? '' : 'blog__hide-more'}`}>
                        {posts.map(item => {
                            return (
                                <li key={item.id}>
                                    <Link to={`/blog/${item.id}`}>
                                        <div className='blog__post-container'>
                                            { item.img &&
                                                <div className='blog__post-image'>
                                                    <img src={item.img} alt='post' />
                                                </div>
                                            }
                                            <div className='blog__post-content'>
                                                { item.title && 
                                                    <div className='blog__post-title'>{item.title}</div> 
                                                }
                                                { item.date && 
                                                    <div className='blog__post-date'>{item.date}</div> 
                                                }
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    { showBtn &&
                        <button className={`blog__button btn btn--transparent ${isShowMoreClicked ? 'blog__button--hidden' : ''}`}
                            onClick={toggleShowMore}>
                            {data.posts.buttonText}
                        </button>
                    }
                </div>
            }
        </main>
    );
}

export default Blog;