import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

import Page from '../components/Page';
import BlogItem from '../components/common/blog-item.component';
import Loader from '../components/loader/Loader.component';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const blogRequest = Axios.CancelToken.source();
    async function fetchBlogs() {
      try {
        setIsLoading(true);
        const response = await Axios.get(`/blogs`, { cancelToken: blogRequest.token });
        const responseData = response.data.data;
        setBlogs(responseData.blogs);
        setIsLoading(false);
      } catch (e) {}
    }
    fetchBlogs();
    return () => {
      blogRequest.cancel();
    };
  }, []);
  return (
    <Page title="Blog">
      <div className="inner-pages-wrapper">
        <section className="breadcrumb-sction">
          <div className="container-fluid">
            <ul className="breadcrumb-block">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>Blog</li>
            </ul>
          </div>
        </section>
        <section className="about-cont-block">
          <div className="container-fluid">
            <div className="row">{isLoading ? <Loader /> : blogs.map((blog) => <BlogItem blog={blog} key={blog.id} />)}</div>
          </div>
        </section>
      </div>
    </Page>
  );
};

export default Blog;
