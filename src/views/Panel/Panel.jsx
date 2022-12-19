import React, { useState } from 'react';
import './Panel.scss';
import Breadcrumbs from '/src/components/layout/Breadcrumbs/Breadcrumbs';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';
import CheckIcon from '/src/assets/check-circle.svg';
import data from '/src/data/Panel.js';
import Dialog from '/src/components/layout/Dialog/Dialog';
import { useDialog } from '/src/contexts/DialogContext';
import PanelMessage from '/src/components/layout/Dialog/PanelMessage/PanelMessage';

function Panel() {
    const [ isRegister, setRegister ] = useState(false);
    const { showDialog } = useDialog();

    const toggleRegister = () => {
        setRegister(!isRegister);
    };

    return (
        <main className='panel'>
            <Breadcrumbs title={data.title} />
            <div className='panel__container'>
                { isRegister ?
                    <div className='panel__block panel__block--register'>
                        <RegisterForm hideRegister={toggleRegister} />
                    </div>
                :
                    <>
                        <div className='panel__block'>
                            <LoginForm title={data.loginTitle} />
                        </div>
                        <div className='panel__block'>
                            <div className='panel__wrapper'>
                                <h2>{data.register.title}</h2>
                                <div className='panel__subtitle'>
                                    {data.register.subtitle}
                                </div>
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
                            <div className='panel__button'>
                                <button className='btn' onClick={toggleRegister}>
                                    {data.register.buttonText}
                                </button>
                            </div>
                        </div>
                    </>
                }
            </div>
            { showDialog &&
                <Dialog>
                    <PanelMessage 
                        isRegister={isRegister}
                        hideRegister={toggleRegister}
                    />
                </Dialog>
            }
        </main>
    );
}

export default Panel;