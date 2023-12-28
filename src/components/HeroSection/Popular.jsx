import React from "react";
import pop1 from "../../assets/pop1.png";
import pop2 from "../../assets/pop2.png";
import pop3 from "../../assets/pop3.png";
import pop4 from "../../assets/pop4.png";
import pop5 from "../../assets/pop5.png";
import pop6 from "../../assets/pop6.png";
import pop7 from "../../assets/pop7.png";
import pop8 from "../../assets/pop8.png";

const Popular = () => {
  return (
    <div className="pb-[84px]">
      <div className="text">
        <h3 className="text-[28px] text-[#393E46] font-semibold text-center">
          Most Popular Material
        </h3>
        <h1 className="text-[48px] text-[#016A70] font-bold pt-[10px] text-center">
          The World of Health is Now Within Your Grasp
        </h1>
        <p className=" text-center pt-[14px] text-[#393E46]">
          See examples of some of the most popular materials designed by experts
          below. New materials every month at no extra cost.
        </p>
      </div>
      <div className="pt-[100px]">
        <div className="flex gap-6 justify-center">
          <div className="shadow-lg">
            <img src={pop1} alt="" />
            <div className="bg-[#016A70] rounded-es-2xl rounded-b-2xl text text-white ">
              <h5 className="text-[20px] font-semibold text-start pt-4 pl-7 pb-1">
                Kreatifitas Anak Muda
              </h5>
              <h6 className="text-[16px] font-normal text-start pl-7 pb-5 pt-[6px]">
                Rp. 0
              </h6>
            </div>
          </div>
          <div className="shadow-lg">
            <img src={pop2} alt="" />
            <div className="bg-[#016A70] rounded-es-2xl rounded-b-2xl text text-white ">
              <h5 className="text-[20px] font-semibold text-start pt-4 pl-7 pb-1">
                One Action One Tree I
              </h5>
              <h6 className="text-[16px] font-normal text-start pl-7 pb-5 pt-[6px]">
                Rp. 0
              </h6>
            </div>
          </div>
          <div className="shadow-lg">
            <img src={pop3} alt="" />
            <div className="bg-[#016A70] rounded-es-2xl rounded-b-2xl text text-white ">
              <h5 className="text-[20px] font-semibold text-start pt-4 pl-7 pb-1">
                One Action One Tree II
              </h5>
              <h6 className="text-[16px] font-normal text-start pl-7 pb-5 pt-[6px]">
                Rp. 100.000
              </h6>
            </div>
          </div>
          <div className="shadow-lg">
            <img src={pop4} alt="" />
            <div className="bg-[#016A70] rounded-es-2xl rounded-b-2xl text text-white ">
              <h5 className="text-[20px] font-semibold text-start pt-4 pl-7 pb-1">
                Good Movement
              </h5>
              <h6 className="text-[16px] font-normal text-start pl-7 pb-5 pt-[6px]">
                Rp. 90.000
              </h6>
            </div>
          </div>
        </div>
        <div className="flex gap-6 justify-center pt-[50px]">
          <div className="shadow-lg">
            <img src={pop5} alt="" />
            <div className="bg-[#016A70] rounded-es-2xl rounded-b-2xl text text-white ">
              <h5 className="text-[20px] font-semibold text-start pt-4 pl-7 pb-1">
                Darling From Home
              </h5>
              <h6 className="text-[16px] font-normal text-start pl-7 pb-5 pt-[6px]">
                Rp. 50.000
              </h6>
            </div>
          </div>
          <div className="shadow-lg">
            <img src={pop6} alt="" />
            <div className="bg-[#016A70] rounded-es-2xl rounded-b-2xl text text-white ">
              <h5 className="text-[20px] font-semibold text-start pt-4 pl-7 pb-1">
                Strategi pengelola Sam..
              </h5>
              <h6 className="text-[16px] font-normal text-start pl-7 pb-5 pt-[6px]">
                Rp. 0
              </h6>
            </div>
          </div>
          <div className="shadow-lg">
            <img src={pop7} alt="" />
            <div className="bg-[#016A70] rounded-es-2xl rounded-b-2xl text text-white ">
              <h5 className="text-[20px] font-semibold text-start pt-4 pl-7 pb-1">
                Profezzi Academy
              </h5>
              <h6 className="text-[16px] font-normal text-start pl-7 pb-5 pt-[6px]">
                Rp. 20.000
              </h6>
            </div>
          </div>
          <div className="shadow-lg">
            <img src={pop8} alt="" />
            <div className="bg-[#016A70] rounded-es-2xl rounded-b-2xl text text-white ">
              <h5 className="text-[20px] font-semibold text-start pt-4 pl-7 pb-1">
                Festival Hijau
              </h5>
              <h6 className="text-[16px] font-normal text-start pl-7 pb-5 pt-[6px]">
                Rp. 150.000
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
