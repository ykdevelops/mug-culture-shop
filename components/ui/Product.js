import React, { useState, useEffect } from 'react';
import ProductModal from './ProductModal';
import productStyles from '../../styles/product.module.css';
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
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            {isModalOpen && <ProductModal product={product} closeModal={closeModal} />}
        </div>
    );
};

export default Product;
