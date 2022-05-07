import { useContext } from 'react';
import ReactOwlCarousel from 'react-owl-carousel';

import StateContext from '../../context/StateContext';

import TestimonialItem from './testimonial-item.component';

const TestimonialContainer = () => {
  const { testimonials } = useContext(StateContext);
  const testimonial_options = {
    margin: 0,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  return (
    <ReactOwlCarousel className="owl-theme owl-testimonial-slider" {...testimonial_options}>
      {testimonials.map((testimonial) => (
        <TestimonialItem key={testimonial.id} testimonial={testimonial} />
      ))}
    </ReactOwlCarousel>
  );
};

export default TestimonialContainer;
