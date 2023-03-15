import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary container">
        <div className="container-fluid">
          <h2 className={styles.text}>
            Comfy <span className={styles.logo}>sloth</span>
          </h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ flexGrow: "unset" }}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className={`nav-item ${styles.navtext}`}>
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className={`nav-item ${styles.navtext}`}>
                <Link to="/about" className="nav-link active">
                  About
                </Link>
              </li>
              <li className={`nav-item ${styles.navtext}`}>
                <Link to="/products" className="nav-link active">
                  Products
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
