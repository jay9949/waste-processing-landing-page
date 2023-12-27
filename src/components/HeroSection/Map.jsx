import React from "react";
import map from "../../assets/map.png";

const Map = () => {
  return (
    <div className="w-[1400px] m-auto text pb-[150px]">
      <div className="flex">
        <div>
          <img src={map} alt="" className="mr-[10rem]" />
        </div>
        <div className="w-[50%] pt-[160px]">
          <h3 className="text-[28px] font-normal text-[#222831]">Maps</h3>
          <h2 className="text-[36px] font-semibold text-[#222831]">
            Find your nearest waste bank
          </h2>
          <p className="text-[#393E46] text-[16px] font-normal pt-[10px] pb-[10px]">
            Lorem ipsum dolor sit amet consectetur. Nisl donec tortor volutpat
            id pharetra ultricies mauris. Eget augue at egestas et consequat
            quis ultricies. At vel aenean posuere neque a fermentum donec eros
            ut. Nullam mi egestas sed facilisis.
          </p>
          <h3 className="text-[16px] font-normal text-[#393E46] border-2 pl-[39px] pt-[14px] pb-[14px] rounded-lg border-[#222831]">
            Search your waste bank here!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Map;
