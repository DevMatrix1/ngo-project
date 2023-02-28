import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { playIcon,photoIcon } from "../../assets";


const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
const whiteLableEffect  = `bg-white w-full mb-2 p-2`
  
export const Card = ({ type, Heading, Date ,Image,pos}) => {
  console.log(pos)
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isShown, setIsShown] = useState(false);

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
    <div  onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} className={`h-full opacity-[100%] hover:opacity-[75%] duration-300  ${Image} bg-cover  bg-center lg:w-[33.3vw] w-[100vw] md:w-[50vw] min-h-[45vh] cursor-pointer hover:text-black ` } onLoad={() => setIsLoaded(true)} >
      <div className=" w-full h-[45vh]    flex flex-col justify-between ">
        <div className="w-[24px] h-[24px]  top-0">
          <img  className="h-full w-full top-0 m-0" src={type == "Image" ? `${playIcon}`: `${photoIcon}`} />
        </div>
        <div className={`min-h-[10vh]   pl-4 ${isShown  ?  whiteLableEffect : "w-[80%]"}`}>
          <div className="text-lg font-semibold  ">{Heading}</div>
          <div className="">{Date}</div>
        </div>
      </div>
    </div>
    </motion.div>
    </section>
  );
};


