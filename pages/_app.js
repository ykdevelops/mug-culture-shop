import '../styles/globals.css';
import '../styles/main.css';
import '../styles/product.css';
import '../styles/productModal.css';
import { CartProvider } from '../context/CartContext';

function MyApp({ Component, pageProps }) {
    return (
        <CartProvider>
            <Component {...pageProps} />
        </CartProvider>
    );
}

export default MyApp;
