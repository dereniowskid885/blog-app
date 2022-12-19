import React from 'react';
import './Contact.scss';
import Breadcrumbs from '/src/components/layout/Breadcrumbs/Breadcrumbs';
import data from '/src/data/Contact.js';
import ContactBlock from '../../components/layout/ContactBlock/ContactBlock';

function Contact() {
    return (
        <main className='contact'>
            <Breadcrumbs />
            <h1 className='contact__title'>
                {data.title}
            </h1>
            <ContactBlock data={data.contactBlock} />
        </main>
    );
}

export default Contact;