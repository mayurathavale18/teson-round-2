// ProductCard.jsx
import { useCart } from "../components/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart(); // Access addToCart from context

  return (
    <div className="flex flex-col justify-between gap-3 border p-4 rounded-3xl bg-gray-50 shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[320px] object-cover rounded-3xl"
      />
      <div className="grow flex flex-col gap-2 bg-slate-300 p-4 rounded-3xl">
        <h3 className="font-bold">{product.name}</h3>
        <p>{product.description}</p>
      </div>
      <div>
        <div className="flex justify-between items-center bg-slate-300 rounded-3xl">
          <p className="font-bold px-4 py-2 font-mono text-black text-md">Price :</p>
          <p className="font-bold px-4 py-2 font-mono text-purple-800 text-lg">
            ${product.price}
          </p>
        </div>
        <button
          className="bg-violet-600 mt-4 text-white font-bold text-lg px-4 py-2 rounded-3xl mt-2 w-full hover:bg-violet-700"
          onClick={() => addToCart(product)} // Add product to cart
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
