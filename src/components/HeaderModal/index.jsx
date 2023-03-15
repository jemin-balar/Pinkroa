import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import data from "../../dats";
import styles from "./styles.module.css";

const HeaderModal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <>
      <div className={`d-flex ${styles.aboutnavigate} p-4`}>
        <div className="d-flex container">
          <h1 className={styles.abouttext} onClick={() => navigate("/")}>
            Home&nbsp;
          </h1>
          <h1>{location.pathname === "/products" && "/ Products"}</h1>
          <h1>{location.pathname === "/about" && "/ About"}</h1>
          <h1
            className={styles.abouttext}
            onClick={() => navigate("/products")}
          >
            {location.pathname === `/products/${id}` && `/ Products`}
          </h1>
          <h1>{location.pathname === `/checkout` && "/ Checkout"}</h1>
          <h1>{location.pathname === `/cart` && "/ Cart"}</h1>
          <h1 className="text-danger">
            {location.pathname === `/privacypolicy` && "/ Privacypolicy"}
          </h1>
          <h1 className="text-danger">
            {location.pathname === `/termsandcondition` &&
              "/ Terms & Condition"}
          </h1>
          {data
            .filter((ids) => ids.id === id)
            .map((item) => {
              return (
                <>
                  <h1 style={{ textTransform: "capitalize" }}>
                    &nbsp;/ {item.name}
                  </h1>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default HeaderModal;
