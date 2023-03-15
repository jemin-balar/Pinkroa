import React from "react";
import Navbar from "../components/Navbar/index";
import Sectionone from "./Sectionone/index";
import SectionTwo from "./SectionTwo/SectionTwo";
import SectionThree from "./SectionThree/index";
import SectionFour from "./SectionFour/index";
import Footer from "../components/Footer/index";

const Home = () => {
  return (
    <>
      <Navbar />
      <Sectionone />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </>
  );
};

export default Home;
