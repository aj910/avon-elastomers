import React from 'react';

import FeaturedCategoryContainer from './featured-category/featured-category-container.component';
import Loader from './loader/Loader.component';

function FeaturedCategorySection({ isLoading, category, image }) {
  return <div className="container-fluid">{isLoading ? <Loader /> : <FeaturedCategoryContainer category={category} image={image} />}</div>;
}

export default FeaturedCategorySection;
