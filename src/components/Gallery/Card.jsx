import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";


const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
  
export const Card = ({ type, Heading, Date ,Image,pos}) => {
  console.log(pos)
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <section>
    <motion.div
      initial={false}
      animate={
        isLoaded && isInView
          ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
          : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
      }
      transition={{ duration: 1, delay: 0.5*pos }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsInView(true)}
    >
    <div className={`h-full hover:opacity-[100%] opacity-[80%] duration-300 ${Image} bg-cover duration-150  bg-center lg:w-[33vw] w-[98vw] md:w-[50vw] min-h-[45vh] cursor-pointer hover:backdrop-brightness-150 hover:first-letter  text-white`} onLoad={() => setIsLoaded(true)} >
      <div className=" w-full h-[45vh]    flex flex-col justify-between    ">
        <div className="w-[24px] h-[24px]  top-0">
          <img  className="h-full w-full top-0 m-0" src={type == "Image" ? "gallery/photo.png" : "gallery/play.png"} />
        </div>
        <div className="min-h-[10vh]  w-[80%] pl-4">
          <div className="text-lg font-semibold">{Heading}</div>
          <div className="">{Date}</div>
        </div>
      </div>
    </div>
    </motion.div>
    </section>
  );
};


