import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { MdClose } from 'react-icons/md';
import cartStyles from '../styles/cart.module.css';
import { useRouter } from 'next/router';
const cartPage = ({ onClose }) => {
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
    const router = useRouter();
    return (
        <div className={cartStyles.cart}>
            <div className={cartStyles.cartContainer}>
                <div className={cartStyles.closeBtnRow}>

                    <button className={cartStyles.closeBtn} onClick={() => { router.back(); }}><MdClose /></button>
                </div>
                <div className={cartStyles.cartHeader}>
                    Your Cart
                </div>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        <ul>
                            {cart.map((item) => (
                                <li key={item.product.id}>
                                    {item.product.name} - ${item.product.price} x {item.quantity}
                                    <button className={cartStyles.removeButton} onClick={() => removeItem(item.product.id)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                        <div className={cartStyles.totalCosts}>Total: ${total}</div>
                        {/* <StripeCheckout
                            name="Mug Shop"
                            description="Custom Designed Ceramic Coffee Mugs"
                            amount={total * 100} // Stripe requires the amount to be in cents
                            token={handleSubmit}
                            stripeKey={process.env.STRIPE_API_KEY}
                        /> */}
                    </>
                )}
            </div>
        </div>
    );
};

export default cartPage;
