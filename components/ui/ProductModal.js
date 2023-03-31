import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';

const ProductModal = ({ product, closeModal }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { cart, addToCart, setCart } = useCart(); // update the useCart hook

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : product.images.length - 1));
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
    };

    const handleAddToCart = (event) => {
        event.stopPropagation();
        const existingItemIndex = cart.findIndex((item) => item.product.id === product.id);
        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += 1;
            setCart(updatedCart);
        } else {
            addToCart(product, 1);
        }
        closeModal();
    };
    const handleCloseModal = (event) => {
        event.stopPropagation();
        console.log("close button triggered")
        closeModal();
    };


    return (
        <div className="product-modal">
            <button className="close-btn" onClick={handleCloseModal}>X</button>
            <h2>{product.name}</h2>
            <img src={product.images[currentImageIndex]} alt={product.name} />
            <button onClick={prevImage}>Prev</button>
            <button onClick={nextImage}>Next</button>
            <p>${product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductModal;
