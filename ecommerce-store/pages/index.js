import React from "react";
// import Footer from "../components/Footer/Footer";
// import HeroBanner from "../components/HeroBanner/HeroBanner";
// import Product from "../components/Product/Product";
import { Footer, Product, HeroBanner } from "../components";
const Home = () => {
  return (
    <div>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Check out speakers of many variations</p>
      </div>

      <div className="products-container">
        <Product />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
