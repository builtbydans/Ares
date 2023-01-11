import ProductCard from '../ProductCard/ProductCard'
import NikeOne from '../../assets/images/nike1.jpeg'
import NikeTwo from '../../assets/images/nike2.jpeg'
import NikeThree from '../../assets/images/nike3.jpeg'
import NikeFour from '../../assets/images/nike4.jpeg'
import './BestSelling.css';

function BestSelling() {
  return (
    <>q
      <h3>Best Selling</h3>
      <div className="row">
        <ProductCard img={NikeOne} name="Nike Furyosas" price="£140"/>
        <ProductCard img={NikeTwo} name="Nike AF 1 '70'" price="£110"/>
        <ProductCard img={NikeThree} name="Air Max Scorpion" price="£225" />
        <ProductCard img={NikeFour} name="Air Force 1 Utility" price="£135"/>
      </div>
    </>
  )
}

export default BestSelling;
