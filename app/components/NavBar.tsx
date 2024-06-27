import logoImage from "../../public/SINC LOGO black outline 1.png";
import React from "react";
import Image from "next/image";
import Logo from "../svg components/logo";

const NavBar = () => {
  return (
    <div className="">
      <div className="bg-bg_color flex flex-row justify-center">
        {/* <Image src={logoImage} alt="" width={113.6} height={45.56} />
         */}
        <Logo />

        <div className=" flex flex-row ">
          <p className="">About</p>
          <p className="">Sip</p>
          <p className="">Studio</p>
          <p className="">SEEQ</p>
          <p className="">Platforms</p>
          <p className="">Initiatives</p>
          <p className="">More</p>
        </div>
        <div className=" flex flex-row">
          <button className="">SINC With Us</button>
          <button className="">Apply to SIP 1.0</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
