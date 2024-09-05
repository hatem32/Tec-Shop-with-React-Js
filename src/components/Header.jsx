import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatusTab } from "../stores/cart";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blog",
  },
];

const Header = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);
  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };
  return (
    <header className=" sticky z-50 top-0 container flex justify-between items-center mb-5 bg-white">
      <div className="flex items-center gap-4 ">
        <Link
          to="/"
          className="text-primary font-semibold tracking-widest text-2xl uppercase sm-text-3xl"
        >
          Tec Shop
        </Link>
      </div>
      <div className=" lg:bold">
        <ul className="flex items-center gap-4 ">
          {MenuLinks.map((data, index) => (
            <li key={index}>
              <a
                href={data.link}
                className="inline-block px-4 font-semibold text-gray-500 hover:text-black"
              >
                {" "}
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-center gap-7 pl-35">
        <div className="relative group  sm:block">
          <input
            type="text"
            placeholder=" Search"
            className="w-[300px] transition-all duration-300 
                 rounded-full border border-gray-500
                px-3 py-1 focus:outline-none focus:border-5"
          />

          <IoMdSearch
            className="text-xl 
          absolute top-1/2 -translate-y-1/2 right-1 text-primary
          duration-200 "
          />
        </div>
      </div>

      <div
        className="w-10 h-10 bg-gray-100 rounded-full
        flex justify-center items-center relative cursor-pointer hover:bg-gray-400"
        onClick={handleOpenTabCart}
      >
        <FaCartShopping className="w-6" />
        <span
          className="absolute top-2/3 right-1/2 bg-primary text-white text-sm
            w-5 h-5 rounded-full flex justify-center items-center"
        >
          {totalQuantity}
        </span>
      </div>
    </header>
  );
};

export default Header;
