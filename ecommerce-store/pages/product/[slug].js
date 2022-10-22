import React from "react";
import { client, urlFor } from "../../lib/client";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  return (
    <>
      <div className="product-detail-container">
        <div className="image-container">
          <img src={urlFor(image && image[0])}></img>
        </div>
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <p>(20)</p>
          </div>
          <h4>Details :</h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <h3>Quantity:</h3>
          <p className="quantity-desc">
            <span className="minus" onClick="">
              <AiOutlineMinus />
            </span>
            <span className="num" onClick="">
              0
            </span>
            <span className="minus" onClick="">
              <AiOutlinePlus />
            </span>
          </p>
          <div className="buttons">
            <button type="button" className="add-to-cart">
              Add to Cart
            </button>
            <button type="button" className="buy-now" onClick="">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;
  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product },
  };
};
export default ProductDetails;
