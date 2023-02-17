import React from "react";
import "../Footer/Footer.css";

function Footer() {
  return (
    <div className="footer w-full p-5 flex flex-col items-center bg-indigo-500">
      <h2 className="font-bold  -mt-3">Follow Us </h2>
      <div className=" m-auto flex flex-row justify-between items-center w-1/6  mt-3  ">
        <img src="https://img.icons8.com/ios-filled/30/null/facebook-new.png" />
        <img src="https://img.icons8.com/ios-glyphs/30/null/instagram-new.png" />
        <img src="https://img.icons8.com/ios-glyphs/30/null/twitter--v1.png" />
      </div>
    </div>
  );
}

export default Footer;