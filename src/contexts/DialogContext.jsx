import { useContext, createContext, useState } from 'react';
import Overlay from '/src/components/layout/Overlay/Overlay';

const Dialog = createContext();

function DialogContext({ children }) {
    const [ dialog, setDialog ] = useState(false);

    const toggleDialog = () => {
        setDialog(!dialog);
    }

    return (
        <Dialog.Provider value={{ dialog, toggleDialog }}>
            {children}
            { dialog && <Overlay hideOverlay={toggleDialog} /> }
        </Dialog.Provider>
    );
}

export default DialogContext;

export const DialogState = () => {
    return useContext(Dialog);
}