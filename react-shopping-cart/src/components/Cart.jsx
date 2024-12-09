import CartItem from './CartItem';

export default function Cart({ cartItems, updateQuantity, removeFromCart, incrementQuantity, decrementQuantity, handleEmpty }) {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty!</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
              handleEmpty={handleEmpty}
            />
          ))}
          <div className="text-right mt-4">
            <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
}
