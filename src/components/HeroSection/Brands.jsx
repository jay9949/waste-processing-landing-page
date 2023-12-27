import React from "react";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/img1.png";
import logo3 from "../../assets/img2.png";

const Brands = () => {
  return (
    <div className="pt-[167px] w-[1400px] m-auto pb-[167px]">
      <div className="flex justify-center gap-[85px]">
        <div className="h-text  font-normal w-[105px] text-[#016A70] pt-10">
          <span className="text-[23.43px] flex">
            B<img src={logo} alt="" />
            ANG.in
          </span>
        </div>
        <img src={logo2} alt="" className="w-[368px]" />
        <img src={logo3} alt="" className="w-[158px]" />
      </div>
    </div>
  );
};

export default Brands;
