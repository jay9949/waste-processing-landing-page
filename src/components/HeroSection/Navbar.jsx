import React from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className=" flex xl:justify-between xl:w-[1400px] h-20 bg-white m-auto rounded-xl xl:flex">
      <div className="h-text  font-normal w-[105px] text-[#016A70] pt-5 pl-10">
        <span className="text-[23.43px] flex items-center">
          B<img src={logo} alt="" />
          ANG.in
        </span>
      </div>
      <div className="flex">
        <ul className="flex items-center gap-[52px] pr-10 text text-xl font-normal text-[#393E46] cursor-pointer">
          <li className="hover:text-[#016A70] hover:text-[23.43px] hover:font-semibold hover:duration-500 duration-500">
            Home
          </li>
          <li className="text-[#016A70] text-[23.43px] font-semibold ">
            Service
          </li>
          <li className="hover:text-[#016A70] hover:text-[23.43px] hover:font-semibold hover:duration-500 duration-500">
            About
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
