import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.scss';
import CartContext from '/src/contexts/CartContext';
import DialogContext from '/src/contexts/DialogContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DialogContext>
            <CartContext>
                <App />
            </CartContext>
        </DialogContext>
    </React.StrictMode>
);
