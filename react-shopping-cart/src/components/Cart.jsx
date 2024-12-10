import CartItem from "./CartItem";

export default function Cart({
  cartItems,
  updateQuantity,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  handleEmpty,
}) {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty!</p>
      ) : (
        <div className="space-y-4">
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
          <div className="text-right mt-4 p-4 bg-white rounded shadow-md">
            <p className="text-xl font-bold font-mono">Total: <span className="font-mono font-bold text-blue-700">${totalPrice.toFixed(2)}</span></p>
          </div>
        </div>
      )}
    </div>
  );
}
