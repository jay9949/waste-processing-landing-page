import React from "react";
import im1 from "../../assets/serimg1.png";
import im2 from "../../assets/serimg2.png";
import im3 from "../../assets/serimg3.png";
import im4 from "../../assets/serimg4.png";

const Material = () => {
  return (
    <>
      <div className=" relative mb-[290px]">
        <div className="flex absolute top-[-177px] left-[76px] items-center justify-between px-[20px] gap-[25px] m-auto max-w-[1400px]  ">
          <div className="  bg-white pt-[40px] rounded-2xl  shadow-2xl flex flex-col justify-center items-center border-2 w-[309px] h-[371px] z-[2]">
            <div className="flex flex-col justify-center items-center">
              <div className="border-2 w-[146px] h-[146px] rounded-full relative ">
                <div className="  bg-[#016A70] rounded-full  absolute  top-[0px] border-black w-[146px] h-[146px] flex items-center justify-center overflow-hidden ">
                  <img
                    src={im1}
                    alt=""
                    className="w-[99px] h-[255px] absolute top-[24px] right-[15px] "
                  />
                </div>
              </div>
            </div>
            <div className="my-[32px] flex flex-col items-center justify-center gap-[32px]">
              <h1 className="text-[20px] text-center font-[600] text-[#222831] max-w-[10rem]">
                Live Training Door to Doors
              </h1>
              <h3 className="text-center">Admin Yovi</h3>
            </div>
          </div>
          {/* second */}
          <div className="  bg-white pt-[23px] rounded-2xl  shadow-2xl flex flex-col justify-center items-center border-2 w-[309px] h-[371px] z-[2] ">
            <div className="flex flex-col justify-center items-center">
              <div className="border-2 w-[146px] h-[146px] rounded-full relative ">
                <div className="  bg-[#016A70] rounded-full  absolute  top-[0px] border-black w-[146px] h-[146px] flex items-center justify-center overflow-hidden ">
                  <img
                    src={im2}
                    alt=""
                    className="w-[99px] h-[255px] absolute top-[24px] right-[15px] "
                  />
                </div>
              </div>
            </div>
            <div className="my-[32px] flex flex-col items-center justify-center gap-[32px]">
              <h1 className="text-[20px] text-center font-[600] text-[#222831] max-w-[10rem]">
                E-Course Week
              </h1>
              <h3 className="text-center">Admin Imelda</h3>
            </div>
          </div>
          {/* third */}
          <div className=" bg-white pt-[40px] rounded-2xl  shadow-2xl flex flex-col justify-center items-center border-2 w-[309px] h-[371px] z-[2]">
            <div className="flex flex-col justify-center items-center">
              <div className="border-2 w-[146px] h-[146px] rounded-full relative ">
                <div className="  bg-[#016A70] rounded-full  absolute  top-[0px] border-black w-[146px] h-[146px] flex items-center justify-center overflow-hidden ">
                  <img
                    src={im3}
                    alt=""
                    className="w-[99px] h-[255px] absolute top-[24px] right-[15px] "
                  />
                </div>
              </div>
            </div>
            <div className="my-[32px] flex flex-col items-center justify-center gap-[32px]">
              <h1 className="text-[20px] text-center font-[600] text-[#222831] max-w-[10rem]">
                Weste Bank Manager
              </h1>
              <h3 className="text-center">Admin Adzan</h3>
            </div>
          </div>
          {/* fourth */}
          <div className=" bg-white pt-[28px] rounded-2xl  shadow-2xl flex flex-col justify-center items-center border-2 w-[309px] h-[371px] z-[2]">
            <div className="flex flex-col justify-center items-center">
              <div className="border-2 w-[146px] h-[146px] rounded-full relative ">
                <div className="  bg-[#016A70] rounded-full  absolute  top-[0px] border-black w-[146px] h-[146px] flex items-center justify-center overflow-hidden ">
                  <img
                    src={im4}
                    alt=""
                    className="w-[99px] h-[255px] absolute top-[24px] right-[15px] "
                  />
                </div>
              </div>
            </div>
            <div className="my-[32px] flex flex-col items-center justify-center gap-[32px]">
              <h1 className="text-[20px] text-center font-[600] text-[#222831] max-w-[10rem]">
                Biogas Manager
              </h1>
              <h3 className="text-center">Admin Tiara</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Material;
