import { Link } from "react-router-dom";

const WishlistHeart = ({ wishlist }) => {
  return (
    <Link to="/wishlist" className="hover:text-blue-600">
      <div className="relative inline-block">
        <img
          src={`/images/${
            wishlist.length ? "wishlist_full.png" : "wishlist_empty.png"
          }`}
          alt="wishlist"
          width={20}
        />
        {wishlist.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-gray-300 text-black text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
            {wishlist.length}
          </span>
        )}
      </div>
    </Link>
  );
};

export default WishlistHeart;
