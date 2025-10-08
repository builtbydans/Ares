import ProductCard from "../components/ui/ProductCard";

const Wishlist = ({ wishlist, toggleWishlist, handleClear }) => {
  return (
    <>
      <div className="my-5 mx-auto px-6">
        <h1 className="text-3xl font-bold">Wishlist</h1>
        <div className="flex items-baseline justify-between">
          <p className="mt-3">
            {wishlist.length === 1
              ? "There is 1 item in your wishlist"
              : `There are ${wishlist.length} items in your wishlist`}
          </p>
          <button
            onClick={handleClear}
            className="border-1 p-2 hover:bg-zinc-100"
          >
            Clear Wishlist
          </button>
        </div>
      </div>
      <div className="max-w-8xl mb-5 mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlist?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            wishlist={wishlist}
            toggleWishlist={toggleWishlist}
          />
        ))}
      </div>
    </>
  );
};

export default Wishlist;
