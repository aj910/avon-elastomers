import { useContext } from 'react';
import ReactOwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import StateContext from '../../context/StateContext';
import ProductStarRating from '../product-star/product-star-rating.component';

const FeaturedProductContainer = () => {
  const { featuredProducts } = useContext(StateContext);
  const getProductList = () => {
    let products = [];
    for (let index = 0; index < featuredProducts.length; index += 2) {
      const featuredProductEven = featuredProducts[index];
      const featuredProductOdd = featuredProducts[index + 1];
      products.push(
        <div className="item" key={index}>
          <div className="feature-pro-blk">
            <Link to={`/product/${featuredProductEven.slug}`}>
              <div className="feat-pro-img">
                <img src={featuredProductEven.thumbnail ? featuredProductEven.thumbnail : 'assets/images/image-11.jpg'} alt={featuredProductEven.name} />
              </div>
              <div className="fea-pro-cont">
                <h3>{featuredProductEven.name}</h3>
                <ProductStarRating rating={featuredProductEven.rating} />
                <p>${featuredProductEven.base_discounted_price}</p>
              </div>
            </Link>
          </div>
          <div className="feature-pro-blk">
            <Link to={`/product/${featuredProductOdd.slug}`}>
              <div className="feat-pro-img">
                <img src={featuredProductOdd.thumbnail ? featuredProductOdd.thumbnail : 'assets/images/image-11.jpg'} alt={featuredProductOdd.name} />
              </div>
              <div className="fea-pro-cont">
                <h3>{featuredProductOdd.name}</h3>
                <ProductStarRating rating={featuredProductEven.rating} />
                <p>${featuredProductOdd.base_discounted_price}</p>
              </div>
            </Link>
          </div>
        </div>
      );
    }
    return products;
  };
  const feature_options = {
    margin: 20,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };
  return (
    <ReactOwlCarousel className="owl-theme owl-feature-slider" {...feature_options}>
      {getProductList()}
    </ReactOwlCarousel>
  );
};

export default FeaturedProductContainer;
