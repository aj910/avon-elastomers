import React, { useContext } from 'react';
import StateContext from '../context/StateContext';
import DealItem from './deal/deal-item.component';
import DealPotraitItem from './deal/deal-potrait-item.component';
import ProductItem from './product/product-item.component';

const DealSection = ({ isLoading }) => {
  const { flashDeal1, flashDeal2, flashDeal3, flashDealPotrait, flashDealSuper, flashDealSuperProducts } = useContext(StateContext);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <DealPotraitItem deal={flashDealPotrait} />
        </div>
        <div className="col-md-9">
          <div className="bfs-3blk">
            <div className="row">
              <DealItem deal={flashDeal1} />
              <DealItem deal={flashDeal2} />
              <DealItem deal={flashDeal3} />
            </div>
          </div>
          <div className="super-deal-bfs-blk">
            <div className="row">
              <DealItem deal={flashDealSuper} />
              <div className="col-md-8">
                <div className="bfs-product-blk">
                  <div className="row">
                    {flashDealSuperProducts.map((flashDealSuperProduct) => (
                      <ProductItem key={flashDealSuperProduct.id} product={flashDealSuperProduct} className1="col-md-4" className2="product-block" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealSection;
