import React from 'react';
import './Contact.scss';
import Phone from '/src/assets/phone.svg';
import Email from '/src/assets/email.svg';
import { FaRegCopy } from 'react-icons/fa';
import data from '/src/data/Contact.js';

function Contact() {
    const copyToClipboard = e => {
        const parentElement = e.target.parentElement;
        
        navigator.clipboard.writeText(parentElement.innerText);

        if (!parentElement.className) {
            parentElement.className = 'active';
        }

        setTimeout(() => {
            parentElement.className = '';
        }, 700);
    };

    return (
        <div className='contact'>
            <div className='contact__content'>
                { data.title && <h2>{data.title}</h2> } 
                { data.subtitle && <h3>{data.subtitle}</h3> }
                <div className='contact__info'>
                    <ul>
                        { data.email &&
                            <li>
                                <img className='contact__icon' src={Email} alt='Email' />
                                {data.email}
                                <FaRegCopy onClick={copyToClipboard} />
                            </li>
                        }
                        { data.phone &&
                            <li>
                                <img className='contact__icon' src={Phone} alt='Phone' />
                                {data.phone}
                                <FaRegCopy onClick={copyToClipboard} />
                            </li>
                        }
                    </ul>
                </div>
            </div>
            { data.img &&
                <div className='contact__image'>
                    <img src={data.img} alt='contact' />
                </div>
            }
        </div>
    )
}

export default Contact;