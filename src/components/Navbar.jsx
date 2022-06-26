import React, { useState } from "react";
import logo from "../img/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src={logo} alt="" />
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-darkGrayishBlue">
            Pricing
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Product
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            About Us
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Careers
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Community
          </a>
        </div>
        <a
          href="#"
          className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
        >
          Get Started
        </a>

        <button
          onClick={handleMenu}
          id="menu-btn"
          className={`${
            isOpen ? "open" : ""
          } block hamburger md:hidden focus:outline-none`}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div className="md:hidden">
        <div
          id="menu"
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute flex flex-col items-center self-end py-8 mt10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
        >
          <a className="hover:text-brightRed" href="#">Pricing</a>
          <a className="hover:text-brightRed" href="#">Product</a>
          <a className="hover:text-brightRed" href="#">About Us</a>
          <a className="hover:text-brightRed" href="#">Careers</a>
          <a className="hover:text-brightRed" href="#">Community</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
