import React from "react";

const Images = ({ data }) => {
  return (
    <React.Fragment>
      {data.map(({ id, src, alt }) => {
        return <img key={id} src={src} alt={alt} />;
      })}
    </React.Fragment>
  );
};

export default Images;
