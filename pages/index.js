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

      <h1 className={mainStyles.title}>Mug Culture Shop</h1>
      <div className={mainStyles.cartIconRow}>
        <div className={mainStyles.cartIconMid}>
          <div >
            <Link href="/cart">
              <motion.div

                whileHover={{ scale: 1.1 }}
              ><BsBag className={mainStyles.cartIcon} /></motion.div>
            </Link>



            <span className={mainStyles.cartCount}>{numberOfItems}</span>
          </div>
        </div>

      </div>


      {/* <motion.div
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >        <Cart
          items={cartItems}
          onClose={() => setShowCart(false)}
        /></motion.div> */}


      <div className={mainStyles.products}>
        {products.map((product) => (

          <ProductCard key={product.id} product={product} >
          </ProductCard>

        ))}
      </div>


    </div>
  );
}
