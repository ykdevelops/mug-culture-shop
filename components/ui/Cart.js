import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import Checkout from './Checkout';
import { MdClose } from 'react-icons/md';

const Cart = ({ items }) => {
    const { isCheckingOut, proceedToCheckout, handleCheckout } = useCart();
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

    const total = items.reduce(
        (total, item) => total + (item.product ? item.product.price * item.quantity : 0),
        0
    ).toFixed(2);

    const handleCloseCart = () => {
        setIsCartOpen(false);
    };

    return (
        <>
            {isCartOpen && <div className="cart">
                <div className='cart-container'>
                    <div className="cart-header">
                        <h2>Your Cart</h2>
                        <button className="close-btn" onClick={handleCloseCart}><MdClose /></button>
                    </div>
                    {items.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <>
                            <ul>
                                {items.map((item, index) => (
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

            </div>}
        </>
    );
};

export default Cart;
