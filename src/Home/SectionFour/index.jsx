import React from "react";
import { Row, Col } from "reactstrap";
import styles from "./styles.module.css";

const SectionFour = () => {
  return (
    <>
      <Row className={`m-auto p-0 ${styles.mainsection} container`}>
        <Col sm={12} md={12} lg={6}>
          <h2 className="fw-bold mt-5">Join our newsletter and get 20% off</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint unde quaerat ratione soluta veniam provident adipisci cumque
            eveniet tempore?
          </p>
        </Col>
        <Col sm={12} md={12} lg={6}>
          <form action="" className="mt-5">
            <div className="d-flex">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                size="40"
                className={styles.inputfield}
              />
              <input type="submit" className={styles.subscribebtn} />
            </div>
          </form>
        </Col>
      </Row>
    </>
  );
};

export default SectionFour;
