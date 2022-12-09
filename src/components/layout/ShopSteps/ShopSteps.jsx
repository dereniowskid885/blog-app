import React from 'react';
import './ShopSteps.scss';
import StepIcon from '/src/assets/step-circle.svg';

function ShopSteps() {
    return (
        <div className='steps'>
            <ul>
                <li>
                    <img src={StepIcon} alt='step' />
                    <b>{'1'}</b>
                    {'Koszyk'}
                    <span>{'>'}</span>
                </li>
                <li>
                    <img src={StepIcon} alt='step' />
                    <b>{'2'}</b>
                    {'Moje dane'}
                    <span>{'>'}</span>
                </li>
                <li>
                    <img src={StepIcon} alt='step' />
                    <b>{'3'}</b>
                    {'Zamówienie'}
                </li>
            </ul>
        </div>
    )
}

export default ShopSteps;