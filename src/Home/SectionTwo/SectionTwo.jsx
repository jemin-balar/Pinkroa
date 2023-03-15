import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import styles from "./styles.module.css";
import data from "../../dats";
import { useNavigate } from "react-router-dom";

const SectionTwo = () => {
  const navigate = useNavigate();
  const [currentProducts, setcurrentProducts] = useState([0, 2, 3]);

  useEffect(() => {
    setTimeout(() => {
      const randomIndex1 = Math.floor(Math.random() * data.length);
      const randomIndex2 = Math.floor(Math.random() * data.length);
      const randomIndex3 = Math.floor(Math.random() * data.length);
      setcurrentProducts([randomIndex1, randomIndex2, randomIndex3]);
      // const randomslice = (ar, size) => {
      //   let newar = [...ar];
      //   newar.splice(Math.floor(Math.random() * ar.length), 1);
      //   return ar.length <= size + 1 ? newar : randomslice(newar, size);
      // };
      // console.log(randomslice([1, 2, 3, 4, 5], 2));
    }, 10000);
  }, [currentProducts]);

  return (
    <>
      <Row
        className={` m-auto  ${styles.featurep}`}
        style={{ backgroundColor: "rgb(241,245,248)" }}
      >
        <Row className="m-0 p-0">
          <h1 className="text-center mt-5 mb-5">
            Featur<span className={styles.textdecoration}>ed P</span>roducts
          </h1>
        </Row>
        <Row className="m-0 p-0">
          {currentProducts.map((product) => {
            return (
              <Col sm={12} lg={4} md={6}>
                <article className="menu-item">
                  <div className="containersclass">
                    <img
                      src={data[product].image}
                      alt="image"
                      className={`${styles.productimg} image`}
                    />
                    <div
                      className="middle"
                      onClick={() =>
                        navigate(
                          `/products/${data[product].id}`
                          //  {
                          //   state: { id: id },
                          // }
                        )
                      }
                    >
                      <div className="text">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <p>{data[product].name}</p>
                    <p className="text-gray">${data[product].price}</p>
                  </div>
                </article>
              </Col>
            );
          })}
          {/* <Col sm={12} lg={4} md={6}>
            <article className="menu-item">
              <div className="containersclass">
                <img
                  src={data[7].image}
                  alt="image"
                  className={`${styles.productimg} image`}
                />
                <div
                  className="middle"
                  onClick={() =>
                    navigate(
                      `/products/${data[7].id}`
                    )
                  }
                >
                  <div className="text">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <p>{data[7].name}</p>
                <p className="text-gray">${data[7].price}</p>
              </div>
            </article>
          </Col>
          <Col sm={12} lg={4} md={6}>
            <article className="menu-item">
              <div className="containersclass">
                <img
                  src={data[10].image}
                  alt="image"
                  className={`${styles.productimg} image`}
                />
                <div
                  className="middle"
                  onClick={() =>
                    navigate(
                      `/products/${data[10].id}`
                    )
                  }
                >
                  <div className="text">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <p>{data[10].name}</p>
                <p className="text-gray">${data[10].price}</p>
              </div>
            </article>
          </Col> */}
        </Row>
        <div className="text-center mb-5 mt-5">
          <button
            className={styles.showbtn}
            onClick={() => navigate("/products")}
          >
            ALL PRODUCTS
          </button>
        </div>
      </Row>
    </>
  );
};

export default SectionTwo;
