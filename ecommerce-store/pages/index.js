import React from "react";
// import Footer from "../components/Footer/Footer";
// import HeroBanner from "../components/HeroBanner/HeroBanner";
// import Product from "../components/Product/Product";
import { Footer, Product, HeroBanner } from "../components";
const index = () => {
  return (
    <>
      <HeroBanner />
      <div>
        <h2>Best Selling Products</h2>
        <p>Check out speakers of many variations</p>
      </div>

      <div>
        <Product />
      </div>

      <Footer />
    </>
  );
};

export default index;
