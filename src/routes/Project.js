import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Work from "../components/Projects/Work"

const Project = () => {
  return (
    <div>
      <Navbar />
      <Hero heading="Projects." text="This is my latest and exciting project." />
      <Work/>
      <Footer />
    </div>
  );
};

export default Project;
