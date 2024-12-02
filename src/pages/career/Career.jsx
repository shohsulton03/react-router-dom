import React from "react";
import career from "../../assets/career.png";

const Career = () => {
  return (
    <main>
      <div className="container">
        <div className="text-center mt-[96px] h-[100vh]">
          <p className="text-sm text-[#232536] font-medium">
            CAREER AT FINSWEET
          </p>
          <h2 className="text-5xl leading-[58px] font-semibold mt-5 max-w-[624px] m-auto">
            We hired people who are Always Passionate about what they do
          </h2>
          <p className="text-base text-[#232536] mt-6 max-w-[550px] m-auto">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw .
          </p>
          <img className="mt-[64px]" src={career} alt="" />
          <p className="mt-[80px] mb-[16px] text-lg font-medium">See Our open positions</p>
          <p>👇</p>
        </div>
      </div>
    </main>
  );
};

export default Career;
