import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className=" flex bg-black text-white h-8 w-full justify-center justify-items-center items-center ">
        <p>10% Student Discount // 学 生 割 引 10%</p>
      </div>
      <nav className="flex items-center justify-between px-6 py-4 border-b-[0.5px]">
        <Link
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          to="/"
          className="text-3xl tracking-tight font-bold"
        >
          {isHovered ? "アレス" : "ARESU"}
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
    </>
  );
};

export default Navbar;
