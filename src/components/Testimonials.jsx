import React from "react";
import { testimonials } from "../assets/data";
import { Testimonial } from "./Testimonial";
import { items } from "../assets/gallery";
import { GalleryItem } from "./GalleryItem";

function Testimonials() {
  return (
    <section className="section-testimonials" id="testimonials">
      <div className="testimonials-container">
        <span className="subheading">Testimonals</span>
        <h2 className="heading-secondary">Once you try, you can't go back</h2>
        <div className="testimonials">
          {testimonials.map((test) => {
            return <Testimonial key={test.id} {...test} />;
          })}
        </div>
      </div>
      <div className="gallery">
        {items.map(({ id, ...rest }) => {
          return <GalleryItem key={id} {...rest} />;
        })}
      </div>
    </section>
  );
}

export default Testimonials;
