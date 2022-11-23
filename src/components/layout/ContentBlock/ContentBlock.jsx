import React from 'react';
import './ContentBlock.scss';

function ContentBlock({ data }) {
    return (
        <div className='content'>
            {data.map((item) => {
                return (
                    <div key={item.id} className={`content__block ${item.id % 2 == 0 ? 'content__block--reverse' : ''}`}>
                        { item.img &&
                            <div className={`content__image ${item.id % 2 == 0 ? 'content__image--reverse' : ''}`}>
                                <img src={item.img} alt='content image' />
                            </div>
                        }
                        <div className='content__wrapper'>
                            { item.title && 
                                <h2 className='content__title'>{item.title}</h2> 
                            }
                            { item.content_1 && 
                                <p className='content__text'>{item.content_1}</p> 
                            }
                            { item.content_2 && 
                                <p className='content__text'>{item.content_2}</p> 
                            }
                            { item.content && 
                                <p className='content__text'>{item.content}</p> 
                            }
                            { item.buttonText && 
                                <button className='content__button btn btn--transparent'>{item.buttonText}</button> 
                            }
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default ContentBlock;