import { useContext, createContext, useReducer } from 'react';
import data from '/src/data/Offer';

const Cart = createContext();

const ACTIONS = {
    ADD_TO_CART: 'add-to-cart',
    REMOVE_FROM_CART: 'remove-from-cart',
    CHANGE_ITEM_QTY: 'change-item-qty'
}

function CartContext({ children }) {
    const reducer = (state, action) => {
        switch (action.type) {
            case ACTIONS.ADD_TO_CART:
                return {
                    ...state,
                    cart: [
                        ...state.cart,
                        {
                            ...action.payload,
                            quantity: 1
                        }
                    ],
                    showDialog: true
                };
            case ACTIONS.REMOVE_FROM_CART:
                return {
                    ...state,
                    cart: state.cart.filter(item =>
                        item.id !== action.payload.id
                    )
                };
            case ACTIONS.CHANGE_ITEM_QTY:
                return {
                    ...state,
                    cart: state.cart.filter(item =>
                        item.id === action.payload.id ?
                            (item.quantity = action.payload.quantity)
                        :
                            item.quantity
                    )
                };
            default:
                return state;
        }
    }

    const initState = {
        productsData: data,
        cart: []
    }

    const [ state, setCart ] = useReducer(reducer, initState);

    return (
        <Cart.Provider value={{ state, setCart, ACTIONS }}>
            {children}
        </Cart.Provider>
    );
}

export default CartContext;

export const CartState = () => {
    return useContext(Cart);
}