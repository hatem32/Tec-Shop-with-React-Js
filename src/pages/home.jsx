import React from "react";
import { products } from "../products";
import ProductCart from "../components/productCart";

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center mb-10 max-w-[600px] mx-auto space-y-2 text-3xl font-bold lg:text-4xl">
        Best Seller Products
      </h1>
      <p className="text-center mb-10 max-w-[600px] mx-auto space-y-2 text-xs text-gray-400">
        Explore Our Products
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {products.map((product, key) => (
          <ProductCart key={key} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
