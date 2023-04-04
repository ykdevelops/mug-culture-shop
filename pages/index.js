import { useState, useEffect } from 'react';
import Product from '../components/ui/Product';
import Cart from '../components/ui/Cart'; // Import the Cart component
import { BsBag } from 'react-icons/bs';
import ProductModal from '../components/ui/ProductModal'; // Import the ProductModal component
import products from '../data/products';
import mainStyles from '../styles/main.module.css';
import { useCart } from '../context/CartContext';
import { AnimatePresence, motion } from 'framer-motion';
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
          <div onClick={() => setShowCart((prevState) => !prevState)}>
            <motion.div

              whileHover={{ scale: 1.1 }}
            ><BsBag className={mainStyles.cartIcon} /></motion.div>


            <span className={mainStyles.cartCount}>{numberOfItems}</span>
          </div>
        </div>

      </div>

      <AnimatePresence>

      </AnimatePresence>
      {showCart && <motion.div
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >        <Cart
          items={cartItems}
          onClose={() => setShowCart(false)}
        /></motion.div>

      }
      {!showCart && <div className={mainStyles.products}>
        {products.map((product) => (
          <motion.div

            whileHover={{ scale: 1.1 }}
          >          <Product key={product.id} product={product} >
            </Product></motion.div>

        ))}
      </div>}


    </div>
  );
}
