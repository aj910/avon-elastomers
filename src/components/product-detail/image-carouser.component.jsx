import { Carousel } from 'react-responsive-carousel';

const ProductDetailCarousel = ({ photos, name }) => {
  return (
    <Carousel autoPlay interval="5000" transitionTime="500">
      {photos.map((photo, index) => (
        <div key={index}>
          <img src={photo.photo} alt={name} />
        </div>
      ))}
    </Carousel>
  );
};

export default ProductDetailCarousel;
