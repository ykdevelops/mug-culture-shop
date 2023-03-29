import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/mug1.1.jpeg',
    '/mug1.2.jpeg',
    '/mug1.3.jpeg',
    '/mug1.4.jpeg',
  ];

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

  return (
    <div className={styles.container}>
      <div className={styles.visual}>
        <div className={styles.leftArrowColumn} onClick={handleLeftArrowClick}>
          <button>&lt;</button>
        </div>
        <div className={styles.photo}>
          <img src={images[currentImageIndex]} alt="Product" />
        </div>
        <div className={styles.rightArrowColumn} onClick={handleRightArrowClick}>
          <button>&gt;</button>
        </div>
      </div>
      <div className={styles.description}>
        <h2>Product Name</h2>
        <p>Product description goes here...</p>
        <button onClick={handleAddToCartClick}>Add to Cart</button>
      </div>
    </div>
  );
}
