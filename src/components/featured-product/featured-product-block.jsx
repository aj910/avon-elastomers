import { Link } from 'react-router-dom';
import ProductItem from '../product/product-item.component';

const FeaturedProductBlock = ({ category, image }) => {
  const { products } = category;
  return (
    <div className="home-smart-block">
      <div className="home-smart-header">
        <h4>{category.name}</h4>
        <Link to={`/category/${category.slug}`}>View All</Link>
      </div>
      <div className="row g-0">
        <div className="col-md-5">
          <div className="homeinteri-img" style={{ background: `url(${image ? image : 'assets/images/image-17.jpg'})` }}></div>
        </div>
        <div className="col-md-7">
          <div className="row g-0 px-2">
            {products.map((product) => (
              <div className="col-md-6" key={product.id}>
                <ProductItem product={product} className1="product-home-smart" className2="product-block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductBlock;
