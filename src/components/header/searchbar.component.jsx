import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StateContext from '../../context/StateContext';

const SearchBar = () => {
  const { categories } = useContext(StateContext);
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  const goToSearch = (e) => {
    e.preventDefault();
    if (category) {
      navigate({
        pathname: `/category/${category}`,
        search: `?search=${search}`,
      });
    } else {
      navigate({
        pathname: '/shop',
        search: `?search=${search}`,
      });
    }
  };

  return (
    <div className="col-md-6 order-md-2">
      <div className="searchheade-block">
        <form onSubmit={goToSearch}>
          <div className="input-group">
            <div className="input-group-text">
              <select className="form-select" name="category" onChange={(e) => setCategory(e.target.value)}>
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.slug}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <input type="text" className="form-control" placeholder="Search Products..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <button className="input-group-text btn-search">Search</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SearchBar;
