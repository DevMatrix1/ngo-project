import React from "react";
import { Card } from "./Card";
import { Details } from "./Details";
import {Cover} from "../../assets";
export const Gallery = () => {
  return (
    //Red Nav

    <div className="flex flex-col h-fit lg:h-[100vh] text-white bg-white ">
      <div className="relative  w-[100vw] h-[10vh] ">
        <div className={`absolute ${Cover} bg-cover bg-center  w-[100vw] h-[10vh] opacity-[0.6]`}/>
        <div className="absolute z-10 bg-red-600 w-[100vw] h-[10vh] opacity-[0.3]" />
        <div className={`absolute z-50 h-[10vh]  w-[100vw] flex items-center  justify-between`}>
          <div></div>
          <div className=" font-semibold text-2xl  pl-[15%]">GALLERY</div>
          <div className="pr-[10%] cursor-pointer">View All &gt; </div>
        </div>
      </div>
      <div className="flex flex-wrap  w-[100vw]  ">
        {Details.map(({ type, Heading, Date, Image }, index) => {
          return (
            <Card
              key={index}
              type={type}
              Heading={Heading}
              Date={Date}
              Image={Image}
              pos={index}
            />
            
          );
        })}
      </div>
    </div>
  );
};
