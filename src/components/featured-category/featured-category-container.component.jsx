import ProductCarouselContainer from '../product-carousel/product-carousel-container.component';

const FeaturedCategoryContainer = ({ category, image }) => {
  const { products } = category;
  return (
    <div className="feature-product-blk">
      <div className="feature-blkpro-header">
        <h4>{category.name}</h4>
        <ul>
          {/* <li>New Product</li>
          <li>Top Rating</li>
          <li>Most Selling</li> */}
        </ul>
      </div>
      <div className="row">
        <div className="col-md-9 order-md-2">
          <ProductCarouselContainer products={products} />
        </div>
        <div className="col-md-3 order-md-1">
          <div className="clearence-dresswere-img" style={{ background: `url(${image ? image : 'assets/images/image-12-2.jpg'})` }}></div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategoryContainer;
