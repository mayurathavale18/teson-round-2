import Navbar from '../components/Navbar';
import Cart from '../components/Cart';
import { useCart } from '../components/CartContext';

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  return (
    <>
      <Navbar />
      <Cart
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
    </>
  );
}
