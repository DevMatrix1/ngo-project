import React from "react";

export const Card = ({ type, Heading, Date ,Image}) => {
  return (
    <div className={`${Image} bg-cover bg-center h-[40vh] `}>
      <div className="min-w-[30vw] h-full  w-[40vw]  flex flex-col justify-between   ">
        <div className="w-[24px] h-[24px]">
          <img  className="h-full w-full" src={type == "Image" ? "gallery/photo.png" : "gallery/play.png"} />
        </div>
        <div className="min-h-[10vh] w-[90%] pl-4">
          <div className="text-lg font-semibold">{Heading}</div>
          <div className="">{Date}</div>
        </div>
      </div>
    </div>
  );
};


