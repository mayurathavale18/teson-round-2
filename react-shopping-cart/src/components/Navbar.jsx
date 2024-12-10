// Navbar.jsx
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

export default function Navbar({ navigate }) {
  const { pathname, cartItems } = useCart(); // Access cartItems directly from context
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="p-3 pl-6 pr-3 mb-5 pr-6 mx-3 relative top-2 bg-slate-900 text-white text-sm flex justify-between items-center rounded-full shadow-xl">
      <div className="flex gap-7 items-center">
        <Link
          to="/"
          className="text-lg font-bold text-zinc-100 bg-clip-text hover:text-gray-300 transition"
        >
          E-Commerce Cart Management
        </Link>
        {pathname === "/cart" && (
          <button
            type="button"
            className="text-sm sm:text-lg text-black rounded-full p-2 bg-white font-bold shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
        )}
      </div>
      <div className="relative">
        <a
          href="/cart"
          className="flex items-center space-x-2 hover:text-gray-300 transition"
        >
          <p className="p-2 font-bold text-white text-sm sm:text-md">My Cart</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l1.4-7H6.6L7 13zm5 8a2 2 0 100-4 2 2 0 000 4z"
            />
          </svg>
          {totalItems > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xsm rounded-full h-3.5 w-3.5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </a>
      </div>
    </nav>
  );
}
