import React from 'react';

import Loader from './loader/Loader.component';
import ProductCarouselContainer from './product-carousel/product-carousel-container.component';

const RecentlyViewedProductSection = ({ isLoading, recentlyViewedProducts }) => {
  return (
    <div className="container-fluid">
      <div className="feature-product-blk">
        <div className="feature-blkpro-header">
          <h4>RECENTLY VIEWED</h4>
        </div>
        {isLoading ? <Loader /> : <ProductCarouselContainer products={recentlyViewedProducts} />}
      </div>
    </div>
  );
};

export default RecentlyViewedProductSection;
