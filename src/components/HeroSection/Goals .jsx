import React from "react";
import abt2 from "../../assets/about2.png";

const Goals = () => {
  return (
    <div className=" w-[1400px] flex gap-[75px] pt-[194px] m-auto pb-[100px]">
      <div className="text pl-[61px]">
        <h3 className="text-[28px] font-semibold text-[#016A70]">About me</h3>
        <h1 className="text-[48px] font-bold text-[#016A70] ">
          Goals and Objectives
        </h1>
        <p className="text-[16px] font-normal text-[#016A70] pt-[20px]">
          Lorem ipsum dolor sit amet consectetur. Maecenas orci fames ac justo
          massa odio facilisis vulputate ut. Libero a porta malesuada tortor
          volutpat habitasse est in vitae. Sed pellentesque aliquam a nunc neque
          placerat phasellus lectus ac. Adipiscing nibh cursus pretium
          consectetur. Pellentesque arcu ullamcorper odio id auctor. Sed
          tristique sodales fames volutpat nunc mauris etiam habitant lacus.{" "}
          <br /> Nulla sit purus urna platea neque sed aliquam at parturient.
          Nisi lectus convallis auctor in ultrices. Aliquet vitae cras non nunc.
          Massa faucibus sed sit nam. Aliquam maecenas pellentesque enim odio
          nec enim vestibulum augue. Orci commodo neque nisl in. <br /> Nibh
          aenean eu aliquet pharetra fringilla tristique venenatis arcu duis.
          Dolor viverra quisque volutpat erat aliquam a mi mollis.
        </p>
      </div>
      <div className="w-full">
        <img src={abt2} alt="" className="pr-[62px]" />
      </div>
    </div>
  );
};

export default Goals;
