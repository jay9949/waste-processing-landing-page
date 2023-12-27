import React from "react";
import top1 from "../../assets/top1.png";
import top2 from "../../assets/top2.png";
import top3 from "../../assets/top3.png";
import top4 from "../../assets/top4.png";
import top5 from "../../assets/top5.png";
import top6 from "../../assets/top6.png";

const TopSelling = () => {
  return (
    <div className="mt-[157px] m-auto text w-[1400px] pb-[167px]">
      <div className="pb-20 text-center">
        <h3 className="text-[28px] font-normal text-[#222831]">Top Selling</h3>
        <h2 className="text-[36px] font-semibold text-[#222831]">
          Waste Processing Product
        </h2>
      </div>
      <div>
        <div className="flex gap-12 justify-center">
          <div className="shadow-lg">
            <img src={top1} alt="" />
            <div className="bg-[#016A70] rounded-es-2xl rounded-b-2xl text text-white ">
              <h5 className="text-[20px] font-semibold text-start pt-4 pl-7 pb-1">
                Magokits Pack
              </h5>
              <h6 className="text-[16px] font-normal text-start pl-7 pb-5 pt-[6px]">
                Rp. 150.000
              </h6>
            </div>
          </div>
          <div className="shadow-lg">
            <img src={top2} alt="" />
            <div className="bg-[#016A70] rounded-es-2xl rounded-b-2xl text text-white ">
              <h5 className="text-[20px] font-semibold text-start pt-4 pl-7 pb-1">
                Composing Tools
              </h5>
              <h6 className="text-[16px] font-normal text-start pl-7 pb-5 pt-[6px]">
                Rp. 1.550.000
              </h6>
            </div>
          </div>
          <div className="shadow-lg">
            <img src={top3} alt="" />
            <div className="bg-[#016A70] rounded-es-2xl rounded-b-2xl text text-white ">
              <h5 className="text-[20px] font-semibold text-start pt-4 pl-7 pb-1">
                Composter Full Pack
              </h5>
              <h6 className="text-[16px] font-normal text-start pl-7 pb-5 pt-[6px]">
                Rp. 300.000
              </h6>
            </div>
          </div>
        </div>
        <div className="flex gap-12 justify-center pt-[50px]">
          <div className="shadow-lg">
            <img src={top4} alt="" />
            <div className="bg-[#016A70] rounded-es-2xl rounded-b-2xl text text-white ">
              <h5 className="text-[20px] font-semibold text-start pt-4 pl-7 pb-1">
                Waste Sorters
              </h5>
              <h6 className="text-[16px] font-normal text-start pl-7 pb-5 pt-[6px]">
                Rp. 15.000.000
              </h6>
            </div>
          </div>
          <div className="shadow-lg">
            <img src={top5} alt="" />
            <div className="bg-[#016A70] rounded-es-2xl rounded-b-2xl text text-white ">
              <h5 className="text-[20px] font-semibold text-start pt-4 pl-7 pb-1">
                Biogas Stove
              </h5>
              <h6 className="text-[16px] font-normal text-start pl-7 pb-5 pt-[6px]">
                Rp. 4.000.000
              </h6>
            </div>
          </div>
          <div className="shadow-lg">
            <img src={top6} alt="" />
            <div className="bg-[#016A70] rounded-es-2xl rounded-b-2xl text text-white ">
              <h5 className="text-[20px] font-semibold text-start pt-4 pl-7 pb-1">
                Waste Bin 2in1
              </h5>
              <h6 className="text-[16px] font-normal text-start pl-7 pb-5 pt-[6px]">
                Rp. 300.000
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSelling;
