import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [isCheckingOut, setIsCheckingOut] = useState(false);

    useEffect(() => {
        // Load cart from localStorage if it exists
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    useEffect(() => {
        // Save cart to localStorage whenever it changes
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, quantity) => {
        setCart([...cart, { product, quantity }]);
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

    const numberOfItems = cart.reduce((count, item) => count + item.quantity, 0);

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
                numberOfItems,
                total,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

const useCart = () => {
    const {
        cart,
        addToCart,
        removeItem,
        clearCart,
        isCheckingOut,
        proceedToCheckout,
        handleCheckout,
        numberOfItems,
        total,
    } = useContext(CartContext);

    return {
        cart,
        addToCart,
        removeItem,
        clearCart,
        isCheckingOut,
        proceedToCheckout,
        handleCheckout,
        numberOfItems,
        total,
    };
};

export { CartContext, CartProvider, useCart };
