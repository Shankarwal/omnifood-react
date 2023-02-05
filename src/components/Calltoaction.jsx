import React from "react";

const Calltoaction = () => {
  return (
    <section className="section-cta" id="cta">
      <div className="container">
        <div className="cta">
          <div className="cta-text-box">
            <h2 className="heading-secondary">Get your first meal for free!</h2>
            <p className="cta-text">
              Healthy, tasty and hassle-free meals are waiting htmlFor you.
              Start eating well today. You can cancel or pause anytime. And the
              first meal is on us!
            </p>

            <form className="cta-form" action="#">
              <div>
                <label htmlFor="name">Full name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Steve Smith"
                  required=""
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="example@example.com"
                  required=""
                />
              </div>
              <div>
                <label htmlFor="select-where">
                  Where did you hear from us?
                </label>
                <select id="select-where" required="">
                  <option value="">Please choose one option</option>
                  <option value="friends">Friends and Family</option>
                  <option value="podcast">Podcast</option>
                  <option value="ad">Youtube Video</option>
                  <option value="Facebook">Facebook</option>
                  <option value="others">other</option>
                </select>
              </div>

              <button className="btn btn-form">Sign Up now</button>
            </form>
          </div>
          <div className="cta-img-box"></div>
        </div>
      </div>
    </section>
  );
};

export default Calltoaction;
