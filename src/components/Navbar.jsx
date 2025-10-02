import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <Link
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        to="/"
        className="text-2xl font-bold text-black manrope"
      >
        {isHovered ? "アレス" : "ARES"}
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
};

export default Navbar;
