import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { AiOutlineLeftCircle } from 'react-icons/ai';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
const ProductModal = ({ product, closeModal }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHighlightsExpanded, setIsHighlightsExpanded] = useState(false);
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
    const [isShippingExpanded, setIsShippingExpanded] = useState(false);
    const { cart, addToCart, removeItem, clearCart, isCheckingOut, proceedToCheckout, handleCheckout, total, setCart } = useCart();

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
        console.log('Cart before:', cart);
        console.log('Cart after:', cart);
        closeModal();
    };


    const handleCloseModal = (event) => {
        event.stopPropagation();
        console.log("close button triggered")
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
    return (
        <div className="product-modal">
            <div className='container'>
                <div className='close-btn-row'><button className="close-btn" onClick={handleCloseModal}>X</button></div>
                <div className='product-details'>

                    <div className='visual'>
                        <div className='leftArrowColumn' onClick={prevImage}>
                            <AiOutlineLeftCircle className='arrowIcon' />
                        </div>
                        <div className='photo'>
                            <img src={product.images[currentImageIndex]} alt={product.name} />
                        </div>
                        <div className='rightArrowColumn' onClick={nextImage}>
                            <AiOutlineRightCircle className='arrowIcon' />
                        </div>
                    </div>
                    <div className='description'>
                        <h2>{product.name}</h2>
                        <p>${product.price}</p>
                        <p>Custom Designed Ceramic Coffee Mug | Cat, Coffee Break | 11oz Gloss White Mug </p>
                        <button onClick={handleAddToCart}>Add to Cart</button>
                        <div className='highlights' onClick={handleHighlightsClick}>
                            Highlights {isHighlightsExpanded ? <MdKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
                        </div>
                        {isHighlightsExpanded && (
                            <div>
                                <ul>
                                    <li>High-quality ceramic material</li>
                                    <li>Dishwasher and microwave safe</li>
                                    <li>11oz capacity</li>
                                </ul>
                            </div>
                        )}
                        <div className='descriptionTitle' onClick={handleDescriptionClick}>
                            Description {isDescriptionExpanded ? <MdKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
                        </div>
                        {isDescriptionExpanded && (
                            <div className='descriptionContent'>
                                <p>This custom-designed coffee mug features a cute cat taking a coffee break. It has an 11oz capacity and is made of high-quality ceramic material that is both dishwasher and microwave safe. The mug has a glossy white finish and is perfect for coffee lovers and cat enthusiasts alike.</p>
                            </div>
                        )}
                        <div className='shipping' onClick={handleShippingClick}>
                            Shipping and return policies {isShippingExpanded ? <MdKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
                        </div>
                        {isShippingExpanded && (
                            <div className='shippingContent'>
                                <h3>Shipping Policy</h3>
                                <p>We offer free shipping on all orders. Your order will be processed within 1-2 business days and will be delivered within 5-7 business days.</p>
                                <h3>Return Policy</h3>
                                <p>If you are not satisfied with your purchase, you may return it within 30 days for a full refund. Please contact us to initiate a return.</p>
                            </div>
                        )}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ProductModal;
