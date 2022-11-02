import React from 'react';
import './Contact.scss';
import Phone from '/src/assets/phone.svg';
import Email from '/src/assets/email.svg';
import { FaRegCopy } from 'react-icons/fa';

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
                <h2>{'Masz pytania ?'}</h2>
                <h3>{'Chętnie na nie odpowiem. Skontaktuj się ze mną!'}</h3>
                <div className='contact__info'>
                    <ul>
                        <li>
                            <img className='contact__icon' src={Email} alt='Email' />
                            {'kolarstwoodkuchni@gmail.com'}
                            <FaRegCopy onClick={copyToClipboard} />
                        </li>
                        <li>
                            <img className='contact__icon' src={Phone} alt='Phone' />
                            {'+48 515035890'}
                            <FaRegCopy onClick={copyToClipboard} />
                        </li>
                    </ul>
                </div>
            </div>
            <div className='contact__image'>
                <img src='/src/assets/contact_image.jpg' alt='thoughtful man' />
            </div>
        </div>
    )
}

export default Contact;