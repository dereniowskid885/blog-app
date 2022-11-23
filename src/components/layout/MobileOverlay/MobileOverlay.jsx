import React from 'react';
import './MobileOverlay.scss';

function MobileOverlay({ hideMobileNav }) {
    return <div className='mobile-overlay' onClick={hideMobileNav} />
}

export default MobileOverlay;