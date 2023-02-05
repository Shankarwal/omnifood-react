import React from "react";
import { logos } from "../assets/data";
import Images from "./Images";

const Featured = React.forwardRef((props, ref) => {
  return (
    <section className="section-featured" ref={ref}>
      <div className="container">
        <h2 className="heading-featured-in">As Featured in</h2>
        <div className="logos">
          <Images data={logos} />
        </div>
      </div>
    </section>
  );
});

export default Featured;
