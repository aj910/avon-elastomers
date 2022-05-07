import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

const BlogRecent = ({ blog }) => {
  return (
    <div className="media post_item">
      <img src={blog.image} alt="post" />
      <div className="media-body">
        <Link to={`/blog/${blog.slug}`}>
          <h3>{parse(blog.content)}</h3>
        </Link>
        <p>{blog.created_at_human}</p>
      </div>
    </div>
  );
};

export default BlogRecent;
