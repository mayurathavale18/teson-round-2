// ProductCard.jsx
import { useCart } from '../components/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();  // Access addToCart from context

  return (
    <div className="border p-4 rounded shadow">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
      <h3 className="font-bold">{product.name}</h3>
      <p>{product.description}</p>
      <p className="font-bold">${product.price}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        onClick={() => addToCart(product)}  // Add product to cart
      >
        Add to Cart
      </button>
    </div>
  );
}
