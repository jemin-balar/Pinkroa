import React from "react";
import { Row, Col } from "reactstrap";
import Footer from "../components/Footer";
import HeaderModal from "../components/HeaderModal";
import Navbar from "../components/Navbar";
import styles from "./styles.module.css";

const About = () => {
  return (
    <>
      <Navbar />
      <HeaderModal />
      <Row className="m-0 p-0">
        <Col lg={6} sm={12}>
          <div className={`p-5 pe-0 ${styles.divset}`}>
            <img
              src="./Assets/Images/hero-table01.jpeg"
              alt=""
              className={`${styles.imgset}`}
            />
          </div>
        </Col>
        <Col lg={6} sm={12}>
          <div className="p-5 ps-0 pe-5">
            <h1 className="fw-bold">
              <span className={`${styles.abouttextdecorate}`}>Our</span>
              &nbsp;Story
            </h1>
            <p className="textcolor lh-30 pt-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              accusantium sapiente tempora sed dolore esse deserunt eaque
              excepturi, delectus error accusamus vel eligendi, omnis beatae.
              Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
              dolore, obcaecati incidunt sequi blanditiis est exercitationem
              molestiae delectus saepe odio eligendi modi porro eaque in libero
              minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
              ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
              similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
              iste.
            </p>
          </div>
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default About;
