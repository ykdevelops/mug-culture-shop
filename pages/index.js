import { useState, useEffect } from 'react';
import Product from '../components/ui/Product';
import Cart from '../components/ui/Cart'; // Import the Cart component
import { BsBag } from 'react-icons/bs';
import ProductModal from '../components/ui/ProductModal'; // Import the ProductModal component
import products from '../data/products';
import mainStyles from '../styles/main.module.css';
import { useCart } from '../context/CartContext';
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
      <div className={mainStyles.cartIconRow}>
        <div onClick={() => setShowCart((prevState) => !prevState)}>
          <BsBag className={mainStyles.cartIcon} />
          <span className={mainStyles.cartCount}>{numberOfItems}</span>
        </div>
      </div>
      <h1 className={mainStyles.title}>Mug Culture Shop</h1>

      {showCart && (
        <Cart
          items={cartItems}
          onClose={() => setShowCart(false)}
        />
      )}
      <div className={mainStyles.products}>
        {products.map((product) => (
          <Product key={product.id} product={product} >
            <ProductModal product={product} setCart={setCartItems} />
          </Product>
        ))}
      </div>
    </div>
  );
}
