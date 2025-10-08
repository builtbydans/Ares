import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import ItemSizes from "../components/sections/ProductPage/ItemSizes";
import QuantitySelector from "../components/sections/ProductPage/QuantitySelector";
import AddToCart from "../components/sections/ProductPage/AddToCart";
import AdditionalInfo from "../components/sections/ProductPage/AdditionalInfo";
import MayAlsoLike from "../components/sections/ProductPage/MayAlsoLike";

const ProductPage = ({ wishlist, toggleWishlist }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id)); // convert id to number
  const [selectedSize, setSelectedSize] = useState("S");

  if (!product) {
    return <h1 className="text-2xl">Product not found</h1>; // RETURN 404 PAGE;
  }

  const sizeLabel = selectedSize
    ? { S: "Small", M: "Medium", L: "Large", XL: "Extra Large" }[selectedSize]
    : "";

  return (
    <>
      <div className="flex">
        <section className="flex basis-[65%]">
          <img
            src={`${product.imageUrl}_1.avif`}
            alt={product.name}
            className="w-1/2 object-cover"
          />
          <img
            src={`${product.imageUrl}_2.avif`}
            alt={product.name}
            className="w-1/2 object-cover"
          />
        </section>

        <section className="basis-[35%] px-10 mt-10">
          <div className="flex items-baseline gap-10 justify-between">
            <h4 className="text-2xl font-bold">{product.name}</h4>
            <button
              onClick={() => toggleWishlist(product)}
              className="border-1 p-2 hover:bg-zinc-100"
            >
              {wishlist.some((item) => item.id === product.id)
                ? "remove from wishlist"
                : "add to wishlist"}
            </button>
          </div>
          <p className="text-gray-600 font-bold text-xl mt-2">
            £{product.price} GBP
          </p>
          <p className="mt-5">{product.description}</p>
          <p className="mt-5">{product.model}</p>

          <section>
            <p className="mt-10">
              Selected Size: <span className="font-bold">{sizeLabel}</span>
            </p>
          </section>

          <section className="flex justify-between items-center gap-10">
            <ItemSizes
              sizes={product.sizes}
              selectedSize={selectedSize}
              onSelectSize={setSelectedSize}
            />
            <QuantitySelector selectedSize={selectedSize} />
          </section>

          <AddToCart />

          <section>
            <AdditionalInfo />
          </section>
        </section>
      </div>
      <MayAlsoLike
        currentId={product.id}
        product={product}
        wishlist={wishlist}
        toggleWishlist={toggleWishlist}
      />
    </>
  );
};

export default ProductPage;
