import { useState } from "react";
import { Link } from "react-router-dom";
import WishlistHeart from "./WishlistHeart";

const Navbar = ({ wishlist }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className=" flex bg-black text-white h-8 w-full justify-center justify-items-center items-center ">
        <p>10% Student Discount // 学 生 割 引 10%</p>
      </div>
      <nav className="relative flex items-center justify-end px-6 py-4">
        <Link
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          to="/"
          className={`absolute left-1/2 transform -translate-x-1/2 font-bold ${
            isHovered
              ? "text-2xl tracking-[-0.15em]"
              : "text-4xl tracking-tighter "
          }`}
        >
          {isHovered ? "アレス" : "ares"}
        </Link>
        <div className="flex gap-4">
          <WishlistHeart wishlist={wishlist} />
          <Link to="/cart" className="hover:text-blue-600">
            Cart
          </Link>
          <Link to="/checkout" className="hover:text-blue-600">
            Checkout
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
