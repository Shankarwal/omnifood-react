import { useRef } from "react";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import How from "./components/How";
import Meals from "./components/Meals";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Calltoaction from "./components/Calltoaction";
import GoToButton from "./components/GoToButton";

const App = () => {
  const featRef = useRef(null);
  return (
    <>
      <Header ref={featRef} />
      <main>
        <Hero />
        <Featured ref={featRef} />
        <How />
        <Meals />
        <Testimonials />
        <Pricing />
        <Calltoaction />
      </main>
      <Footer />
      <GoToButton />
    </>
  );
};

export default App;
