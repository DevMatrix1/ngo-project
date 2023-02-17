import React from "react";
import "../Footer/Footer.css";

function Footer() {
  return (
    <div className="footer w-full mt-3  p-3 flex flex-col items-center bg-red-500">
      <h2 className="font-bold  ">Follow Us on </h2>
      <div className=" flex flex-row justify-between h-10 items-center w-1/6   ">
        <img
          m-0
          src="https://img.icons8.com/ios-filled/30/null/facebook-new.png"
        />
        <img src="https://img.icons8.com/ios-glyphs/30/null/instagram-new.png" />
        <img src="https://img.icons8.com/ios-glyphs/30/null/twitter--v1.png" />
      </div>
    </div>
  );
}

export default Footer;
