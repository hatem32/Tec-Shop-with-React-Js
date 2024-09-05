import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";
import CartTab from "./cartTab";
import { useSelector } from "react-redux";
import Category from "./Category";
import CategoryTwo from "./CategoryTwo";
import Services from "./Services";
import Banner from "./Banner";
import headphone from "../assests/Hero/headphone.png";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "lorem Ipsum is Lorem Ipsum and Lorem Ipsum is Lorem Ipsum. and Lorem Ipsum is Lorem Ipsum",
  bgColor: "#f42c37",
};
const Layout = () => {
  const statusTabCart = useSelector((store) => store.cart.statusTab);
  return (
    <div className="bg-white w-full h-full">
      <main
        className={` max-w-full m-auto p-5 transform transition-transform duration-500
        ${statusTabCart === false ? "" : "-translate-x-56"}`}
      >
        <Header />
        <Hero />
        <Category />
        <CategoryTwo />
        <Services />
        <Banner data={BannerData} />
        <Outlet />
      </main>
      <CartTab />
    </div>
  );
};

export default Layout;
