import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import Checkout from './Checkout';
import { MdClose } from 'react-icons/md';

const Cart = () => {
    const { cart, isCheckingOut, proceedToCheckout, handleCheckout, clearCart, removeItem } = useCart();
    const [userData, setUserData] = useState({});
    const [paymentOption, setPaymentOption] = useState('paypal');
    const [isCartOpen, setIsCartOpen] = useState(true);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    const handlePaymentOptionChange = (event) => {
        setPaymentOption(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleCheckout(userData, paymentOption);
    };

    const handleCloseCart = () => {
        setIsCartOpen(false);
    };

    const total = cart.reduce((acc, item) => {
        return acc + item.product.price * item.quantity;
    }, 0);

    return (
        <>
            {isCartOpen && (
                <div className="cart">
                    <div className='cart-container'>
                        <div className='close-btn-row'>
                            <button className="close-btn" onClick={handleCloseCart}><MdClose />
                            </button>
                        </div>
                        <div className="cart-header"></div>

                        <h2>Your Cart</h2>
                        {cart.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            <>
                                <ul>
                                    {cart.map((item) => (
                                        <li key={item.product.id}>
                                            {item.product.name} - ${item.product.price} x {item.quantity}
                                            <button onClick={() => removeItem(item.product.id)}>Remove</button>
                                        </li>
                                    ))}
                                </ul>
                                <p>Total: ${total}</p>
                                {!isCheckingOut ? (
                                    <button onClick={proceedToCheckout}>Checkout</button>
                                ) : (
                                    <Checkout
                                        userData={userData}
                                        paymentOption={paymentOption}
                                        handleInputChange={handleInputChange}
                                        handlePaymentOptionChange={handlePaymentOptionChange}
                                        handleSubmit={handleSubmit}
                                    />
                                )}
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Cart;
