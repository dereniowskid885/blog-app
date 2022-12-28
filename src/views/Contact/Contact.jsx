import React from 'react';
import './Contact.scss';
import Breadcrumbs from '/src/components/layout/Breadcrumbs/Breadcrumbs';
import data from '/src/data/Contact.js';
import ContactBlock from '/src/components/layout/ContactBlock/ContactBlock';
import { useDialog } from '/src/contexts/DialogContext';
import Dialog from '/src/components/layout/Dialog/Dialog';
import Mail from '/src/components/layout/Dialog/Message/Mail/Mail';

function Contact() {
    const { 
        showDialog,
        toggleDialog
    } = useDialog();

    return (
        <main className='contact'>
            <Breadcrumbs />
            <h1 className='contact__title'>
                {'Kontakt'}
            </h1>
            <ContactBlock data={data} />
            { showDialog &&
                <Dialog>
                    <Mail closeDialog={toggleDialog} />
                </Dialog>
            }
        </main>
    );
}

export default Contact;