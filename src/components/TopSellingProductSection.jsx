import React from 'react';
import Loader from './loader/Loader.component';
import ProductCarouselContainer from './product-carousel/product-carousel-container.component';

const TopSellingProductSection = ({ isLoading, topSellingProducts }) => {
  return (
    <div className="container-fluid">
      <div className="feature-product-blk">
        <div className="feature-blkpro-header">
          <h4>TOP SELLING PRODUCTS</h4>
        </div>
        {isLoading ? <Loader /> : <ProductCarouselContainer products={topSellingProducts} />}
      </div>
    </div>
  );
};

export default TopSellingProductSection;
