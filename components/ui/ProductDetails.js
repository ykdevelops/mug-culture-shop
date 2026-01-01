import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import productModalStyles from '../../styles/productModal.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import products from '../../data/products';

const modalVariants = {
    hidden: {
        opacity: 0,
        x: '-100vw',
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 150,
            damping: 10,
        },
    },
    exit: {
        opacity: 0,
        x: '-100vw',
        transition: {
            ease: 'easeInOut',
        },
    },
};

const ProductDetails = () => {
    const router = useRouter();
    const { productId } = router.query;
    const product = products.find((product) => product.id === parseInt(productId));
    
    const [isHighlightsExpanded, setIsHighlightsExpanded] = useState(false);
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(true); // Expanded by default
    const [isShippingExpanded, setIsShippingExpanded] = useState(false);
    const {
        cart,
        addToCart,
        setCart,
    } = useCart();

    const handleAddToCart = (event) => {
        event.stopPropagation();
        if (!product) return;
        
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
    };

    const handleHighlightsClick = () => {
        setIsHighlightsExpanded(!isHighlightsExpanded);
    };

    const handleDescriptionClick = () => {
        setIsDescriptionExpanded(!isDescriptionExpanded);
    };

    const handleShippingClick = () => {
        setIsShippingExpanded(!isShippingExpanded);
    };
    const arrowVariants = {
        hover: { scale: 1.2 },
        tap: { scale: 0.8 },
    };
    const imageVariants = {
        hidden: { x: "-100vw" },
        visible: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 10
            }
        },
        exit: {
            x: "-100vw",
            transition: {
                ease: "easeInOut"
            }
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.02,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
            },
        },
        pressed: {
            scale: 0.98,
            transition: {
                duration: 0.1,
            },
        },
        rest: {
            scale: 1,
        },
    };
    const expandVariants = {
        hidden: { 
            height: 0, 
            opacity: 0,
            transition: {
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1],
            },
        },
        visible: {
            height: 'auto',
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1],
            },
        },
        exit: {
            height: 0,
            opacity: 0,
            transition: {
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1],
            },
        },
    };

    if (!product) return null;

    return (
        <div className={productModalStyles.description}>
            <div className={productModalStyles.headerSection}>
                <h2 className={productModalStyles.productTitle}>{product.name}</h2>
                {product.subtitle && (
                    <p className={productModalStyles.productSubtitle}>{product.subtitle}</p>
                )}
                <div className={productModalStyles.priceSection}>
                    <span className={productModalStyles.price}>${product.price}</span>
                </div>
            </div>

            <motion.button
                initial="rest"
                whileHover="hover"
                whileTap="pressed"
                variants={buttonVariants}
                onClick={handleAddToCart}
                className={productModalStyles.addToCart}
            >
                Add to Cart
            </motion.button>

            <div className={productModalStyles.accordionSection}>
                <motion.div 
                    className={productModalStyles.extraTitle} 
                    onClick={handleDescriptionClick}
                    whileHover={{ opacity: 0.7 }}
                >
                    <span>Description</span>
                    <motion.span
                        animate={{ rotate: isDescriptionExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <MdOutlineKeyboardArrowDown />
                    </motion.span>
                </motion.div>
                <AnimatePresence>
                    {isDescriptionExpanded && (
                        <motion.div 
                            initial="hidden" 
                            animate="visible" 
                            exit="exit" 
                            variants={expandVariants}
                        >
                            <div className={productModalStyles.descriptionContent}>
                                <p>{product.description || 'A beautifully crafted ceramic mug designed to enhance your daily coffee experience.'}</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div 
                    className={productModalStyles.extraTitle} 
                    onClick={handleHighlightsClick}
                    whileHover={{ opacity: 0.7 }}
                >
                    <span>Highlights</span>
                    <motion.span
                        animate={{ rotate: isHighlightsExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <MdOutlineKeyboardArrowDown />
                    </motion.span>
                </motion.div>
                <AnimatePresence>
                    {isHighlightsExpanded && (
                        <motion.div 
                            initial="hidden" 
                            animate="visible" 
                            exit="exit" 
                            variants={expandVariants}
                        >
                            <ul className={productModalStyles.highlightsList}>
                                {(product.highlights || []).map((highlight, index) => (
                                    <li key={index}>{highlight}</li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div 
                    className={productModalStyles.extraTitle} 
                    onClick={handleShippingClick}
                    whileHover={{ opacity: 0.7 }}
                >
                    <span>Shipping & Returns</span>
                    <motion.span
                        animate={{ rotate: isShippingExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <MdOutlineKeyboardArrowDown />
                    </motion.span>
                </motion.div>
                <AnimatePresence>
                    {isShippingExpanded && (
                        <motion.div 
                            initial="hidden" 
                            animate="visible" 
                            exit="exit" 
                            variants={expandVariants}
                        >
                            <div className={productModalStyles.shippingContent}>
                                <h4>Shipping Policy</h4>
                                <p>
                                    We offer free shipping on all orders. Your order will be processed within 1-2 business days and will be delivered within 5-7 business days.
                                </p>
                                <h4>Return Policy</h4>
                                <p>
                                    If you are not satisfied with your purchase, you may return it within 30 days for a full refund. Please contact us to initiate a return.
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );

};

export default ProductDetails;
