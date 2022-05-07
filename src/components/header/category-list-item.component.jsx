import { Link } from 'react-router-dom';

const CategoryListItem = ({ category }) => {
  return (
    <li>
      <Link to={`/category/${category.slug}`} className="dropdown-item">
        {' '}
        {category.name} {category.childrens_count > 0 ? <i className="bi bi-chevron-right"></i> : ''}
      </Link>
      {category.childrens_count > 0 ? (
        <ul className="submenu dropdown-menu">
          {category.childrens.map((children) => (
            <CategoryListItem key={children.id} category={children} />
          ))}
        </ul>
      ) : (
        ''
      )}
    </li>
  );
};
export default CategoryListItem;
