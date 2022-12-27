import React, { useState } from 'react';
import './Cart.scss';
import { Link } from 'react-router-dom';
import Breadcrumbs from '/src/components/layout/Breadcrumbs/Breadcrumbs';
import data from '/src/data/Cart.js';
import { useCart } from '/src/contexts/CartContext';
import ShopSteps from '/src/components/layout/ShopSteps/ShopSteps';
import FirstStep from './FirstStep/FirstStep';
import SecondStep from './SecondStep/SecondStep';
import ThirdStep from './ThirdStep/ThirdStep';

function Cart() {
    const [ order, setOrder ] = useState({});
    const [ cartStep, setCartStep ] = useState(1);
    const { state: { cart } } = useCart();
    const isCartFilled = cart.length > 0;

    const nextStep = () => {
        setCartStep(cartStep + 1)
    };

    const backStep = () => {
        if (cartStep !== 1)
            setCartStep(cartStep - 1);
    };

    return (
        <main className='cart'>
            <Breadcrumbs />
            <div className='cart__content'>
                { isCartFilled ?
                    <div className='cart__container'>
                        <ShopSteps cartStep={cartStep} />
                        { cartStep === 1 &&
                            <FirstStep
                                next={nextStep}
                                back={backStep}
                            />
                        }
                        { cartStep === 2 &&
                            <SecondStep
                                next={nextStep}
                                back={backStep}
                                setOrder={setOrder}
                            />
                        }
                        { cartStep === 3 &&
                            <ThirdStep
                                next={nextStep}
                                back={backStep}
                                order={order}
                            />
                        }
                    </div>
                :
                    <div className='cart__empty'>
                        <h2>{data.empty.title}</h2>
                        <Link to={'/oferta'}>
                            <button className='btn'>
                                {data.empty.buttonText}
                            </button>
                        </Link>
                    </div>
                }
            </div>
        </main>
    );
}

export default Cart;