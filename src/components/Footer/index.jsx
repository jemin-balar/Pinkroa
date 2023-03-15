import React from "react";
import styles from "./styles.module.css";
import { Col, Row } from "reactstrap";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { HiMail } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <Row className={`m-0 p-0 ${styles.footermain}`}>
        <Col sm={12} md={12} lg={6} className={styles.column}>
          <div className={`${styles.colone} `}>
            <img
              src="./Assets/Images/For Lite BG.png"
              alt=""
              className="Pinkroa-logo"
            />
            <div className={styles.icons}>
              <img
                src="./Assets/Images/instagram.png"
                alt=""
                className={styles.socialmediasvg}
              />
              <img
                src="./Assets/Images/facebook.png"
                alt=""
                className={styles.socialmediasvg}
              />
              <img
                src="./Assets/Images/pinterest.png"
                alt=""
                className={styles.socialmediasvg}
              />
            </div>
          </div>
        </Col>
        <Col sm={12} md={12} lg={6}>
          <Row className="mt-3">
            <Col>
              <ul>
                <h6>COMPANY</h6>
                <li className="pointer" onClick={() => navigate("/about")}>
                  About Us
                </li>
                <li className="pointer">Contact Us</li>
              </ul>
            </Col>
            <Col>
              <ul>
                <h6>HELP</h6>
                <li
                  className="pointer"
                  onClick={() => navigate("/termsandcondition")}
                >
                  Terms & Condition
                </li>
                <li
                  className="pointer"
                  onClick={() => navigate("/privacypolicy")}
                >
                  Privacy Policy
                </li>
              </ul>
            </Col>
            <Row>
              <Col>
                <ul>
                  <h6>ADDRESS</h6>
                  <li>
                    <MdLocationPin /> No.6, Second Floor, Rudra Diamond Building
                    , B/H Kiran Hospital, Katargam, Surat, Gujarat 395004
                  </li>
                  <li>
                    <FiPhoneCall />
                    &nbsp;<span>Call Us :</span> +91 9898333389
                  </li>
                  <li>
                    <HiMail />
                    &nbsp;<span>Email Us :</span> mantradiamond9@gmail.com
                  </li>
                </ul>
              </Col>
            </Row>
          </Row>
        </Col>
        <hr />
        <div className={styles.lsfooter}>
          &copy;2023
          <span className="text-gray">&nbsp; mantra &nbsp;</span> All rights
          reserved
        </div>
      </Row>
    </>
  );
};
export default Footer;
