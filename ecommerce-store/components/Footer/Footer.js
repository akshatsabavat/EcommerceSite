import Link from "next/link";
import React from "react";
import { urlFor } from "../../lib/client";

const Footer = ({ bannerDesc }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{bannerDesc.discount}</p>
          <h3>{bannerDesc.largeText1}</h3>
          <h3>{bannerDesc.largeText2}</h3>
          <p>{bannerDesc.saleTime}</p>
        </div>
        <div className="right">
          <p>{bannerDesc.smallText}</p>
          <h3>{bannerDesc.midText}</h3>
          <p>{bannerDesc.desc}</p>
          <Link href={`/product/${bannerDesc.product}`}>
            <button type="button">{bannerDesc.buttonText}</button>
          </Link>
        </div>

        <img
          src={urlFor(bannerDesc.image)}
          alt="headphones"
          className="footer-banner-image"
        />
      </div>
    </div>
  );
};

export default Footer;
