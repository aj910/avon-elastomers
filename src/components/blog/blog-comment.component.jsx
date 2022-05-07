const BlogComment = ({ comment }) => {
  return (
    <div className="comment-list">
      <div className="single-comment justify-content-between d-flex">
        <div className="user justify-content-between d-flex">
          <div className="thumb">
            <img src="assets/images/candidate-3.jpg" alt="" />
          </div>
          <div className="desc">
            <p className="comment">{comment.comment}</p>
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <h5>
                  <a href="#">{comment.name}</a>
                </h5>
                <p className="date">{comment.created_at}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComment;
