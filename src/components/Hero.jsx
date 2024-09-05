import React from "react";
import Image1 from "../assests/Hero/headphone.png";
import Button from "./Shared/Button";
const HeroData = [
  {
    id: 1,
    subtitle: "Best Solo",
    img: Image1,
    title: "Wireless",
    title2: "Headphone",
  },
];
const Hero = () => {
  return (
    <div className="container">
      <div
        className="overflow-hidden rounded-3xl min-h-[550px]
        sm:min-h-[650px] hero-bg-color flex justify-center items-center"
      >
        <div className="container pb-8 sm:pb-0">
          {HeroData.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div
                  className="flex flex-col justify-center
                    gap-4 sm:pl-3 pt-12 sm:pt-0 text-center
                    sm:text-left order-2 sm:order-1 relative z-10"
                >
                  {/* text content section */}
                  <h1
                    data-aos="zoom-out"
                    data-aso-duration="500"
                    data-aso-once="true"
                    className="text-2xl sm:text-6xl lg:text-2xl font-bold"
                  >
                    {data.subtitle}
                  </h1>
                  <h1
                    data-aos="zoom-out"
                    data-aso-duration="500"
                    data-aso-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <h1
                    data-aos="zoom-out"
                    data-aso-duration="500"
                    data-aso-once="true"
                    className="text-5xl uppercase text-white sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold"
                  >
                    {data.title2}
                  </h1>
                  <div
                    data-aos="fade-up"
                    data-aso-offset="0"
                    data-aso-duration="500"
                    data-aso-delay="300"
                  >
                    <Button
                      text="Shop Now"
                      bgColor="bg-primary"
                      textColor="text-white"
                    />
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aso-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px]
                            sm:scale-105 lg:scale-110 object-contain mx:auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40 "
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
