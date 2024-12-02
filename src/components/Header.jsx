import React from "react";
import logo from "../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Header = () => {
  return (
    <header id="header" className="bg-[#232536] border-b border-[#FFFFFF0D]">
      <div className="container">
        <nav className="flex justify-between py-7">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="flex items-center gap-8">
            <NavLink className="text-base leading-6 text-[#FFFFFF]" to={"/"}>Home</NavLink>
            <NavLink className="text-base leading-6 text-[#FFFFFF]" to={"/service"}>Service</NavLink>
            <NavLink className="text-base leading-6 text-[#FFFFFF]" to={"/company"}>Company</NavLink>
            <NavLink className="text-base leading-6 text-[#FFFFFF]" to={"/career"}>Career</NavLink>
            <NavLink className="text-base leading-6 text-[#FFFFFF]" to={"/"}>Blog</NavLink>
            <NavLink className="text-base leading-6 text-[#FFFFFF]" to={"/login"}>Log In</NavLink>
            <div className="flex items-center gap-2 text-[#FFD3AF]">
              <a href="#" className="text-base leading-6">Clone project</a>
              <FaArrowRightLong className="text-[#FFFFFF]" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
