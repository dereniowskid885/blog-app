import React, { useState } from 'react';
import './Cart.scss';
import { Link } from 'react-router-dom';
import Breadcrumbs from '/src/components/layout/Breadcrumbs/Breadcrumbs';
import { useCart } from '/src/contexts/CartContext';
import ShopSteps from './ShopSteps/ShopSteps';
import CartProducts from './CartProducts/CartProducts';
import OrderForm from './OrderForm/OrderForm';
import Summary from './Summary/Summary';
import Confirm from './Confirm/Confirm';
import ScrollToTop from '/src/components/other/ScrollToTop/ScrollToTop';

function Cart() {
    const [ errors, setErrors ] = useState();
    const [ orderForm, setOrderForm ] = useState({});
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
                            <>
                                <CartProducts
                                    next={nextStep}
                                    back={backStep}
                                />
                                <ScrollToTop />
                            </>
                        }
                        { cartStep === 2 &&
                            <>
                                <OrderForm
                                    next={nextStep}
                                    back={backStep}
                                    orderForm={orderForm}
                                    setOrderForm={setOrderForm}
                                    errors={errors}
                                />
                                <ScrollToTop />
                            </>
                        }
                        { cartStep === 3 &&
                            <>
                                <Summary
                                    next={nextStep}
                                    back={backStep}
                                    orderForm={orderForm}
                                    setErrors={setErrors}
                                    goToForm={backStep}
                                />
                                <ScrollToTop />
                            </>
                        }
                    </div>
                }
                { isOrderFinished &&
                    <>
                        <Confirm />
                        <ScrollToTop />
                    </>
                }
                { (!isCartFilled && !isOrderFinished) &&
                    <div className='cart__empty'>
                        <h2>{'Twój koszyk jest aktualnie pusty'}</h2>
                        <Link to={'/oferta'}>
                            <button className='btn btn--transparent'>
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