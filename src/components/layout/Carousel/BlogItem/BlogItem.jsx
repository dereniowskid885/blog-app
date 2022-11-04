import React from 'react';
import { Link } from 'react-router-dom';
import './BlogItem.scss';

function BlogItem(props) {
    return (
        <Link className='blog-item' to={`/blog/${props.id}`}>
            <div className='blog-item__container'>
                { props.img && <img src={props.img} alt='blog carousel item' /> }
                <div className='blog-item__content'>
                    { props.title && <div className='blog-item__title'>{props.title}</div> }
                    { props.date && <div className='blog-item__date'>{props.date}</div> }
                </div>
            </div>
        </Link>
    )
}

export default BlogItem;