import React from "react";
import { Link } from "react-router-dom";
import {
  FaLocationArrow,
  FaMobileAlt,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          <div className="py-8 px-4">
            <Link
              to="/"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm-text-3xl"
            >
              Tec Shop
            </Link>
            <p className="text-gray-600 lg:pr-24 pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
              condimentum neque. Vivamus sagittis
            </p>
            <p className="text-gray-500 mt-4">Made by Hatem Hessan</p>
          </div>
          {/* Footer Links */}
          <div
            className="col-span-2 grid grid-cols-2
          sm:grid-cols-3 md:pl-10"
          >
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Second Col Links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Noida , Uttar Pradesh</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>+91 123456789</p>
                </div>
                {/* Social Links */}
                <div className="flex items-center gap-3 mt-6">
                  <a
                    href="https://www.instagram.com/hatem_hessan/"
                    target="blank"
                  >
                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100023978122990"
                    target="blank"
                  >
                    <FaFacebook className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hatem-hessan-a31886309/"
                    target="blank"
                  >
                    <FaLinkedin className="text-3xl hover:text-primary duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
