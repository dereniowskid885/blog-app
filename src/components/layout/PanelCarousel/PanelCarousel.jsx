import React from 'react';
import './PanelCarousel.scss';
import ElasticCarousel from '@itseasy21/react-elastic-carousel';
import Orders from '/src/components/layout/PanelCarousel/Orders/Orders';
import AccountSettings from '/src/components/layout/PanelCarousel/AccountSettings/AccountSettings';

const breakPoints = [
    { width: 1, itemsToShow: 1, itemstoScroll: 1}
]

function PanelCarousel() {
    return (
        <div className='panel-carousel'>
            <ElasticCarousel itemPadding={[0, 10]} breakPoints={breakPoints}>
                <Orders />
                <AccountSettings />
            </ElasticCarousel>
        </div>
    );
}

export default PanelCarousel;