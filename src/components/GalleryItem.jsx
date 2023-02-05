import React from "react";

export const GalleryItem = ({ src, alt }) => {
  return (
    <>
      <figure className="gallery-item">
        <img src={src} alt={alt} />
      </figure>
    </>
  );
};
