import React from "react";
import Navbar from "./Navbar";
import info1 from "../../assets/info1.png";
import info2 from "../../assets/info2.png";
import info3 from "../../assets/info3.png";
import info4 from "../../assets/info4.png";
import info5 from "../../assets/info5.png";

const Information = () => {
  return (
    <div className=" bg-[#016A70] pt-10">
      <Navbar />
      <div className="text">
        <div className="m-auto text-center pt-[145px]">
          <h3 className="text-[28px] font-semibold text-[#FFF]">
            Information & Education
          </h3>
          <h1 className="text-[48px] font-bold text-[#fff]">Waste Flow</h1>
        </div>
        <div className="flex justify-between items-center w-[1400px] m-auto pl-[50px] pb-[117px]">
          <div className="">
            <img src={info1} alt="" className="" />
            <h6 className="w-2/3 text-center text-[16px] text-[#fff] font-normal pt-6">
              Waste Segregation by Clients
            </h6>
          </div>
          <div>
            <img src={info2} alt="" className="pl-5" />
            <h6 className=" w-3/4 text-center text-[16px] text-[#fff] font-normal pt-6">
              Waste Storage Client's Warehouse
            </h6>
          </div>
          <div>
            <img src={info3} alt="" className="pl-1" />
            <h6 className=" w-4/5 text-center text-[16px] text-[#fff] font-normal pt-6">
              Segregated Waste Collection
            </h6>
          </div>
          <div>
            <img src={info4} alt="" className="pl-1" />
            <h6 className="w-3/4 text-center text-[16px] text-[#fff] font-normal pt-6">
              W4C's Material Recovery Facility
            </h6>
          </div>
          <div>
            <img src={info5} alt="" className="pl-5" />
            <h6 className="w-4/5 text-center text-[16px] text-[#fff] font-normal pt-6">
              Residue being Sent to the Landfill
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
