import React from "react";

const Properties = () => {
  return (
    <>
      <div className=" relative mb-[290px] text">
        <div className="flex absolute top-[-130px] left-[76px] items-center justify-between px-[20px] gap-[21px] m-auto max-w-[1400px]  ">
          <div className="  bg-white pt-[40px] rounded-2xl  shadow-2xl flex flex-col justify-center items-center border-2 w-[655px] h-[261px] z-[2]">
            <div className="flex flex-col justify-center items-center">
              <div className=" top-[0px]  items-center ">
                <h1 className="text-[#016A70] text-[48px] font-bold">
                  ± 50 Kilos
                </h1>
              </div>
            </div>
            <div className="my-[32px] flex flex-col items-center justify-center gap-[32px]">
              <h3 className=" text-[28px]  font-semibold text-center">
                Waste Plastic Everyday
              </h3>
            </div>
          </div>
          {/* second */}
          <div className="  bg-white pt-[40px] rounded-2xl  shadow-2xl flex flex-col justify-center items-center border-2 w-[655px] h-[261px] z-[2]">
            <div className="flex flex-col justify-center items-center">
              <div className=" top-[0px]  items-center ">
                <h1 className="text-[#016A70] text-[48px] font-bold">
                  ± 10 Kilos
                </h1>
              </div>
            </div>
            <div className="my-[32px] flex flex-col items-center justify-center gap-[32px]">
              <h3 className=" text-[28px]  font-semibold text-center">
                Recycle Plastic Bottle
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Properties;
