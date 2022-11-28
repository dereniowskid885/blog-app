import React from 'react';
import './Panel.scss';
import Breadcrumbs from '/src/components/layout/Breadcrumbs/Breadcrumbs';
import LoginForm from './LoginForm/LoginForm';
import CheckIcon from '/src/assets/check-circle.svg';
import data from '/src/data/Panel.js';

function Panel() {
    return (
        <main className='panel'>
            { data.title &&
                <Breadcrumbs title={data.title} />
            }
            <div className='panel__container'>
                { data.loginTitle &&
                    <div className='panel__login'>
                        <LoginForm title={data.loginTitle} />
                    </div>
                }
                { data.register &&
                    <div className='panel__register'>
                        <div className='panel__wrapper'>
                            { data.register.title &&
                                <h2>{data.register.title}</h2>
                            }
                            { data.register.subtitle &&
                                <div className='panel__subtitle'>{data.register.subtitle}</div>
                            }
                            <ul>
                                {data.register.list.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <img src={CheckIcon} alt='check' />
                                            {item}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        { data.register.buttonText &&
                            <div className='panel__button'>
                                <button className='btn'>{data.register.buttonText}</button>
                            </div>
                        }
                    </div>
                }
            </div>
        </main>
    )
}

export default Panel;