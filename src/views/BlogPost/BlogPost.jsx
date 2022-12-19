import React from 'react';
import './BlogPost.scss';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '/src/components/layout/Breadcrumbs/Breadcrumbs';
import blogData from '/src/data/Blog.js';
import contactData from '/src/data/ContactBlock.js';
import Carousel from '/src/components/layout/Carousel/Carousel';
import Item from '/src/components/layout/Carousel/Item/Item';
import ContactBlock from '/src/components/layout/ContactBlock/ContactBlock';
import { useBlog } from '/src/contexts/BlogContext';

function BlogPost() {
    const { id } = useParams();
    const { posts } = useBlog();
    const anyPosts = posts.length > 0;
    const post = anyPosts && posts.find(post => post.id == id);

    return (
        <main className='blog-post'>
            { post.title &&
                <Breadcrumbs title={post.title} />
            }
            { post &&
                <div className='blog-post__container'>
                    { post.title &&
                        <h1 className='blog-post__title'>{post.title}</h1>
                    }
                    { post.date && 
                        <div className='blog-post__info'>{`Kolarstwo od kuchni  |  ${post.date}`}</div>
                    }
                    { post.img &&
                        <img className='blog-post__image' src={post.img} alt='blog post' />
                    }
                    <div className='blog-post__wrapper'>
                        { post.content_1 &&
                            <div className='blog-post__content'>{post.content_1}</div>
                        }
                        { post.content_img &&
                            <img className='blog-post__content-img' src={post.content_img} alt='content' />
                        }
                        { post.content_2 &&
                            <div className='blog-post__content'>{post.content_2}</div>
                        }
                    </div>
                </div>
            }
            { anyPosts &&
                <Carousel 
                    data={posts}
                    page={blogData.page}
                    title={blogData.carouselTitle}
                    Block={Item} 
                />
            }
            <ContactBlock data={contactData} />
        </main>
    );
}

export default BlogPost;