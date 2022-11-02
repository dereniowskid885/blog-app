import React from 'react';
import './MobileOverlay.scss';

function MobileOverlay(props) {
    return <div className='mobile-overlay' onClick={props.hideMobileNav} />
}

export default MobileOverlay;