import React from "react";
import {Card} from "./Card";
import { Details} from "./Details";
export const Gallery = () => {
  return (
    <div className="flex flex-wrap mx-auto justify-center">
      {Details.map(({ type, Heading, Date,Image }) => {
        return <Card type={type} Heading={Heading} Date={Date} Image={Image} />;
      })}
    </div>
  );
};
