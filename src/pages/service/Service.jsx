import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Service = () => {
  return (
    <main className=" bg-[#FFE6D2] pb-4">
      <div className="container">
        <div className="flex items-center pt-[96px]">
          <div className="left max-w-[50%]">
            <p className="text-sm text-[#232536] font-medium">Our Services</p>
            <h2 className="text-5xl leading-[58px] font-semibold mt-3">
              We Build Software Solutionthat Solve Clients Business Challenges
            </h2>
            <p className="text-base text-[#232536] mt-6 max-w-[550px]">
              Through True Rich Attended does no end it his mother since
              favourable real had half every him case in packages enquire we up
              ecstatic.
            </p>
            <div className="flex items-center gap-2 px-[32px] py-[20px] mt-[40px] bg-[linear-gradient(180deg,#444CFC_0%,#444CFC_100%)] max-w-[231px] max-h-[64px]">
              <button className="text-balance text-[#FFFFFF]">
                Request A Quote
              </button>
              <FaArrowRightLong className="text-[#FFFFFF]" />
            </div>
          </div>
          <div className="right mx-auto">
            <p className="text-2xl leading-9 font-semibold text-[#232536]">Technical support</p>
            <div className="flex gap-2 items-center">
              <p className="text-2xl leading-9 font-semibold text-[#232536]">Development</p>
              <FaArrowRightLong className="text-[#232536] text-xl" />
            </div>
            <p className="text-2xl leading-9 font-semibold text-[#232536]">AWS/Azure </p>
            <p className="text-2xl leading-9 font-semibold text-[#232536]">Consulting</p>
            <p className="text-2xl leading-9 font-semibold text-[#232536]">Information Technology</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Service;
