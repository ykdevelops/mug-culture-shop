import '../styles/globals.css';
import { CartProvider } from '../context/CartContext';
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
    return (
        <CartProvider>
            <AnimatePresence mode='wait'>
                <motion.div
                    key={Component.pageConfig?.key || Component.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.1 } }}
                >
                    <Component {...pageProps} />
                </motion.div>
            </AnimatePresence>
        </CartProvider>
    );
}

export default MyApp;