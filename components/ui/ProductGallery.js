import { LayoutGroup, motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import products from '../../data/products';
import styles from '../../styles/gallery.module.css';

function ProductImage({ product, currentImageIndex, onExpand }) {
    return (
        <motion.img
            src={product.images[currentImageIndex]}
            alt={product.name}
            onClick={() => onExpand(product.id)}
            className={styles.relatedProductImage}
            layoutId={`product-${product.id}`}
        />
    );
}

export default function ProductGallery() {
    const maxImagesInArray = Math.max(...products.map(product => product.images.length));
    const maxImages = maxImagesInArray;
    const [productIds, setProductIds] = useState(products.slice(1, Math.min(maxImages, products.length)));
    const [primaryProduct, setPrimaryProduct] = useState(products[0]);
    const [currentImageIndices, setCurrentImageIndices] = useState(
        products.slice(0, Math.min(maxImages, products.length)).map((_, i) => i % products.length)
    );

    function setAsPrimary(id) {
        const currentProductId = primaryProduct.id;
        const newProduct = products.find((product) => product.id === id);
        const newProductIds = [
            ...productIds.filter((product) => product.id !== id),
            primaryProduct,
        ];

        setPrimaryProduct(newProduct);
        setProductIds(newProductIds);

        // Swap image indices for the selected product with the primary product
        const primaryIndex = currentImageIndices[0];
        const selectedIndex = currentImageIndices[productIds.findIndex((product) => product.id === id) + 1];
        setCurrentImageIndices((prevState) => {
            const newState = [...prevState];
            newState[0] = selectedIndex;
            newState[productIds.findIndex((product) => product.id === id) + 1] = primaryIndex;
            return newState;
        });
    }

    return (
        <div className={styles.galleryContainer}>
            <LayoutGroup>
                <aside className={styles.productGallery}>
                    <div className={styles.productImagesContainer}>
                        <AnimatePresence>
                            {productIds.map((product, i) => (
                                <ProductImage
                                    key={product.id}
                                    product={product}
                                    currentImageIndex={currentImageIndices[i + 1]}
                                    onExpand={setAsPrimary}
                                />
                            ))}
                        </AnimatePresence>
                    </div>
                </aside>
                <main className={styles.primaryContainer}>
                    <AnimatePresence>
                        <motion.img
                            key={primaryProduct.id}
                            className={styles.primaryProductImage}
                            src={primaryProduct.images[currentImageIndices[0]]}
                            alt={primaryProduct.name}
                            layoutId={`product-${primaryProduct.id}`}
                        />
                    </AnimatePresence>
                </main>
            </LayoutGroup>
        </div>
    );
}
