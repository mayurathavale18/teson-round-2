import Navbar from '../components/Navbar';
import Cart from '../components/Cart';
import { useCart } from '../components/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, incrementQuantity, decrementQuantity, handleEmpty } = useCart();
  const navigate = useNavigate()

  return (
    <>
      <Navbar navigate={navigate} />
      <Cart
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        handleEmpty={handleEmpty}
      />
    </>
  );
}
