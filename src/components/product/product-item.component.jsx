import { Link } from 'react-router-dom';
import ProductStarRating from '../product-star/product-star-rating.component';

const ProductItem = ({ product, className1, className2 }) => {
  return (
    <div className={className1}>
      <div className={className2}>
        <Link to={`/product/${product.slug}`}>
          <div className="product-img-blk">
            {product.base_discounted_price < product.base_price ? <span className="sale-blk">Sale</span> : ''}
            <img src={product.thumbnail ? product.thumbnail : 'assets/images/image-13.jpg'} alt={product.name} />
          </div>
          <div className="product-cont-blk">
            <h4>{product.name}</h4>
            <ProductStarRating rating={product.rating} />
            {product.base_discounted_price < product.base_price ? <del>${product.base_price}</del> : ''}
            <p>${product.base_discounted_price}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default ProductItem;
