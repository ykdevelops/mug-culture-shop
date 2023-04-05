import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import productStyles from '../../styles/product.module.css';
import { AnimatePresence, motion } from 'framer-motion';

const ProductCard = ({ product }) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const productVariants = {
        normal: {
            scale: 1,
        },
        hovered: {
            scale: 1.05,
            transition: {
                duration: 0.3,
            },
            boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.2)',
        },
    };

    return (
        <>
            <Link href={`/${product.id}`}>
                <motion.div
                    className={productStyles.product}
                    variants={productVariants}
                    whileHover="hovered"
                    whileTap="normal"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}
                >
                    <img src={product.images[0]} alt={product.name} />
                    <span className={productStyles.name}>{product.name}</span>
                    <span className={productStyles.price}>${product.price}</span>
                </motion.div>
            </Link>
        </>
    );
};

export default ProductCard;
