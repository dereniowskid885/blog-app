import React from 'react';
import './Carousel.scss';
import ElasticCarousel from '@itseasy21/react-elastic-carousel';
import OpinionItem from './OpinionItem/OpinionItem';
import data from '../../../data/Opinions';

const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
    { width: 768, itemsToShow: 3, itemsToScroll: 1 },
    { width: 1200, itemsToShow: 4, itemsToScroll: 1 }
];

function Carousel() {
    return (
        <div className='carousel'>
            <h2>{'Opinie moich podopiecznych'}</h2>
            <div className='carousel__content'>
                <ElasticCarousel itemPadding={[0, 10]} breakPoints={breakPoints}>
                    {data.map((item) => {
                        return (
                            <OpinionItem
                                key={item.id}
                                name={item.name}
                                text={item.text}
                            />
                        );
                    })}
                </ElasticCarousel>
            </div>
        </div>
    )
}

export default Carousel;