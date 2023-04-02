import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [isCheckingOut, setIsCheckingOut] = useState(false);

    const addToCart = (product, quantity) => {
        const existingItemIndex = cart.findIndex((item) => item.product.id === product.id);
        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += quantity;
            setCart(updatedCart);
        } else {
            setCart([...cart, { product, quantity }]);
        }
    };

    const removeItem = (productId) => {
        const updatedCart = cart.filter((item) => item.product.id !== productId);
        setCart(updatedCart);
    };

    const clearCart = () => {
        setCart([]);
    };

    const proceedToCheckout = () => {
        setIsCheckingOut(true);
    };

    const handleCheckout = (userData, paymentOption) => {
        // Process the user data and payment option here.
        // For example, you can send the data to your server or a third-party service for further processing.
        console.log('User Data:', userData);
        console.log('Payment Option:', paymentOption);
        clearCart();
        setIsCheckingOut(false);
    };

    const total = cart.reduce(
        (total, item) => total + (item.product ? item.product.price * item.quantity : 0),
        0
    ).toFixed(2);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeItem,
                clearCart,
                isCheckingOut,
                proceedToCheckout,
                handleCheckout,
                total,
                setCart, // add setCart to the context
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

const useCart = () => {
    const { cart, addToCart, removeItem, clearCart, isCheckingOut, proceedToCheckout, handleCheckout, total, setCart } =
        useContext(CartContext);

    return {
        cart,
        addToCart,
        removeItem,
        clearCart,
        isCheckingOut,
        proceedToCheckout,
        handleCheckout,
        total,
        setCart, // return setCart from the hook
    };
};

export { CartContext, CartProvider, useCart };
