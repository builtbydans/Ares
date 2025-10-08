import ProductCard from "./ProductCard";

const GalleryCard = ({ product, featured, wishlist, toggleWishlist }) => {
  return (
    <div
      className={`overflow-hidden ${
        featured ? "lg:col-span-2" : "lg:col-span-1"
      }`}
    >
      <ProductCard
        product={product}
        wishlist={wishlist}
        toggleWishlist={toggleWishlist}
      />
    </div>
  );
};

export default GalleryCard;
