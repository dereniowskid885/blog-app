import React from 'react';
import './Carousel.scss';
import ElasticCarousel from '@itseasy21/react-elastic-carousel';

const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
    { width: 768, itemsToShow: 3, itemsToScroll: 1 },
    { width: 1200, itemsToShow: 4, itemsToScroll: 1 }
];

function Carousel(props) {
    return (
        <div className='carousel'>
            <h2>{props.title}</h2>
            <div className='carousel__content'>
                <ElasticCarousel itemPadding={[0, 10]} breakPoints={breakPoints}>
                    {props.data.map((item) => {
                        return (
                            <props.block
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                text={item.text}
                                title={item.title}
                                date={item.date}
                                img={item.img}
                            />
                        );
                    })}
                </ElasticCarousel>
            </div>
        </div>
    )
}

export default Carousel;