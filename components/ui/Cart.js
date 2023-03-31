import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import Checkout from './Checkout';

const Cart = () => {
    const { cart, isCheckingOut, proceedToCheckout, handleCheckout } = useCart();
    const [userData, setUserData] = useState({});
    const [paymentOption, setPaymentOption] = useState('paypal');

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

    const total = cart.reduce(
        (total, item) => total + (item.product ? item.product.price * item.quantity : 0),
        0
    ).toFixed(2);

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={`${item.id}-${index}`}>
                                {item.product.name} - ${item.product.price} x {item.quantity}
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
    );
};

export default Cart;
