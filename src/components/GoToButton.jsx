import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

const GoToButton = () => {
  const [show, setShow] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleScroll = () => {
    if (window.scrollY >= 250) {
      setShow(true);
      return;
    }

    if (window.screenY <= 250) {
      setShow(false);
      return;
    }
  };

  useEffect(() => {
    const load = window.addEventListener("scroll", handleScroll);
    return window.removeEventListener("scroll", load);
  }, []);

  return (
    <>
      {show ? (
        <button className="to-top" onClick={scrollToTop}>
          &#8679;
        </button>
      ) : null}
    </>
  );
};

export default GoToButton;
