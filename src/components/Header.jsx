import React, { useCallback, useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { links } from "../assets/data";
import { Link } from "react-scroll";

const Header = React.forwardRef((props, ref) => {
  const [sticky, setSticky] = useState(false);

  const handleSticky = useCallback(
    ({ top }) => {
      if (top <= 130) {
        !sticky && setSticky(true);
      } else {
        sticky && setSticky(false);
      }
    },
    [sticky]
  );

  useEffect(() => {
    const scroll = window.addEventListener("scroll", () => {
      handleSticky(ref.current.getBoundingClientRect());
    });

    return window.removeEventListener("scroll", scroll);
  }, [handleSticky]);

  const classes = `header ${sticky ? "sticky" : null}`;
  return (
    <header className={classes}>
      <div className="logo">
        <Link to="hero" duration={500} smooth={true} offset={-100}>
          <img src={logo} alt="logo" className="logo-img" />
        </Link>
      </div>
      <nav>
        <ul className="nav-links">
          {links.map(({ id, text }, index) => {
            const classes = `link ${
              index === links.length - 1 ? "last" : null
            }`;
            return (
              <li key={id}>
                <Link to={id} duration={800} smooth={true} className={classes}>
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
});

export default Header;
