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
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHighlightsExpanded, setIsHighlightsExpanded] = useState(false);
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
    const [isShippingExpanded, setIsShippingExpanded] = useState(false);
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

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : product.images.length - 1
        );
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % product.images.length
        );
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
        router.back();
    };

    const handleCloseModal = (event) => {
        event.stopPropagation();
        console.log('close button triggered');
        closeModal();
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
            scale: 1.1,
        },
        pressed: {
            scale: 0.5,
        },
        rest: {
            scale: 1,
        },
    };
    const expandVariants = {
        hidden: { height: 0, opacity: 0 },
        visible: {
            height: 'auto',
            opacity: 1,
            transition: {
                duration: 0.3,
            },
        },
        exit: {
            height: 0,
            opacity: 0,
            transition: {
                duration: 0.3,
            },
        },
    };
    const router = useRouter();
    const { productId } = router.query;
    const product = products.find((product) => product.id === parseInt(productId));

    return (
        <div className={productModalStyles.description}>
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <p>Custom Designed Ceramic Coffee Mug | Cat, Coffee Break | 11oz Gloss White Mug </p>
            <motion.button
                initial="rest"
                whileHover="hover"
                whileTap="pressed"
                variants={buttonVariants}
                onClick={handleAddToCart}
                className={productModalStyles.addToCart}
            >Add to Cart</motion.button>

            <div className={productModalStyles.extraTitle} onClick={handleHighlightsClick}>
                Highlights {isHighlightsExpanded ? <MdKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
            </div>
            <motion.div initial="hidden" animate={isHighlightsExpanded ? 'visible' : 'hidden'} exit="exit" variants={expandVariants}>
                {isHighlightsExpanded && (
                    <div>
                        <ul>
                            <li>High-quality ceramic material</li>
                            <li>Dishwasher and microwave safe</li>
                            <li>11oz capacity</li>
                        </ul>
                    </div>
                )}
            </motion.div>

            <div className={productModalStyles.extraTitle} onClick={handleDescriptionClick}>
                Description {isDescriptionExpanded ? <MdKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
            </div>
            <motion.div initial="hidden" animate={isDescriptionExpanded ? 'visible' : 'hidden'} exit="exit" variants={expandVariants}>
                {isDescriptionExpanded && (
                    <div className={productModalStyles.descriptionContent}>
                        <p>
                            This custom-designed coffee mug features a cute cat taking a coffee break. It has an 11oz capacity and is made of high-quality ceramic material that is both dishwasher and microwave safe. The mug has a glossy white finish and is perfect for coffee lovers and cat enthusiasts alike.
                        </p>
                    </div>
                )}
            </motion.div>

            <div className={productModalStyles.extraTitle} onClick={handleShippingClick}>
                Shipping and return policies {isShippingExpanded ? <MdKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
            </div>
            <motion.div initial="hidden" animate={isShippingExpanded ? 'visible' : 'hidden'} exit="exit" variants={expandVariants}>
                {isShippingExpanded && (
                    <div className={productModalStyles.shippingContent}>
                        <h3>Shipping Policy</h3>
                        <p>
                            We offer free shipping on all orders. Your order will be processed within 1-2 business days and will be delivered within 5-7 business days.
                        </p>
                        <h3>Return Policy</h3>
                        <p>
                            If you are not satisfied with your purchase, you may return it within 30 days for a full refund. Please contact us to initiate a return.
                        </p>
                    </div>
                )}
            </motion.div>
        </div>
    );

};

export default ProductDetails;
