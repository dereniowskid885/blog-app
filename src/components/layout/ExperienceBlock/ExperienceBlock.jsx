import React from 'react';
import './ExperienceBlock.scss';
import data from '/src/data/ExperienceBlock.js';

function ExperienceBlock() {
    return (
        <div className='experience'>
            <ul>
                {data.map((item) => {
                    return (
                        <li key={item.id}>
                            { item.title && <h1 className='experience__title'>{item.title}</h1> }
                            { item.content && <div className='experience__description'>{item.content}</div> }
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default ExperienceBlock;