import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import styles from "./styles.module.css";
import data from "../../dats";
import Star from "../../components/Star/Star";
import Navbar from "../../components/Navbar";
import HeaderModal from "../../components/HeaderModal";
import Footer from "../../components/Footer";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const [images, setImages] = useState("");
  const { id } = useParams();

  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <HeaderModal />
      <Row className={`${styles.productrow} m-0  mb-5`}>
        {data
          .filter((ids) => ids.id === id)
          .map((item) => {
            const {
              id,
              name,
              price,
              image,
              colors,
              company,
              description,
              shipping,
              review,
              stars,
            } = item;
            return (
              <>
                <Row className="m-0 p-0 mb-5 mt-5 px-3">
                  <button
                    onClick={() => navigate(-1)}
                    className={`${styles.backbtn} w-auto`}
                  >
                    BACK TO PRODUCTS
                  </button>
                </Row>
                <Col sm={12} lg={6}>
                  <img
                    src={images ? images : image}
                    alt="product img"
                    className={styles.preview}
                  />
                  <div className="w-100 d-flex justify-content-between">
                    <img
                      src={image}
                      alt=""
                      onClick={() => setImages(image)}
                      className={
                        images === image
                          ? styles.previewimgborder
                          : styles.previewimg
                      }
                    />
                    <img
                      src="https://images2.imgbox.com/ca/f3/rPR1K8nP_o.jpeg"
                      alt=""
                      onClick={() =>
                        setImages(
                          "https://images2.imgbox.com/ca/f3/rPR1K8nP_o.jpeg"
                        )
                      }
                      className={
                        images ===
                        "https://images2.imgbox.com/ca/f3/rPR1K8nP_o.jpeg"
                          ? styles.previewimgborder
                          : styles.previewimg
                      }
                    />
                    <img
                      src="https://images2.imgbox.com/6d/47/A11k7xmf_o.jpeg"
                      alt=""
                      onClick={() =>
                        setImages(
                          "https://images2.imgbox.com/6d/47/A11k7xmf_o.jpeg"
                        )
                      }
                      className={
                        images ===
                        "https://images2.imgbox.com/6d/47/A11k7xmf_o.jpeg"
                          ? styles.previewimgborder
                          : styles.previewimg
                      }
                    />
                    <img
                      src="https://images2.imgbox.com/1b/ea/t89LageS_o.jpeg"
                      alt=""
                      onClick={() =>
                        setImages(
                          "https://images2.imgbox.com/1b/ea/t89LageS_o.jpeg"
                        )
                      }
                      className={
                        images ===
                        "https://images2.imgbox.com/1b/ea/t89LageS_o.jpeg"
                          ? styles.previewimgborder
                          : styles.previewimg
                      }
                    />
                    <img
                      src="https://images2.imgbox.com/da/bb/iXlbK9A6_o.jpeg"
                      alt=""
                      onClick={() =>
                        setImages(
                          "https://images2.imgbox.com/da/bb/iXlbK9A6_o.jpeg"
                        )
                      }
                      className={
                        images ===
                        "https://images2.imgbox.com/da/bb/iXlbK9A6_o.jpeg"
                          ? styles.previewimgborder
                          : styles.previewimg
                      }
                    />
                  </div>
                </Col>
                <Col sm={12} lg={6}>
                  <h1 style={{ fontVariantCaps: "all-petite-caps" }}>{name}</h1>
                  <Star stars={stars} reviews={review} />
                  <h5 className="text-gray fw-bold mt-3">${price}</h5>
                  <p style={{ lineHeight: "2rem" }}>{description}</p>
                  <div className="d-flex">
                    <p className="fw-bold w-25">Available :</p>
                    <p>In Stock</p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold w-25">SKU :</p>
                    <p>{id}</p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold w-25">Brand :</p>
                    <p>{company}</p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold w-25">Shipping :</p>
                    <p>{shipping ? "FreeShipping" : "PayCharges"}</p>
                  </div>
                  <hr />
                  <div className="d-flex">
                    <p className="fw-bold w-25">Colors :</p>
                    <div
                      className={styles.roundcolor}
                      style={{ backgroundColor: colors[0] }}
                    ></div>
                    <div
                      className={styles.roundcolor}
                      style={{ backgroundColor: colors[1] }}
                    ></div>
                    <div
                      className={styles.roundcolor}
                      style={{ backgroundColor: colors[2] }}
                    ></div>
                    <div
                      className={styles.roundcolor}
                      style={{ backgroundColor: colors[3] }}
                    ></div>
                  </div>
                </Col>
              </>
            );
          })}
      </Row>
      <Footer />
    </>
  );
};
export default ProductDetails;
