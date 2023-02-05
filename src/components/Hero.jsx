import React from "react";
import { Link } from "react-scroll";
import { customers } from "../assets/data";
import Images from "./Images";

const Hero = () => {
  return (
    <section className="section-hero" id="hero">
      <div className="hero grid grid-2-cols">
        <div className="hero-text-box">
          <h1 className="heading-primary">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="hero-description">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <Link
            className="btn primary margin-right-sm"
            to="cta"
            smooth={true}
            duration={900}
          >
            Start Eating well
          </Link>
          <Link className="btn secondary" to="how" smooth={true} duration={700}>
            Learn more &darr;
          </Link>
          <div className="delivered-meals">
            <div className="delivered-cutomer-imgs">
              <Images data={customers} />
            </div>
            <p className="delivered-text">
              <span>250,000+</span> meals delivered last year!
            </p>
          </div>
        </div>
        <div className="hero-img-box">
          <picture>
            <source srcSet="Hero/hero.webp" type="image/webp" />
            <source srcSet="Hero/hero-min.png" type="image/png" />

            <img
              src="img/hero-min.png"
              className="hero-img"
              alt="women eating dish on table ingredients used"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;
