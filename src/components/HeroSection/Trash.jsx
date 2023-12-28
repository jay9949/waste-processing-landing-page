import React from "react";
import trash from "../../assets/trash.png";

const Trash = () => {
  return (
    <>
      <div className="bg-[#016A70] pb-[193px]">
        <div className="flex w-[1400px]  m-auto pt-24 items-center gap-24">
          <div className="w-2/3 text pl-8 pb-[60px]">
            <h3 className="text-[28px] text-white font-semibold">
              Put Your Trash
            </h3>
            <h1 className=" text-[48px] text-white font-bold">
              We do Collect and Recycle
            </h1>
            <p className=" text-[16px] text-white pt-2">
              We do prioritize the fulfillment of customer needs for a product
              and service, rather than solely focusing on the creation of a new
              "eco-product" that may not have a demand, enabling the regular
              market forces to come into play, operating based on the principles
              of <br /> supply and demand.
            </p>
          </div>
          <div className="">
            <img src={trash} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Trash;
