import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="flex justify-between items-center  px-6 py-4 bg-white shadow-sm">
        <div className="text-xl font-bold text-blue-600">Prodexa</div>
        <div className="flex gap-6">
            <NavLink to="/" className="text-gray-700 hover:text-blue-600">Home</NavLink>
            <NavLink to="/products" className="text-gray-700 hover:text-blue-600">Products</NavLink>
            <NavLink to="/about" className="text-gray-700 hover:text-blue-600">About</NavLink>
            <NavLink to="/contact" className="text-gray-700 hover:text-blue-600">Contact</NavLink>
            <NavLink to="/login" className="text-gray-700 hover:text-blue-600">Login</NavLink>
        </div>

     
    </nav>
  );
}

export default Navbar;