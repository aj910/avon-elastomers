import React, { useContext } from 'react';
import StateContext from '../context/StateContext';
import FeaturedProductBlock from './featured-product/featured-product-block';
import Loader from './loader/Loader.component';

const TwoFeaturedCategorySection = ({ isLoading }) => {
  const { homepageSetting } = useContext(StateContext);
  const { featured_category_3_image, featured_category_3, featured_category_4, featured_category_4_image } = homepageSetting;
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">{isLoading ? <Loader /> : <FeaturedProductBlock category={featured_category_3} image={featured_category_3_image} />}</div>
        <div className="col-md-6">{isLoading ? <Loader /> : <FeaturedProductBlock category={featured_category_4} image={featured_category_4_image} />}</div>
      </div>
    </div>
  );
};

export default TwoFeaturedCategorySection;
