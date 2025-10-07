import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../ProductCard";
import products from "../../data/products";

const MayAlsoLike = ({ currentId }) => {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    let shuffled = [...products]
      .filter((product) => product.id !== currentId)
      .sort(() => Math.random() - 0.5);
    setRandomProducts(shuffled.slice(0, 3));
  }, [currentId]);

  return (
    <div className="bg-zinc-100 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <p className="font-bold text-sm text-center">YOU MAY ALSO LIKE</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 w-full">
          {randomProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MayAlsoLike;
