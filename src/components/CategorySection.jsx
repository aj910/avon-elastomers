import React from 'react';
import CategoryItem from './category/category-item.component';
import Loader from './loader/Loader.component';

const CategorySection = ({ isLoading, categories }) => {
  return (
    <div className="container-fluid">
      <div className="category-main-blk">
        <div className="row">{isLoading ? <Loader /> : categories.map((category) => <CategoryItem category={category} key={category.id} />)}</div>
      </div>
    </div>
  );
};

export default CategorySection;
