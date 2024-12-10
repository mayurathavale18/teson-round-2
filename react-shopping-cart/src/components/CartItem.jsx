import { toast } from "react-toastify";

export default function CartItem({
    item,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    handleEmpty,
  }) {
    const handleIncrementClick = () => {
      if (item.quantity >= 10) {
        toast.error("Maximum quantity is 10.");
        return;
      }
      incrementQuantity(item.id);
    };
  
    const handleDecrementClick = () => {
      if (item.quantity <= 1) {
        toast.error("Minimum quantity is 1.");
        return;
      }
      decrementQuantity(item.id);
    };
  
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
          {/* Decrement Button */}
          <button
            className={`px-2 py-1 border rounded ${
              item.quantity <= 1 ? "opacity-50" : ""
            }`}
            onClick={handleDecrementClick}
          >
            -
          </button>
  
          {/* Quantity */}
          <span className="mx-2">{item.quantity}</span>
  
          {/* Increment Button */}
          <button
            className={`px-2 py-1 border rounded ${
              item.quantity >= 10 ? "opacity-50" : ""
            }`}
            onClick={handleIncrementClick}
          >
            +
          </button>
  
          {/* Remove Button */}
          <button
            className="bg-red-500 font-bold rounded-3xl text-white ml-4 px-4 py-2 rounded"
            onClick={() => removeFromCart(item.id, handleEmpty)}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
  