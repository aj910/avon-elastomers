import React from 'react';

import { Link } from 'react-router-dom';

const FeaturedCategoryListItem = ({ featuredCategory }) => {
  return (
    <li>
      <Link className="dropdown-item" to={`/category/${featuredCategory.slug}`}>
        {featuredCategory.name}
      </Link>
    </li>
  );
};

export default FeaturedCategoryListItem;
