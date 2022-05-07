import { Link } from 'react-router-dom';

const ProductListVertical = ({ product }) => {
  return (
    <li key={product.id}>
      <Link to={`/product/${product.slug}`}>
        <div className="seller-block-best">
          <img src={product.thumbnail ? product.thumbnail : 'assets/images/image-13.jpg'} alt={product.name} />
          <div className="seller-cont-blk">
            <h4>{product.name}</h4>
            <p>${product.base_discounted_price}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ProductListVertical;
