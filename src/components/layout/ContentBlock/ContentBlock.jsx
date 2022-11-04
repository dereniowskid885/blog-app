import React from 'react';
import './ContentBlock.scss';

function ContentBlock(props) {
    return (
        <div className='content'>
            {props.data.map((item) => {
                return (
                    <div key={item.id} className={`content__block ${item.id % 2 == 0 ? 'content__block--reverse' : ''}`}>
                        { item.img &&
                            <div className={`content__image ${item.id % 2 == 0 ? 'content__image--reverse' : ''}`}>
                                <img src={item.img} alt='content image' />
                            </div>
                        }
                        <div className='content__wrapper'>
                            { item.title && <h2 className='content__title'>{item.title}</h2> }
                            { item.content_1 && <div className='content__text'>{item.content_1}</div> }
                            { item.content_2 && <div className='content__text'>{item.content_2}</div> }
                            { item.content && <div className='content__text'>{item.content}</div> }
                            { item.buttonText && <button className='content__button btn btn--transparent'>{item.buttonText}</button> }
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default ContentBlock;