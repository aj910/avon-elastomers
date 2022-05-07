import React from 'react';

import Loader from './loader/Loader.component';
import ProductCarouselContainer from './product-carousel/product-carousel-container.component';

function ProductSuggestionSection({ isLoading, productSuggestions }) {
  return (
    <div className="container-fluid">
      <div className="feature-product-blk">
        <div className="feature-blkpro-header">
          <h4>YOU MAY ALSO LIKE</h4>
        </div>
        {isLoading ? <Loader /> : <ProductCarouselContainer products={productSuggestions} />}
      </div>
    </div>
  );
}

export default ProductSuggestionSection;
