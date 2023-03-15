import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "reactstrap";
import styles from "./styles.module.css";

const Sectionone = () => {
  const navigate = useNavigate();
  return (
    <>
      <Row className="m-auto p-0 container">
        <Col lg={6} sm={12} className="m-auto">
          <div className="p-3">
            <h1 className="fw-bold">
              Design Your
              <br />
              Comfort Zone
            </h1>
            <p className="textcolor fs-1rem">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
              at sed omnis corporis doloremque possimus velit! Repudiandae nisi
              odit, aperiam odio ducimus, obcaecati libero et quia tempora
              excepturi quis alias?
            </p>
            <button
              className={styles.shopbtn}
              onClick={() => navigate("/products")}
            >
              SHOP NOW
            </button>
          </div>
        </Col>
        <Col lg={6} sm={12}>
          <div className={`${styles.img} mb-5`}>
            <div className={styles.backgroundimg}></div>
            <img
              src="./Assets/Images/hero-table02.jpeg"
              alt=""
              className={styles.homeimg2}
            />
            <img
              src="./Assets/Images/hero-table01.jpeg"
              alt=""
              className={styles.homeimg1}
            />
          </div>
        </Col>
      </Row>
    </>
  );
};
export default Sectionone;
