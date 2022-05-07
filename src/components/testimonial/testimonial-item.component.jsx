const TestimonialItem = ({ testimonial }) => {
  return (
    <div className="item">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="testimonial-block">
            <p>{testimonial.content}</p>
            <img src={testimonial.image ? testimonial.image : 'assets/images/testimonial.jpg'} alt={testimonial.name} loading="lazy" />
            <h5>
              <span>{testimonial.name}</span> <span>{testimonial.location}</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
