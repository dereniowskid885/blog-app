import React from 'react';
import './ContentBlock.scss';

function ContentBlock(props) {
    return (
        <div className='content'>
            {props.data.map((item) => {
                return (
                    <div key={item.id} className={`content__block ${item.id % 2 == 0 ? 'content__block--reverse' : ''}`}>
                        <div className={`content__image ${item.id % 2 == 0 ? 'content__image--reverse' : ''}`}>
                            <img src={item.img} alt='content image' />
                        </div>
                        <div className='content__wrapper'>
                            <div className='content__text'>{item.content}</div>
                            <button className='btn btn--transparent'>{item.buttonText}</button>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default ContentBlock;