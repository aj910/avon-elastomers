import { useContext } from 'react';
import { Link } from 'react-router-dom';
import StateContext from '../../context/StateContext';

import CategoryListItem from './category-list-item.component';

const CategoryDropdownList = () => {
  const { categories } = useContext(StateContext);
  return (
    <li className="nav-item dropdown">
      <Link className="nav-link dropdown-toggle" to={`/category`} data-bs-toggle="dropdown">
        <i className="fas fa-align-left"></i> All Departments
      </Link>
      <ul className="dropdown-menu">
        {categories.map((category) => (
          <CategoryListItem key={category.id} category={category} />
        ))}
      </ul>
    </li>
  );
};

export default CategoryDropdownList;
