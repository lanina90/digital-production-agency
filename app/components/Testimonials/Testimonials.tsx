import React, {Fragment} from 'react';
import {testimonials} from "@/utils/testimonials";
import TestimonialCard from "@/app/components/Testimonials/TestimonialCard/TestimonialCard";
import styles  from './Testimonials.module.scss'

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.intro}>
        <h2>What our Clients say About us</h2>
        <p>At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here&apos;s what some of our satisfied clients have to say about their experience working with us</p>
      </div>
      <div className={styles.list}>
        {testimonials.map(testimonial =>
          <Fragment key={testimonial.id}>
            <TestimonialCard
              name={testimonial.name}
              text={testimonial.text}
              title={testimonial.title}
              photo={testimonial.photo}
              position={testimonial.position}
            />
          </Fragment>
        )}
      </div>
    </section>
  );
};

export default Testimonials;