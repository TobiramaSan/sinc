import logoImage from "../../public/SINC LOGO black outline 1.png";
import React from "react";
import Image from "next/image";
import Logo from "../svg components/logo";

const NavBar = () => {
  return (
    <div className="w-full flex flex-row px-20">
      <div className="bg-bg_color flex flex-row items-center my-6  w-full gap-4">
        {/* <Image src={logoImage} alt="" width={113.6} height={45.56} />
         */}
        <Logo />

        <div className=" flex flex-row items-center gap-4">
          <p className="text-sinc_black text-lg ">About</p>
          <p className="text-sinc_black text-lg ">SIP</p>
          <p className="text-sinc_black text-lg ">Studio</p>
          <p className="text-sinc_black text-lg ">SEEQ</p>
          <p className="text-sinc_black text-lg ">Platforms</p>
          <p className="text-sinc_black text-lg ">Initiatives</p>
          <p className="text-sinc_black text-lg ">More</p>
        </div>
      </div>
      <div className=" flex flex-row items-center text-nowrap gap-4">
        <button className="flex bg-sinc_btn px-5 py-2 rounded-full text-white text-lg">
          SINC With Us
        </button>
        <button className="flex bg-sinc_black px-5 py-2 rounded-full text-white text-lg">
          Apply to SIP 1.0
        </button>
      </div>
    </div>
  );
};

export default NavBar;
