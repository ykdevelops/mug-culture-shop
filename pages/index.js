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
            <img src="/mugcultureIcon.svg" alt="MugCulture" className={mainStyles.brandImage} />
            <div className={mainStyles.betaTitle}>BETA</div>
          </div>

          <div className={mainStyles.cartIconBox}>
            <Link href="/cart">
              <BsBag className={mainStyles.cartIcon} />
            </Link>
          </div>
        </div>
      </div>

      <section className={mainStyles.hero}>
        <div className={mainStyles.heroInner}>
          <h1 className={mainStyles.heroTitle}>
            <span className={mainStyles.heroTitleStrong}>Mugs. </span>
            <span className={mainStyles.heroTitleMuted}>
              Essentials that pair perfectly with your favourite moments.
            </span>
          </h1>
        </div>
      </section>

      <section className={mainStyles.products}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>


    </div>
  );
}
