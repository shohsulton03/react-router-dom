import React from 'react'
import company1 from "../../assets/company1.png";
import company2 from "../../assets/company2.png";
import company3 from "../../assets/company3.png";

const Company = () => {
  return (
    <main>
      <div className="container">
        <div className="mt-[96px]">
          <div className="w-7 h-7 bg-[#FFD3AF]"></div>
          <p className="text-sm text-[#000000] font-medium mt-6">Company</p>
          <h2 className="text-5xl leading-[58px] font-semibold mt-5 max-w-[660px]">
            Award-winning Company seen and used by millions around the world.
          </h2>
          <p className="text-base text-[#232536] mt-6 max-w-[720px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The Maker
            is a decentralized.{" "}
          </p>
          <div className='flex gap-3 mt-16 mb-4'>
            <img src={company1} alt="" />
            <img src={company2} alt="" />
            <img src={company3} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Company