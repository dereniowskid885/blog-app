import React from 'react';
import './Dialog.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { DialogState } from '/src/contexts/DialogContext';

function Dialog({ children }) {
    const { toggleDialog } = DialogState();

    return (
        <div className='dialog'>
            {children}
            <AiOutlineClose onClick={toggleDialog} />
        </div>
    )
}

export default Dialog;