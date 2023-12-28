import React from "react";
import Navbar from "./Navbar";
import abt1 from "../../assets/about1.png";

const Inovation = () => {
  return (
    <>
      <div className=" bg-[#016A70] pt-10 ">
        <Navbar />
        <div className=" w-[1400px] flex gap-[75px] pt-[194px] m-auto pb-[100px]">
          <div className="w-full">
            <img src={abt1} alt="" className="pl-[61px]" />
          </div>
          <div className="text pr-[62px]">
            <h3 className="text-[28px] font-semibold text-[#fff]">About me</h3>
            <h1 className="text-[48px] font-bold text-[#fff] ">
              Inovation Dedication and Sustainable Solution
            </h1>
            <p className="text-[16px] font-normal text-[#fff] pt-[20px]">
              Lorem ipsum dolor sit amet consectetur. Maecenas orci fames ac
              justo massa odio facilisis vulputate ut. Libero a porta malesuada
              tortor volutpat habitasse est in vitae. Sed pellentesque aliquam a
              nunc neque placerat phasellus lectus ac. Adipiscing nibh cursus
              pretium consectetur. Pellentesque arcu ullamcorper odio id auctor.
              Sed tristique sodales fames volutpat nunc mauris etiam habitant
              lacus. <br /> Nulla sit purus urna platea neque sed aliquam at
              parturient. Nisi lectus convallis auctor in ultrices. Aliquet
              vitae cras non nunc. Massa faucibus sed sit nam. Aliquam maecenas
              pellentesque enim odio nec enim vestibulum augue. Orci commodo
              neque nisl in. <br /> Nibh aenean eu aliquet pharetra fringilla
              tristique venenatis arcu duis. Dolor viverra quisque volutpat erat
              aliquam a mi mollis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inovation;
