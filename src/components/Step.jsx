import React from "react";

const Step = ({ number, heading, desc, src, alt }) => {
  return (
    <>
      <div className="step-text-box">
        <p className="step-number">{number}</p>
        <h3 className="heading-tertiary">{heading}</h3>
        <p className="step-description">{desc}</p>
      </div>
      <div className="step-img-box">
        <img src={src} alt={alt} className="step-img" />
      </div>
    </>
  );
};

export default Step;
