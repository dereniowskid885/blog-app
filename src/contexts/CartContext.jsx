import { useContext, createContext, useReducer, useState, useEffect } from 'react';

const Cart = createContext();

const ACTIONS = {
    ADD_TO_CART: 'add-to-cart',
    REMOVE_FROM_CART: 'remove-from-cart',
    CHANGE_ITEM_QTY: 'change-item-qty'
}

function CartContext({ children }) {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/offer/', {
            method: 'GET'
        })
        .then(response => {
            if(response.ok) {
                return response.json();
            }
        })
        .then(data => {
            if(data) {
                setProducts(data);
            }
        })
        .catch(error => {
            console.log('Error: ', error);
        });
    }, []);

    const reducer = (state, action) => {
        switch (action.type) {
            case ACTIONS.ADD_TO_CART:
                const itemAlreadyAdded = state.cart.find(item => item.id === action.payload.id);

                if (itemAlreadyAdded) {
                    return {
                        ...state,
                        cart: state.cart.map(item => item.id === action.payload.id ?
                            {
                                ...item,
                                quantity: item.quantity + 1
                            }
                        :
                            item
                        )
                    }
                }

                return {
                    ...state,
                    cart: [
                        ...state.cart,
                        {
                            ...action.payload,
                            quantity: 1
                        }
                    ]
                };
            case ACTIONS.REMOVE_FROM_CART:
                return {
                    ...state,
                    cart: state.cart.filter(item => item.id !== action.payload.id)
                };
            case ACTIONS.CHANGE_ITEM_QTY:
                return {
                    ...state,
                    cart: state.cart.filter(item => item.id === action.payload.id ?
                        item.quantity = action.payload.quantity
                    :
                        item.quantity
                    )
                };
            default:
                return state;
        }
    }

    const initState = {
        cart: []
    }

    const [ state, setCart ] = useReducer(reducer, initState);

    return (
        <Cart.Provider value={{ state, setCart, ACTIONS, products }}>
            {children}
        </Cart.Provider>
    );
}

export default CartContext;

export const useCart = () => {
    return useContext(Cart);
}