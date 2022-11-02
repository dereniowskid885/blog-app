import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.scss';
import data from '/src/data/Blog.js';
import Breadcrumbs from '../../components/layout/Breadcrumbs/Breadcrumbs';

function Blog() {
    const [ isShowMoreClicked, setShowMoreBtnState ] = useState(false);

    return (
        <main className='blog'>
            <Breadcrumbs />
            { data.text &&
                <div className='blog__content'>
                    <h1 className='blog__title'>
                        { data.text.title && data.text.title }
                    </h1>
                    <h2 className='blog__description'>
                        { data.text.subtitle && data.text.subtitle }
                    </h2>
                    <div className='blog__logo'>
                        <img src={data.text.img} alt='Logo' />
                    </div>
                </div>
            }
            { data.posts &&
                <div className='blog__posts'>
                    <div className='blog__sub-title'>{'Najnowsze posty'}</div>
                    <ul className={`${isShowMoreClicked ? '' : 'blog__hide-more'}`}>
                        {data.posts.map((item) => {
                            return (
                                <li key={item.id}>
                                    <Link to={`/blog/${item.id}`}>
                                        <div className='blog__image'>
                                            <img src={item.img} alt='post image' />
                                        </div>
                                        <div className='blog__post-content'>
                                            <div className='blog__post-title'>
                                                { item.title && item.title }
                                            </div>
                                            <div className='blog__post-date'>
                                                { item.date && item.date }
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <button className={`blog__button btn btn--transparent ${isShowMoreClicked ? 'blog__button--hidden' : ''}`}
                            onClick={() => setShowMoreBtnState(true)}>
                        {'Więcej'}
                    </button>
                </div>
            }
        </main>
    )
}

export default Blog;