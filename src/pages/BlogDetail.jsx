import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Page from '../components/Page';
import Axios from 'axios';
import BlogPost from '../components/blog/blog-post.component';
import Loader from '../components/loader/Loader.component';
import BlogComment from '../components/blog/blog-comment.component';
import BlogRecent from '../components/blog/blog-recent.component';

const BlogDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams('slug');
  const [blog, setBlog] = useState({});
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [commentCount, setCommentCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [buttonText, setButtonText] = useState('Post Comment');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    async function fetchBlog() {
      try {
        setIsLoading(true);
        const response = await Axios.get(`/blog/${slug}`);
        const responseData = response.data.data;
        setBlog(responseData.blog);
        setRecentBlogs(responseData.blogs);
        setComments(responseData.blog.comments);
        setCommentCount(responseData.blog.comments_count);

        setIsLoading(false);
      } catch (e) {}
    }
    fetchBlog();
  }, [slug]);

  async function handleSubmit(e) {
    e.preventDefault();
    setButtonDisabled(true);
    setButtonText('Submitting...');
    try {
      const response = await Axios.post(`/blog/${slug}`, {
        name,
        email,
        comment,
      });
      const responseData = response.data.data;
      setComments([...comments, responseData.comment]);
      setCommentCount(commentCount + 1);
      setName('');
      setEmail('');
      setComment('');
      setErrors([]);
      setButtonDisabled(false);
      setButtonText('Post Comment');
    } catch (e) {
      setButtonDisabled(false);
      setButtonText('Post Comment');
      if (e.response.status === 422) {
        const response = await e.response.data;
        setErrors(response.errors);
      } else {
        console.log('Error encountered');
      }
    }
  }

  return (
    <Page title="Blog Detail">
      <div className="inner-pages-wrapper">
        <section className="breadcrumb-sction">
          <div className="container-fluid">
            <ul className="breadcrumb-block">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>Blog Details</li>
            </ul>
          </div>
        </section>
        <section className="about-cont-block blog_area single-post-area">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-9 posts-list">
                {isLoading ? <Loader /> : <BlogPost blog={blog} />}
                <div className="comments-area">
                  <h4>{commentCount} Comments</h4>
                  {isLoading ? <Loader /> : comments.map((comment) => <BlogComment comment={comment} key={comment.id} />)}
                </div>
                <div className="comment-form">
                  <h4>Leave a Reply</h4>
                  <form className="form-contact comment_form" action="#" id="commentForm" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <textarea className="form-control w-100" name="comment" id="comment" cols="30" rows="9" placeholder="Write Comment" onChange={(e) => setComment(e.target.value)} value={comment}></textarea>
                          <span className="text-danger">{errors.comment}</span>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input className="form-control" name="name" id="name" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} />
                          <span className="text-danger">{errors.name}</span>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input className="form-control" name="email" id="email" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                          <span className="text-danger">{errors.email}</span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary" disabled={buttonDisabled}>
                        {buttonText}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="blog_right_sidebar">
                  <aside className="single_sidebar_widget popular_post_widget">
                    <h3 className="widget_title">Recent Post</h3>
                    {isLoading ? <Loader /> : recentBlogs.map((recentBlog) => <BlogRecent blog={recentBlog} key={recentBlog.id} />)}
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Page>
  );
};

export default BlogDetail;
