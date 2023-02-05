import React from "react";
import { steps } from "../assets/data";
import Step from "./Step";

function How() {
  return (
    <section className="section-how" id="how">
      <div className="container">
        <span className="subheading">How it works</span>
        <h2 className="heading-secondary">
          Your daily dose of health in 3 simple steps
        </h2>
      </div>
      <div className="container grid grid-2-cols grid-center-v">
        {/* <!-- STEPS --> */}
        {steps.map((item) => {
          return <Step key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

export default How;
