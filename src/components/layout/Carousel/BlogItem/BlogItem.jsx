import React from 'react';
import { Link } from 'react-router-dom';
import './BlogItem.scss';

function BlogItem(props) {
    return (
        <Link className='blog-item' to={`/blog/${props.id}`}>
            <div className='blog-item__container'>
                <img src={props.img} alt='blog carousel item' />
                <div className='blog-item__content'>
                    <div className='blog-item__title'>{props.title}</div>
                    <div className='blog-item__date'>{props.date}</div>
                </div>
            </div>
        </Link>
    )
}

export default BlogItem;