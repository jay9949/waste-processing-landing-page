import React from "react";
import cat1 from "../../assets/category1.png";
import cat2 from "../../assets/category2.png";
import cat3 from "../../assets/category3.png";

const Category = () => {
  return (
    <div className="w-[1400px] m-auto">
      <div className="text flex justify-around text-center items-center mx-[191px] pt-[74px] mb-[167px] text-[#222831]">
        <div>
          <h1 className="text-[48px] font-semibold">200+</h1>
          <h3 className="text-[28px] font-semibold">Member</h3>
        </div>
        <div>
          <h1 className="text-[48px] font-semibold">20</h1>
          <h3 className="text-[28px] font-semibold">Waste Bank</h3>
        </div>
        <div>
          <h1 className="text-[48px] font-semibold">50</h1>
          <h3 className="text-[28px] font-semibold">Products</h3>
        </div>
        <div>
          <h1 className="text-[48px] font-semibold">150</h1>
          <h3 className="text-[28px] font-semibold">Course Education</h3>
        </div>
      </div>
      <div className="items-center text-center text mb-14">
        <div className="pb-20">
          <h3 className="text-[28px] font-normal text-[#222831]">Category</h3>
          <h2 className="text-[36px] font-semibold text-[#222831]">
            We Offer Best Service
          </h2>
        </div>

        <div className="flex justify-center gap-[44px] ">
          <div className=" px-[55px]  py-[41px] rounded-[20px] shadow-lg">
            <img src={cat1} alt="" className="m-auto" />
            <h5 className="text-xl font-semibold text-[#393E46]">
              Information & Education
            </h5>
            <h6 className="text-[16px] font-normal w-[181px] m-auto text-[#393E46]">
              Built Wicket longer admire do barton vanity itself do in it.
            </h6>
          </div>
          <div className=" px-[75px]  py-[41px] rounded-[20px] shadow-lg">
            <img src={cat2} alt="" className="m-auto" />
            <h5 className="text-xl font-semibold text-[#393E46]">
              Course & Training
            </h5>
            <h6 className="text-[16px] font-normal w-[181px] m-auto text-[#393E46]">
              Built Wicket longer admire do barton vanity itself do in it.
            </h6>
          </div>
          <div className=" px-[75px]  py-[41px] rounded-[20px] shadow-lg">
            <img src={cat3} alt="" className="m-auto" />
            <h5 className="text-xl font-semibold text-[#393E46]">
              Waste Recycling
            </h5>
            <h6 className="text-[16px] font-normal w-[181px] m-auto text-[#393E46]">
              Built Wicket longer admire do barton vanity itself do in it.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
