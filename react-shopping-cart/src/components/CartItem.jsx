export default function CartItem({ item, updateQuantity, removeFromCart }) {
    return (
      <div className="flex items-center justify-between border-b p-4">
        <div className="flex items-center">
          <img
            src={item.image}
            alt={item.name}
            className="w-16 h-16 object-cover mr-4"
          />
          <div>
            <h3 className="font-bold">{item.name}</h3>
            <p className="text-gray-500">${item.price.toFixed(2)}</p>
          </div>
        </div>
        <div className="flex items-center">
          <button
            className="px-2 py-1 border rounded"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span className="mx-2">{item.quantity}</span>
          <button
            className="px-2 py-1 border rounded"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            disabled={item.quantity >= 10}
          >
            +
          </button>
          <button
            className="ml-4 text-red-500"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
  