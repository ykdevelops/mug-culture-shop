import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import Checkout from './Checkout';
import { MdClose } from 'react-icons/md';
import cartStyles from '../../styles/cart.module.css';

const Cart = ({ onClose }) => {
    const { cart, isCheckingOut, proceedToCheckout, handleCheckout, clearCart, removeItem } = useCart();
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

    const total = cart.reduce((acc, item) => {
        return acc + item.product.price * item.quantity;
    }, 0);

    return (
        <div className={cartStyles.cart}>
            <div className={cartStyles.cartContainer}>
                <div className={cartStyles.closeBtnRow}>
                    <button className={cartStyles.closeBtn} onClick={onClose}><MdClose /></button>
                </div>
                <div className={cartStyles.cartHeader}>
                    <h2>Your Cart</h2>
                </div>
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
    );
};

export default Cart;
