import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import headerImage from "../../assets/headerImage.png";
import logoBar from "../../assets/logoBar.png";

const Home = () => {
  return (
    <main className="bg-[#232536]">
      <div className="container">
        <div className="flex gap-[93px] pt-[96px] items-center">
          <div className="left max-w-[600px]">
            <div className="w-6 h-6 bg-[#FFFFFF0F]"></div>
            <h1 className="text-[56px] leading-[68px] text-[#FFFFFF] mt-6">
              Transform Your Idea Into Reality with Finsweet
            </h1>
            <p className="text-base leading-6 text-[#FFFFFF] max-w-[500px] mt-6">
              The entire Finsweet team knows what's good with Webflow and you
              can too with 1 week and a good attitude.
            </p>
            <button className="flex items-center gap-2 mt-8 bg-[#444CFC] w-[219px] h-[64px] py-[20px] px-[32px] text-base text-[#FFFFFF]">
              Request Quote <FaArrowRightLong className="text-[#FFFFFF]" />
            </button>
          </div>
          <div className="right">
            <img src={headerImage} alt="" />
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <p className="text-sm text-[#FFFFFF]">Our Clients</p>
            <p className="text-lg text-[#FFFFFF]">We've Worked with</p>
          </div>
          <img src={logoBar} alt="" />
        </div>
      </div>
    </main>
  );
}

export default Home