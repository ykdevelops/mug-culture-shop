import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import productStyles from '../../styles/product.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import stripeLinks from '../../data/stripeLinks';
import { useCart } from '../../context/CartContext';
const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);
    const {
        cart,
        addToCart,
        removeItem,
        clearCart,
        isCheckingOut,
        proceedToCheckout,
        handleCheckout,
        total,
        setCart,
    } = useCart();

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleBuyNow = (e) => {
        e.preventDefault(); // prevent the default behavior of the button
        const stripeLink = stripeLinks.find(link => link.id === product.id);
        window.location.href = stripeLink.link;
    };

    const productVariants = {
        normal: {
            scale: 1,
        },
        hovered: {
            scale: 1.05,
            transition: {
                duration: 0.7,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.3,
            },
        },
    };





    const handleAddToCart = (event) => {
        event.stopPropagation();
        const existingItemIndex = cart.findIndex(
            (item) => item.product.id === product.id
        );
        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += 1;
            setCart(updatedCart);
        } else {
            addToCart(product, 1);
        }

        console.log('Cart:', cart);
    };

    return (
        <motion.div
            className={productStyles.product}
            variants={productVariants}
            whileHover="hovered"
            whileTap="normal"
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
        >
            <Link href={`/${product.id}`} className={productStyles.linkBox}>
                <img src={product.thumbnail} alt={product.name} />
                <span className={productStyles.name}>{product.name}</span>
                <span className={productStyles.price}>${product.price}</span>
            </Link>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        className={productStyles.buttonRow}
                        variants={productVariants}
                        initial="normal"
                        animate="hovered"
                        exit="exit"
                    >
                        <button
                            className={productStyles.button1}
                            onClick={handleBuyNow}
                        >
                            Buy Now
                        </button>
                        <button
                            className={productStyles.button2}
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default ProductCard;
