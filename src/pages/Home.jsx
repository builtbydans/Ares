import products from "../data/products";
import ProductCard from "../components/ui/ProductCard";

const Home = () => {
  return (
    <div>
      <h1 className="mb-6">
        HOME | COLLECTION -- FIX THIS HEADER AND THIS COMPONENT
      </h1>
      <div className="max-w-8xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Home;
