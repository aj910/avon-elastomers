import ReactOwlCarousel from 'react-owl-carousel';
import BrandItem from './brand-item.component';

const BrandItemContainer = ({ brands }) => {
  const brand_options = {
    margin: 20,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    loop: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  };
  return (
    <ReactOwlCarousel className="owl-theme owl-feature-slider" {...brand_options}>
      {brands.map((brand) => (
        <BrandItem brand={brand} key={brand.id} />
      ))}
    </ReactOwlCarousel>
  );
};

export default BrandItemContainer;
