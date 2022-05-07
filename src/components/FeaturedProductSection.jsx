import React from 'react';
import FeaturedProductContainer from './featured-product/featured-product-container.component';
import Loader from './loader/Loader.component';

const FeaturedProductSection = ({ isLoading }) => {
  return (
    <div className="container-fluid">
      <div className="feature-product-blk">
        <div className="feature-blkpro-header">
          <h4>Feature Products</h4>
          <ul>
            {/* <li>New Product</li>
            <li>Top Rating</li>
            <li>Most Selling</li> */}
          </ul>
        </div>
        {isLoading ? <Loader /> : <FeaturedProductContainer />}
      </div>
    </div>
  );
};

export default FeaturedProductSection;
