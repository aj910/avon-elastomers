import { NavLink } from 'react-router-dom';

import parse from 'html-react-parser';

const BlogItem = ({ blog }) => {
  return (
    <div className="col-md-3" key={blog.id}>
      <div className="blog-grid-block">
        <img src={blog.image} alt="blog" />
        <h3>{blog.title}</h3>
        {parse(blog.content)}
        <NavLink to={`/blog/${blog.slug}`}>READ MORE</NavLink>
      </div>
    </div>
  );
};

export default BlogItem;
