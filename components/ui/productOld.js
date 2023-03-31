import { useState } from 'react';
import styles from '../../styles/Home.module.css';
import { AiOutlineLeftCircle } from 'react-icons/ai';
import { AiOutlineRightCircle } from 'react-icons/ai';

export default function product() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHighlightsExpanded, setIsHighlightsExpanded] = useState(false);
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
    const [isShippingExpanded, setIsShippingExpanded] = useState(false);
    const images = ['/mug1.1.jpeg', '/mug1.2.jpeg', '/mug1.3.jpeg', '/mug1.4.jpeg',];

    const handleLeftArrowClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleRightArrowClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handleAddToCartClick = () => {
        // Implement "Add to Cart" functionality here
        console.log('Added to cart');
    };

    const handleHighlightsClick = () => {
        setIsHighlightsExpanded((prevIsExpanded) => !prevIsExpanded);
    };

    const handleDescriptionClick = () => {
        setIsDescriptionExpanded((prevIsExpanded) => !prevIsExpanded);
    };

    const handleShippingClick = () => {
        setIsShippingExpanded((prevIsExpanded) => !prevIsExpanded);
    };

    return (
        <div className={styles.container}>
            <div className={styles.visual}>
                <div className={styles.leftArrowColumn} onClick={handleLeftArrowClick}>
                    <AiOutlineLeftCircle className={styles.arrowIcon} />
                </div>
                <div className={styles.photo}>
                    <img src={images[currentImageIndex]} alt="Product" />
                </div>
                <div className={styles.rightArrowColumn} onClick={handleRightArrowClick}>
                    <AiOutlineRightCircle className={styles.arrowIcon} />
                </div>
            </div>
            <div className={styles.description}>
                <h2>$20.52</h2>
                <p>Custom Designed Ceramic Coffee Mug | Cat, Coffee Break | 11oz Gloss White Mug </p>
                <button onClick={handleAddToCartClick}>Add to Cart</button>
                <div className={styles.highlights} onClick={handleHighlightsClick}>
                    Highlights {isHighlightsExpanded ? '▲' : '▼'}
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
                <div className={styles.descriptionTitle} onClick={handleDescriptionClick}>
                    Description {isDescriptionExpanded ? '▲' : '▼'}
                </div>
                {isDescriptionExpanded && (
                    <div className={styles.descriptionContent}>
                        <p>This custom-designed coffee mug features a cute cat taking a coffee break. It has an 11oz capacity and is made of high-quality ceramic material that is both dishwasher and microwave safe. The mug has a glossy white finish and is perfect for coffee lovers and cat enthusiasts alike.</p>
                    </div>
                )}
                <div className={styles.shipping} onClick={handleShippingClick}>
                    Shipping and return policies {isShippingExpanded ? '▲' : '▼'}
                </div>
                {isShippingExpanded && (
                    <div className={styles.shippingContent}>
                        <h3>Shipping Policy</h3>
                        <p>We offer free shipping on all orders. Your order will be processed within 1-2 business days and will be delivered within 5-7 business days.</p>
                        <h3>Return Policy</h3>
                        <p>If you are not satisfied with your purchase, you may return it within 30 days for a full refund. Please contact us to initiate a return.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
