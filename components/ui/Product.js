import React, { useState, useEffect } from 'react';
import ProductModal from './ProductModal';
import productStyles from '../../styles/product.module.css';
import { AnimatePresence, motion } from 'framer-motion';
const Product = ({ product }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        console.log('isModalOpen changed:', isModalOpen);
    }, [isModalOpen]);

    return (
        <div className={productStyles.product} onClick={openModal}>
            <img src={product.images[0]} alt={product.name} />
            <span className={productStyles.name}>{product.name}</span>
            <span className={productStyles.price}>${product.price}</span>
            <AnimatePresence>
                {isModalOpen && <motion.div
                    key="modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                > <ProductModal product={product} closeModal={closeModal} />
                </motion.div>}
            </AnimatePresence>

        </div>
    );
};

export default Product;
