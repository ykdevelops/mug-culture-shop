import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import productModalStyles from '../styles/productModal.module.css';
import { LayoutGroup, motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router';
import products from '../data/products';
import ProductGallery from '../components/ui/ProductGallery'
import ProductDetails from '../components/ui/ProductDetails'

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

const product = () => {
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

    if (!product) {
        return <div>Product not found</div>;
    }


    return (
        <div className={productModalStyles.productModal} variants={modalVariants} initial="hidden" animate="visible">
            <div className={productModalStyles.container}>
                <div className={productModalStyles.closeBtnRow}>

                    <motion.button
                        initial="rest"
                        whileHover="hover"
                        whileTap="pressed"
                        variants={buttonVariants}
                        onClick={() => { router.back(); }}
                        className={productModalStyles.closeBtn}
                    >
                        <AiOutlineClose />
                    </motion.button>
                </div>
                <div className={productModalStyles.productDetails}>
                    <div className={productModalStyles.visual}>

                        <motion.div className={productModalStyles.leftArrowColumn} onClick={prevImage} variants={arrowVariants} whileHover="hover" whileTap="tap">
                            <AiOutlineLeft className={productModalStyles.arrowIcon} />
                        </motion.div>
                        <div className={productModalStyles.photo} variants={imageVariants} initial="hidden" animate="visible">
                            <img src={product.images[currentImageIndex]} alt={product.name} />
                        </div>
                        <motion.div className={productModalStyles.rightArrowColumn} onClick={nextImage} variants={arrowVariants} whileHover="hover" whileTap="tap">
                            <AiOutlineRight className={productModalStyles.arrowIcon} />
                        </motion.div></div>



                    <ProductDetails />
                </div>
            </div>
        </div>
    );

};

export default product;
