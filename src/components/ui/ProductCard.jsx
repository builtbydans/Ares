import { Link } from "react-router-dom";

const ProductCard = ({ product, wishlist = [], toggleWishlist }) => {
  return (
    <article className="flex flex-col relative">
      <button
        onClick={() => toggleWishlist(product)}
        className="cursor-pointer"
      >
        <img
          className="absolute top-2 right-2"
          src={`/images/${
            wishlist?.some((item) => item.id === product.id)
              ? "wishlist_full.png"
              : "wishlist_empty.png"
          }`}
          alt="wishlist_heart"
          width={20}
        />
      </button>
      <Link to={`/product/${product.id}`} className="block">
        <img
          src={`${product.imageUrl}_1.avif`}
          alt={product.name}
          onMouseEnter={(e) =>
            (e.currentTarget.src = `${product.imageUrl}_2.avif`)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.src = `${product.imageUrl}_1.avif`)
          }
          className="w-full object-cover cursor-pointer"
        />
      </Link>

      <div className="mt-2">
        <h2 className="text-lg font-medium">{product.name}</h2>
        <p className="text-gray-600">£{product.price}</p>
      </div>
    </article>
  );
};

export default ProductCard;
