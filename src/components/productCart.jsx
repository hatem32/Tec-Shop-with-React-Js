import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";
import Button from "./Shared/Button";

const ProductCart = (props) => {
  const carts = useSelector((store) => store.cart.items);
  const { id, name, price, image, slug, aosDelay } = props.data;
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: id,
        quantity: 1,
      })
    );
  };
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-delay={aosDelay}
        className="relative group"
      >
        <Link to={slug}>
          <img
            src={image}
            alt=""
            className="[h-180px] w-[260px] object-cover rounded-md "
          />
        </Link>
        <div
          className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  h-full w-full
          text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 pr-14"
        >
          <Link to={slug}>
            <Button
              text={"View Details"}
              bgColor={"bg-primary"}
              textColor={"text-white"}
            />
          </Link>
        </div>
      </div>
      <h3 className="text-2xl py-3 text-start font-normal">{name}</h3>
      <div className="flex justify-between items-center">
        <p>
          $<span className="text-2xl font-normal">{price}</span>
        </p>
        <div className="pr-14">
          <button
            className="bg-gray-300 p-2 rounded-md text-sm hover:bg-primary/90 flex gap-2"
            onClick={handleAddToCart}
          >
            <FaCartShopping className="w-5" />
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
