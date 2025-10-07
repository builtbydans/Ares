import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <article>
      <Link to={`/product/${product.id}`}>
        <img
          src={`${product.imageUrl}_1.avif`}
          alt={product.name}
          onMouseEnter={(e) =>
            (e.currentTarget.src = `${product.imageUrl}_2.avif`)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.src = `${product.imageUrl}_1.avif`)
          }
          className="cursor-pointer w-full object-cover"
        />
        <h2>{product.name}</h2>
        <p>£{product.price}</p>
      </Link>
    </article>
  );
};

export default ProductCard;
