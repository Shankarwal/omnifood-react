import React from "react";

export const Testimonial = ({ src, alt, text, author }) => {
  return (
    <>
      <figure className="testimonial">
        <img src={src} alt={alt} className="testimonial-img" />
        <blockquote className="testimonial-text">{text}</blockquote>
        <p className="testimonial-author">— {author}</p>
      </figure>
    </>
  );
};
