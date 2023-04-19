import Image from "next/image";
import React from "react";
import profilePic from "../../public/images/profile/profilePic2.jpg";

const Layout = ({ children, className }) => {
  return (
    <>
      <div className="grid grid-cols-12 w-[75%] h-full mx-auto  bg-light/25">
        <div className="col-span-2">
          <div className="w-auto justify-center text-center border-2 min-h-min">
            CV
          </div>
          <div className="relative top-20 bg-primary -rotate-90 min-h-min">
            <h2 className=" font-bold uppercase text-2xl flex items-center content-center">
              Education
            </h2>
          </div>
        </div>
        <div className="col-span-7 px-8">{children}</div>

        <div className="col-span-3">
          <Image src={profilePic} alt="AltText" />
          <div className="bg-black">
            <h2 className="text-white font-bold uppercase text-2xl p-4">
              Pascal <br /> Rabatscher
            </h2>
          </div>
          <div className="bg-yellow">Contact me</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
