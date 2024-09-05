import "./App.css";
import React from "react";
import Layout from "./components/layout";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Banner from "../src/components/Banner";
import Smartwatch2 from "../src/assests/Category/smartwatch2-removebg-preview.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: Smartwatch2,
  title2: "Smart Solo ",
  title3: "Winter Sale",
  title4:
    "lorem Ipsum is Lorem Ipsum and Lorem Ipsum is Lorem Ipsum. and Lorem Ipsum is Lorem Ipsum",
  bgColor: "#2dcc6f",
};

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });

    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:slug" element={<Detail />} />
        </Route>
      </Routes>
      <Banner data={BannerData2} />
      <Partners />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
