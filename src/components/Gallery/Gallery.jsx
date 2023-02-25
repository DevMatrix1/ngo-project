import React from "react";
import { Card } from "./Card";
import { Details } from "./Details";
import { motion } from "framer-motion"
export const Gallery = () => {


  return (
    //Red Nav

    <div className="flex flex-col h-fit md:h-[100vh] text-white bg-red-400 ">
    <div className="bg-[url('gallery/Cover.jpg')] bg-cover bg-center h-[10vh]  w-[99vw] flex items-center  justify-between    ">
    <div></div>
    <div className=" font-semibold text-2xl  pl-[15%]">GALLERY</div>
        <div className="pr-[10%] cursor-pointer">View All &gt; </div>
        </div>
        <div className="flex flex-wrap  w-[100vw]  ">
        {Details.map(({ type, Heading, Date, Image },index) => {
          return (
            <Card key={index} type={type} Heading={Heading} Date={Date} Image={Image} pos={index} />
            );
          })}
          </div>
          </div>
        
  );
};
