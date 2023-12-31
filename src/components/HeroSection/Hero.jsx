import React from "react";
import Navbar from "./Navbar";
import hero from "../../assets/hero.png";
import Category from "./Category";
import TopSelling from "./TopSelling";
import Testimonial from "./Testimonial";
import Brands from "./Brands";
import Map from "./Map";
import Footer from "./Footer";

const Hero = () => {
  const herosection = [
    {
      first: "Hi, Folks!",
      second: "Inovation Dedication and Sustainable Solution",
      para: "Lorem ipsum dolor sit amet consectetur Nisl donec tortor volutpat id pharetra ultricies mauris Eget augue at egestas et consequat  quis ultricies. At vel aenean posuere neque a fermentum donec ero sut. Nullam mi egestas sed facilisis."
    },
  ];
  return (
    <>
      <div className=" bg-[#016A70] pt-10 pb-32">
        <Navbar />
        <div className="flex w-[1400px] m-auto pt-24 items-center mr-2 gap-24">
          <div className="w-1/2 text pl-8">
            {herosection.map((tab) => (<>
              <h3 className="text-[28px] text-white font-semibold">{tab.first}</h3>
              <h1 className=" text-[48px] text-white font-bold">{tab.second}
              </h1>
              <p className=" text-[16px] text-white pt-2">
                {tab.para}</p>
            </>
            ))}
            <button className="mt-7 text-white text-[16px] font-semibold border-2 px-5 py-2 rounded-xl">
              View Details
            </button>
          </div>
          <div>
            <img src={hero} alt="" />
          </div>
        </div>
      </div>
      <Category />
      <TopSelling />
      <Testimonial />
      <Brands />
      <Map />
      <Footer />
    </>
  );
};

export default Hero;
