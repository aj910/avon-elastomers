import ReactOwlCarousel from 'react-owl-carousel';
import ProductItem from '../product/product-item.component';

const ProductCarouselContainer = ({ products }) => {
  const recent_options = {
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
        items: 5,
      },
    },
  };
  return (
    <ReactOwlCarousel className="owl-theme owl-feature-slider" {...recent_options}>
      {products.map((product) => (
        <ProductItem product={product} key={product.id} className1="item" className2="product-block product-margin-carousel" />
      ))}
    </ReactOwlCarousel>
  );
};

export default ProductCarouselContainer;
