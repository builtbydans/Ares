import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white shadow px-6 py-4">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        ARES
      </Link>
      <div className="flex gap-4">
        <Link to="/cart" className="hover:text-blue-600">
          Cart
        </Link>
        <Link to="/checkout" className="hover:text-blue-600">
          Checkout
        </Link>
      </div>
    </nav>
  );
}
