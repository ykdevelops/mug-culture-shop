import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { MdClose } from 'react-icons/md';
import cartStyles from '../styles/cart.module.css';
import { useRouter } from 'next/router';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const Cart = () => {
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

    const redirectToCheckout = async () => {
        const stripe = await stripePromise;

        const lineItems = cart.map((item) => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.product.name,
                },
                unit_amount: item.product.price * 100, // Stripe uses cents
            },
            quantity: item.quantity,
        }));

        const response = await fetch('/api/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ lineItems }),
        });

        const session = await response.json();

        if (session.error) {
            console.error('Error creating checkout session:', session.error.message);
            return;
        }

        const result = await stripe.redirectToCheckout({ sessionId: session.id });

        if (result.error) {
            console.error('Error redirecting to checkout:', result.error.message);
        }
    };

    return (
        <div className={cartStyles.cart}>
            <div className={cartStyles.cartContainer}>
                <div className={cartStyles.headerRow}>
                    <div className={cartStyles.cartTitle}>
                        Your Cart
                    </div>
                    <button className={cartStyles.closeBtn} onClick={() => { router.back(); }}><MdClose /></button>
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
                        {/* <button className={cartStyles.checkoutButton} onClick={redirectToCheckout}>
                            Proceed to Checkout
                        </button> */}
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
