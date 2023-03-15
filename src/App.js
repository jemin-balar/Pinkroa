import React from "react";
import About from "./About";
import Home from "./Home";
import HeaderModal from "./components/HeaderModal/index";
import Products from "./Products/ProductOverView/index";
import ProductDetails from "./Products/ProductDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./components/Error";
import Privacypolicy from "./components/PrivacyPolicy";
import TermsandCondition from "./components/TermsAndCondition/indedx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/headermodal" element={<HeaderModal />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/termsandcondition" element={<TermsandCondition />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
