import ProductCard from '../ProductCard/ProductCard'
import Data from '../../data/db.json';
import './BestSelling.css';

function BestSelling() {
  return (
    <>
      <h3>Best Selling</h3>

      <div className="row">
        {Data.map((data) => {
          return <ProductCard
                  key={data.id}
                  img={process.env.PUBLIC_URL + data.image}
                  name={data.name}
                  price={data.price}
                  />
        })}
      </div>

      <p>TO DO:
         1. Plan how you're going to make the website, design this on Figma.
         2. For the REST API, use npm json-server.
      </p>
    </>
  )
}

export default BestSelling;
