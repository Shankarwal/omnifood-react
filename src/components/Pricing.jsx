import React from "react";

function Pricing() {
  return (
    <section className="section-pricing" id="pricing">
      <div className="container">
        <span className="subheading">Pricing</span>
        <h2 className="heading-secondary">
          Eat well with our pocket friendly plans
        </h2>
      </div>

      <div className="container grid grid-2-cols margin-bottom-md">
        <div className="pricing-plan plan-starter">
          <header className="plan-header">
            <p className="plan-name">Starter</p>
            <p className="plan-price">
              <span>$</span>399
            </p>
            <p className="plan-text">per month, that's just $13 per meal!</p>
          </header>
          <ul className="list">
            <li className="list-item">
              <span className="list-icon">✔</span>
              <span>1 meal per day</span>
            </li>
            <li className="list-item">
              <span className="list-icon">✔</span>
              <span>Order between 11am to 9pm</span>
            </li>
            <li className="list-item">
              <span className="list-icon">✔</span>
              <span>Delivery is free</span>
            </li>
            <li className="list-item">
              <span className="list-icon">✖</span>
              <span>Get access to latest recipes</span>
            </li>
          </ul>
          <div className="plan-sign-up">
            <a href="#" className="btn primary">
              Start Eating well
            </a>
          </div>
        </div>

        <div className="pricing-plan plan-complete">
          <header className="plan-header">
            <p className="plan-name">Compltete</p>
            <p className="plan-price">
              <span>$</span>649
            </p>
            <p className="plan-text">per month, that's just $11 per meal!</p>
          </header>
          <ul className="list">
            <li className="list-item">
              <span className="list-icon">✔</span>
              <span>
                <strong>2 meals</strong> per day
              </span>
            </li>
            <li className="list-item">
              <span className="list-icon">✔</span>
              <span>
                Order <strong>24/7</strong>
              </span>
            </li>
            <li className="list-item">
              <span className="list-icon">✔</span>
              <span>Delivery is free</span>
            </li>
            <li className="list-item">
              <span className="list-icon">✔</span>
              <span>Get access to latest recipes</span>
            </li>
          </ul>
          <div className="plan-sign-up">
            <a href="#" className="btn primary">
              Start Eating well
            </a>
          </div>
        </div>
      </div>

      <div className="container grid">
        <aside className="plan-details">
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </aside>
      </div>

      <div className="container grid grid-4-cols">
        <div className="feature">
          <span className="list-icon">✔</span>
          <p className="feature-title">Never cook again!</p>
          <p className="feature-text">
            Our subscriptions cover 365 days per year, even including major
            holidays.
          </p>
        </div>
        <div className="feature">
          <span className="list-icon">✔</span>
          <p className="feature-title">Local and organic</p>
          <p className="feature-text">
            Our cooks only use local, fresh, and organic products to prepare
            your meals.
          </p>
        </div>
        <div className="feature">
          <span className="list-icon">✔</span>
          <p className="feature-title">No waste</p>
          <p className="feature-text">
            All our partners only use reusable containers to package all your
            meals.
          </p>
        </div>
        <div className="feature">
          <span className="list-icon">✔</span>
          <p className="feature-title">Pause anytime</p>
          <p className="feature-text">
            Going on vacation? Just pause your subscription, and we refund
            unused days.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
