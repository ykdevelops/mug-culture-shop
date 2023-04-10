import { useState, useEffect } from 'react';
import ProductCard from '../components/ui/ProductCard';
import { BsBag } from 'react-icons/bs';
import products from '../data/products';
import mainStyles from '../styles/main.module.css';
import { useCart } from '../context/CartContext';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
export default function Home() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const { numberOfItems } = useCart();

  useEffect(() => {
    setCartItemsCount(numberOfItems);
  }, [cartItems]);

  return (
    <div className={mainStyles.homePage}>
      <div className={mainStyles.headerRow}>
        <div className={mainStyles.headerRowMid}>
          <div className={mainStyles.shopLogo}>
            <img src="/images/logo.png" alt="mugculturelogo" className={mainStyles.brandImage} />
            <div className={mainStyles.betaTitle}>BETA</div>
          </div>

          <div >
            <Link href="/cart">
              <BsBag className={mainStyles.cartIcon} />
            </Link>
            <span className={mainStyles.cartCount}>{numberOfItems}</span>
          </div>
        </div>
      </div>
      <div className={mainStyles.products}>
        {products.map((product) => (

          <ProductCard key={product.id} product={product} >
          </ProductCard>

        ))}
      </div>


    </div>
  );
}
