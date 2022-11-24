import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.scss';
import data from '/src/data/Blog.js';
import Breadcrumbs from '/src/components/layout/Breadcrumbs/Breadcrumbs';

function Blog() {
    const [ isShowMoreClicked, setShowMoreBtnState ] = useState(false);

    return (
        <main className='blog'>
            <Breadcrumbs />
            { data.text &&
                <div className='blog__content'>
                    { data.text.title && 
                        <h1 className='blog__title'>{data.text.title}</h1> 
                    }
                    { data.text.subtitle && 
                        <p className='blog__sub-title'>{data.text.subtitle}</p> 
                    }
                    { data.text.img &&
                        <div className='blog__image'>
                            <img src={data.text.img} alt='blog' />
                        </div>
                    }
                </div>
            }
            { data.posts &&
                <div className='blog__posts'>
                    { data.posts.title && 
                        <div className='blog__section-title'>{data.posts.title}</div> 
                    }
                    <ul className={`${isShowMoreClicked ? '' : 'blog__hide-more'}`}>
                        {data.posts.items.map(item => {
                            return (
                                <li key={item.id}>
                                    <Link to={`/blog/${item.id}`}>
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