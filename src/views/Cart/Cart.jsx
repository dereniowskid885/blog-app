import React, { useState } from 'react';
import './Cart.scss';
import { Link } from 'react-router-dom';
import Breadcrumbs from '/src/components/layout/Breadcrumbs/Breadcrumbs';
import { useCart } from '/src/contexts/CartContext';
import ShopSteps from '/src/components/layout/ShopSteps/ShopSteps';
import Products from './Products/Products';
import Order from './Order/Order';
import Summary from './Summary/Summary';
import Confirm from './Confirm/Confirm';

function Cart() {
    const [ order, setOrder ] = useState({});
    const [ cartStep, setCartStep ] = useState(1);
    const { state: { cart } } = useCart();
    const isCartFilled = cart.length > 0;
    const isOrderFinished = cartStep === 4;

    const nextStep = () => {
        setCartStep(cartStep + 1)
    };

    const backStep = () => {
        if (cartStep !== 1) setCartStep(cartStep - 1);
    };

    return (
        <main className='cart'>
            <Breadcrumbs />
            <div className='cart__content'>
                { isCartFilled &&
                    <div className='cart__container'>
                        { !isOrderFinished &&
                            <ShopSteps cartStep={cartStep} />
                        }
                        { cartStep === 1 &&
                            <Products
                                next={nextStep}
                                back={backStep}
                            />
                        }
                        { cartStep === 2 &&
                            <Order
                                next={nextStep}
                                back={backStep}
                                setOrder={setOrder}
                            />
                        }
                        { cartStep === 3 &&
                            <Summary
                                next={nextStep}
                                back={backStep}
                                order={order}
                            />
                        }
                    </div>
                }
                { isOrderFinished &&
                    <Confirm />
                }
                { (!isCartFilled && !isOrderFinished) &&
                    <div className='cart__empty'>
                        <h2>{'Twój koszyk jest aktualnie pusty'}</h2>
                        <Link to={'/oferta'}>
                            <button className='btn'>
                                {'Wróć do zakupów'}
                            </button>
                        </Link>
                    </div>
                }
            </div>
        </main>
    );
}

export default Cart;