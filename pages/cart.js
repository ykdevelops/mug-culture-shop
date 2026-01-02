import React, { useEffect, useRef, useState } from 'react';
import { useCart } from '../context/CartContext';
import { MdClose } from 'react-icons/md';
import cartStyles from '../styles/cart.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Cart = () => {
    const { cart, isCheckingOut, proceedToCheckout, handleCheckout, clearCart, removeItem } = useCart();
    const [userData, setUserData] = useState({});
    const [paymentOption, setPaymentOption] = useState('paypal');
    const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
    const [didCheckout, setDidCheckout] = useState(false);
    const checkoutTimerRef = useRef(null);
    const redirectTimerRef = useRef(null);
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
        if (!cart.length) return;
        setIsCheckoutLoading(true);
        setDidCheckout(false);

        if (checkoutTimerRef.current) clearTimeout(checkoutTimerRef.current);
        if (redirectTimerRef.current) clearTimeout(redirectTimerRef.current);

        checkoutTimerRef.current = setTimeout(() => {
            setIsCheckoutLoading(false);
            setDidCheckout(true);
            clearCart();

            // Give the user a brief moment to see the success message, then go home
            redirectTimerRef.current = setTimeout(() => {
                router.push('/');
            }, 900);
        }, 3000);
    };

    useEffect(() => {
        return () => {
            if (checkoutTimerRef.current) clearTimeout(checkoutTimerRef.current);
            if (redirectTimerRef.current) clearTimeout(redirectTimerRef.current);
        };
    }, []);

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
                    <div className={cartStyles.emptyState}>
                        <p>Your cart is empty.</p>
                        <Link className={cartStyles.continueLink} href="/">Continue shopping</Link>
                    </div>
                ) : (
                    <>
                        <div className={cartStyles.contentGrid}>
                            <div className={cartStyles.itemsPanel}>
                                <ul className={cartStyles.itemsList}>
                                    {cart.map((item) => (
                                        <li key={item.product.id}>
                                            <div className={cartStyles.itemLeft}>
                                                <img
                                                    className={cartStyles.itemThumb}
                                                    src={item.product.thumbnail}
                                                    alt={item.product.name}
                                                />
                                                <div className={cartStyles.itemMeta}>
                                                    <div className={cartStyles.itemName}>{item.product.name}</div>
                                                    <div className={cartStyles.itemSub}>
                                                        ${Number(item.product.price).toFixed(2)}{' '}
                                                        <span className={cartStyles.itemQty}>× {item.quantity}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className={cartStyles.removeButton} onClick={() => removeItem(item.product.id)}>Remove</button>
                                        </li>
                                    ))}
                                </ul>
                                <Link className={cartStyles.continueLink} href="/">Continue shopping</Link>
                            </div>

                            <aside className={cartStyles.summaryPanel}>
                                <div className={cartStyles.summaryCard}>
                                    <div className={cartStyles.summaryTitle}>Order Summary</div>
                                    <div className={cartStyles.summaryRow}>
                                        <span>Subtotal</span>
                                        <span>${Number(total).toFixed(2)}</span>
                                    </div>
                                    <div className={cartStyles.summaryRow}>
                                        <span>Shipping</span>
                                        <span>Free</span>
                                    </div>
                                    <div className={cartStyles.summaryDivider} />
                                    <div className={cartStyles.summaryRowTotal}>
                                        <span>Total</span>
                                        <span>${Number(total).toFixed(2)}</span>
                                    </div>
                                    <button
                                        className={cartStyles.checkoutButton}
                                        onClick={redirectToCheckout}
                                        disabled={isCheckoutLoading || didCheckout}
                                    >
                                        {isCheckoutLoading
                                            ? 'Preparing checkout…'
                                            : didCheckout
                                                ? 'Checked out — thank you'
                                                : 'Checkout'}
                                    </button>
                                    <div className={cartStyles.summaryNote}>
                                        Secure checkout powered by Stripe.
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
