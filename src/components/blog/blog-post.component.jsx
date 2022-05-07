import parse from 'html-react-parser';

const BlogPost = ({ blog }) => {
  return (
    <div className="single-post">
      <div className="feature-img">
        <img className="img-fluid" src={blog.image ? blog.image : 'assets/images/blog-full.jpg'} alt="" />
      </div>
      <div className="blog_details">
        <h2>{blog.title}</h2>
        {parse(blog.content)}
      </div>
    </div>
  );
};

export default BlogPost;
