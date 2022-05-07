const ProductImageCarousel = ({ index, photo, name }) => {
  return (
    <div key={index}>
      <img src={photo} alt={name} />
    </div>
  );
};

export default ProductImageCarousel;
