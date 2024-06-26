import logoImage from "../../public/SINC LOGO black outline 1.png";
import React from "react";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="">
      <div>
        <Image src={logoImage} alt="" width={113.6} height={45.56} />

        <div className="">
          <p className="">About</p>
          <p className="">Sip</p>
          <p className="">Studio</p>
          <p className="">SEEQ</p>
          <p className="">Platforms</p>
          <p className="">Initiatives</p>
          <p className="">More</p>
        </div>
        <div className="">
          <button className="">SINC With Us</button>
          <button className="">Apply to SIP 1.0</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
