import React from "react";
import bg1 from "../../assets/blog1.png";
import bg2 from "../../assets/blog2.png";
import bg3 from "../../assets/blog3.png";

const Blogs = () => {
  return (
    <div className="pt-[194px] m-auto">
      <div className="flex text pl-[100px] pb-[78px]">
        <div className="">
          <img src={bg1} alt="" className="object-contain" />
        </div>
        <div className="pl-[23px] w-1/2 ">
          <h3 className="text-[#222831] text-3xl font-semibold w-[636px]">
            Prinsip Pengolahan Limbah Sampah yang Baik Bagi Lingkungan
          </h3>
          <h6 className="text-justify pr-[100px] text-[16px] font-normal pt-[23px]">
            Lorem ipsum dolor sit amet consectetur. Maecenas orci fames ac justo
            massa odio facilisis vulputate ut. Libero a porta malesuada tortor
            volutpat habitasse est in vitae. Sed pellentesque aliquam a nunc
            neque placerat phasellus lectus ac. Adipiscing nibh cursus pretium
            consectetur. Pellentesque arcu ullamcorper odio id auctor. Sed
            tristique sodales fames volutpat nunc mauris etiam habitant lacus.
          </h6>
          <div className="flex justify-end pr-[100px] pt-[35px]">
            <button className="text-[#016A70] text-[16px] font-semibold ">
              View More
            </button>
          </div>
        </div>
      </div>

      {/* bg2 */}

      <div className="flex text pl-[100px] pb-[78px]">
        <div className="">
          <img src={bg2} alt="" className="object-contain" />
        </div>
        <div className="pl-[23px] w-1/2 ">
          <h3 className="text-[#222831] text-3xl font-semibold w-[636px]">
            Webinar Pengelolaan Limbah Medis Covid-19 #GenerasiRestorasi
          </h3>
          <h6 className="text-justify pr-[100px] text-[16px] font-normal pt-[23px]">
            Lorem ipsum dolor sit amet consectetur. Maecenas orci fames ac justo
            massa odio facilisis vulputate ut. Libero a porta malesuada tortor
            volutpat habitasse est in vitae. Sed pellentesque aliquam a nunc
            neque placerat phasellus lectus ac. Adipiscing nibh cursus pretium
            consectetur. Pellentesque arcu ullamcorper odio id auctor. Sed
            tristique sodales fames volutpat nunc mauris etiam habitant lacus.
          </h6>
          <div className="flex justify-end pr-[100px] pt-[35px]">
            <button className="text-[#016A70] text-[16px] font-semibold ">
              View More
            </button>
          </div>
        </div>
      </div>

      {/* bg3 */}

      <div className="flex text pl-[100px] pb-[80px]">
        <div className="">
          <img src={bg3} alt="" className="object-contain" />
        </div>
        <div className="pl-[23px] w-1/2 ">
          <h3 className="text-[#222831] text-3xl font-semibold w-[636px]">
            Strategi Pengelolaan Sampah Guna Mendukung Zero Waste To Landfill
          </h3>
          <h6 className="text-justify pr-[100px] text-[16px] font-normal pt-[23px]">
            Lorem ipsum dolor sit amet consectetur. Maecenas orci fames ac justo
            massa odio facilisis vulputate ut. Libero a porta malesuada tortor
            volutpat habitasse est in vitae. Sed pellentesque aliquam a nunc
            neque placerat phasellus lectus ac. Adipiscing nibh cursus pretium
            consectetur. Pellentesque arcu ullamcorper odio id auctor. Sed
            tristique sodales fames volutpat nunc mauris etiam habitant lacus.
          </h6>
          <div className="flex justify-end pr-[100px] pt-[35px]">
            <button className="text-[#016A70] text-[16px] font-semibold ">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blogs;
