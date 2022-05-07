const ProductStarRating = ({ rating }) => {
  const getRating = () => {
    let stars = [];
    for (let index = 1; index <= rating; index++) {
      stars.push(<i className="fas fa-star" key={index}></i>);
    }
    return stars;
  };
  return <div className="star-rate-show">{getRating()}</div>;
};

export default ProductStarRating;
