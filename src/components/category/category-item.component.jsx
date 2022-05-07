import { Link } from 'react-router-dom';

const CategoryItem = ({ category }) => {
  return (
    <div className="col">
      <Link to={`/category/${category.slug}`}>
        <div className="caetfory-small-block">
          <img src={category.icon} alt={category.name} />
          <h5>{category.name}</h5>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
