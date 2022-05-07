import React, { useContext } from 'react';
import StateContext from '../context/StateContext';
import BrandItemContainer from './brand/brand-item-container.component';
import Loader from './loader/Loader.component';

const BrandSection = ({ isLoading }) => {
  const { brands } = useContext(StateContext);
  return (
    <div className="container-fluid">
      <div className="feature-product-blk">
        <div className="feature-blkpro-header">
          <h4>SHOP BY BRANDS</h4>
        </div>
        {isLoading ? <Loader /> : <BrandItemContainer brands={brands} />}
      </div>
    </div>
  );
};

export default BrandSection;
