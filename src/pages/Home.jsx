import GalleryCard from "../components/ui/GalleryCard";
import products from "../data/products";

const Home = ({ wishlist, toggleWishlist }) => {
  return (
    <>
      <h1 className="mb-6">HOME | COLLECTION</h1>
      <div className="max-w-8xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p, i) => {
          const pos = i % 6;
          const featured = pos === 4 || pos === 5;
          return (
            <GalleryCard
              key={p.id}
              product={p}
              featured={featured}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
