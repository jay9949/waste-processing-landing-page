import React from "react";
import dot from "../../assets/testdot.png";

const Testimonial = () => {
  return (
    <div className="w-[1400px] h-[330px] flex gap-52 text text-[#222831] m-auto items-center">
      <div>
        <h3 className="text-[28px] font-normal">Testimonial</h3>
        <h2 className="text-[36px] font-semibold">What people say about us.</h2>
      </div>
      <div>
        <div className="shadow-xl rounded-[ 11.469px]">
          <h6 className="text-[16px] font-semibold text-[#5E6282] pt-9 pl-[39px] pr-[79px] pb-[77px]">
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </h6>
          <h5 className="text-[#5E6282] text-[20px] font-semibold pl-[39px]">
            Mike taylor
          </h5>
          <h6 className="pt-[7px] text-[#5E6282] text-[16px] pl-[39px] pb-[35px]">
            Lahore, Pakistan
          </h6>
        </div>
        <img src={dot} alt="" className="m-auto pt-[36px]" />
      </div>
    </div>
  );
};

export default Testimonial;
