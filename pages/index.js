import { useState } from 'react';
import Product from '../components/ui/Product';
import Cart from '../components/ui/Cart'; // Import the Cart component
import { BsBag } from 'react-icons/bs';
import ProductModal from '../components/ui/ProductModal'; // Import the ProductModal component
import products from '../data/products';


export default function Home() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCartHandler = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCartHandler = (productId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== productId));
  };

  const cartItemsCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <div>
      <h1>Mug Culture Shop</h1>
      <div className="cart-icon" style={{ position: 'absolute', top: '10px', right: '10px' }} onClick={() => setShowCart((prevState) => !prevState)}>
        <BsBag />
        {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
      </div>

      {showCart && (
        <Cart
          items={cartItems}
          onAdd={addToCartHandler}
          onRemove={removeFromCartHandler}
          onClose={() => setShowCart(false)}
        />
      )}
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={addToCartHandler}>
            <ProductModal product={product} setCart={setCartItems} />
          </Product>
        ))}
      </div>
    </div>
  );
}
