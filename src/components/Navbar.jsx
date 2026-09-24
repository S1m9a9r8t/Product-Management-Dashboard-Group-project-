
import { NavLink } from "react-router";
import { useCartStore } from "../store/cartStore.js";

function Navbar() {

  const cartItems = useCartStore((state) => state.cartItems);
const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="flex flex-col sm:flex-row sm:justify-between sm:items-center px-6 sm:px-10 py-4 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 gap-4">
      <div className="text-2xl font-extrabold tracking-tight text-blue-600">
        Prodexa
      </div>

      <div className="flex flex-wrap items-center gap-1 sm:gap-3">
        <NavLink
          to="/"
          className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
        >
          Home
        </NavLink>

        <NavLink
          to="/products"
          className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
        >
          Products
        </NavLink>

        <NavLink
          to="/about"
          className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
        >
          Contact
        </NavLink>

        <NavLink to="/cart" className="text-gray-700 hover:text-blue-600">
  Cart {itemCount > 0 && `(${itemCount})`}
</NavLink>
      
        <NavLink
          to="/login"
          className="px-5 py-2 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow-md transition-all duration-200"
        >
          Login
        </NavLink>

        
      </div>
    </nav>
  );
}

export default Navbar;

