import React, { useContext } from 'react';
import StateContext from '../context/StateContext';
import BlogItem from './common/blog-item.component';
import Loader from './loader/Loader.component';

const BlogSection = ({ isLoading }) => {
  const { blogs } = useContext(StateContext);
  return (
    <div className="container-fluid">
      <div className="feature-product-blk">
        <div className="feature-blkpro-header">
          <h4>FROM OUR BLOG</h4>
        </div>
        <div className="row">{isLoading ? <Loader /> : blogs.map((blog) => <BlogItem blog={blog} key={blog.id} />)}</div>
      </div>
    </div>
  );
};

export default BlogSection;
