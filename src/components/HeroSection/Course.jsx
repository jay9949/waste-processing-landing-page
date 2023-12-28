import React from "react";
import cor from "../../assets/course.png";

const Course = () => {
  return (
    <div className="bg-[#016A70]">
      <div className="flex w-[1400px] m-auto pt-24 items-center gap-24">
        <div className="w-2/3 text pl-8 pb-[63px]">
          <h3 className="text-[28px] text-white font-semibold">
            Course & Training
          </h3>
          <h1 className=" text-[48px] text-white font-bold">
            Take intensive classes, Online & Live To Green the World
          </h1>
          <p className=" text-[16px] text-white pt-2">
            Lorem ipsum dolor sit amet consectetur. Maecenas orci fames ac justo
            massa odio facilisis vulputate ut. Libero a porta malesuada tortor
            volutpat habitasse est in vitae. Sed pellentesque aliquam a nunc
            neque placerat phasellus lectus ac. Adipiscing nibh cursus pretium
            consectetur. Pellentesque arcu ullamcorper odio id auctor. Sed
            tristique sodales fames volutpat nunc mauris etiam habitant lacus.
          </p>
        </div>
        <div>
          <img src={cor} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Course;
