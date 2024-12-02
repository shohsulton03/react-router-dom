import React from "react";
import logo from "../assets/footerLogo.svg";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="container">
          <div className="flex justify-between">
            <div className="left max-w-[452px]">
              <h2 className="text-5xl leading-[58px] font-semibold mt-[66px]">
                Let's make something special
              </h2>
              <h3 className="text-2xl leading-[36px] text-[#232536] font-semibold mt-[40px]">
                Let's talk! 🤙{" "}
              </h3>
              <p className="text-lg text-[#232536] font-medium mt-[28px]">
                020 7993 2905
              </p>
              <p className="text-lg pb-[14px] text-[#232536] font-medium mt-[4px] relative before:absolute before:w-[268px] before:h-[1px] before:bottom-0 before:left-0 before:bg-[#00000014]">
                hi@finsweet.com
              </p>
              <p className="text-sm text-[#232536] font-medium mt-[16px] max-w-[206px]">
                DLF Cybercity, Bhubaneswar, India, &52050
              </p>
            </div>
            <div className="right flex gap-[60px] mt-[66px]">
              <div>
                <p className="text-base leading-7 text-[#232536] mt-[12px] font-semibold">
                  Home
                </p>
                <p className="text-base leading-7 text-[#232536] mt-[12px] font-semibold">
                  Service
                </p>
                <p className="text-base leading-7 text-[#232536] mt-[12px] font-semibold">
                  Company
                </p>
                <p className="text-base leading-7 text-[#232536] mt-[12px] font-semibold">
                  Career{" "}
                </p>
                <p className="text-base leading-7 text-[#232536] mt-[12px] font-semibold">
                  News
                </p>
              </div>
              <div>
                <p className="text-base leading-7 text-[#232536] mt-[12px] font-semibold">
                  Service
                </p>
                <p className="text-sm text-[#232536] mt-[12px] font-medium">
                  Technical support
                </p>
                <p className="text-sm text-[#232536] mt-[12px] font-medium">
                  Testing
                </p>
                <p className="text-sm text-[#232536] mt-[12px] font-medium">
                  Development
                </p>
                <p className="text-sm text-[#232536] mt-[12px] font-medium">
                  AWS/Azure{" "}
                </p>
                <p className="text-sm text-[#232536] mt-[12px] font-medium">
                  Consulting
                </p>
                <p className="text-sm text-[#232536] mt-[12px] font-medium">
                  Consulting
                </p>
              </div>
              <div>
                <p className="text-base leading-7 text-[#232536] mt-[12px] font-semibold">
                  Resourses
                </p>
                <p className="text-sm text-[#232536] mt-[12px] font-medium">
                  About Us
                </p>
                <p className="text-sm text-[#232536] mt-[12px] font-medium">
                  Testimonial
                </p>
                <p className="text-sm text-[#232536] mt-[12px] font-medium">
                  Privacy Policy
                </p>
                <p className="text-sm text-[#232536] mt-[12px] font-medium">
                  Terms of use
                </p>
                <p className="text-sm text-[#232536] mt-[12px] font-medium">
                  Blog
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FFE6D2]">
        <div className="container">
          <div className="mt-[64px] flex justify-between py-[28px] items-center">
            <div className="flex gap-[42px]">
              <img src={logo} alt="" />
              <p className="text-base text-[#000000] font-medium">©2021 Finsweet</p>
            </div>
            <div className="flex gap-[27px]">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
