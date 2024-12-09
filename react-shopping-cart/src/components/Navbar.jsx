// Navbar.jsx
import { Link, Route, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

export default function Navbar({ navigate }) {
  const { pathname, cartItems } = useCart(); // Access cartItems directly from context
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="p-4 bg-blue-500 text-white flex justify-between items-center">
      <div className="flex gap-7 items-center">
        <Link to="/">
          <h1 className="text-lg font-bold">E-Commerce App</h1>
        </Link>
        {pathname === "/cart" && (
          <button
            type="button"
            className="text-lg text-black rounded-full p-2 bg-white font-bold transform 
                                        transition duration-400 
                                        hover:scale-105"
            onClick={() => {
              navigate("/");
            }}
          >
            Continue Shopping
          </button>
        )}
      </div>
      <div className="relative">
        <a href="/cart" className="flex items-center space-x-2">
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
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </a>
      </div>
    </nav>
  );
}
