import React from "react";
// import Footer from "../components/Footer/Footer";
// import HeroBanner from "../components/HeroBanner/HeroBanner";
// import Product from "../components/Product/Product";
import { Footer, Product, HeroBanner } from "../components";
import { client } from "../lib/client";
const Home = ({ bannerData, products }) => {
  return (
    <div>
      <HeroBanner
        heroBanner={bannerData.length && bannerData[0]}
        product={products.length && products[0]}
      />
      {console.log(products, bannerData)}
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

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
