import React from "react";
import CreditcardForm from "../components/CreditcardForm";
import HeaderModal from "../components/HeaderModal";
import Navbar from "../components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./styles.module.css";
const Checkout = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    <>
      <Navbar />
      <HeaderModal />
      {isAuthenticated ? (
        <CreditcardForm />
      ) : (
        <div className="text-center mt-5">
          <button
            style={{
              width: "20%",
            }}
            className={`${styles.addcartbtn} mb-1 fw-bold`}
            onClick={() => loginWithRedirect()}
          >
            LOGIN
          </button>
        </div>
      )}
    </>
  );
};

export default Checkout;
