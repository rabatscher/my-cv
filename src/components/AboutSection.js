import Image from "next/image";
import React from "react";
import profilePic from "../../public/images/profile/profilePic3bw.jpg";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <>
      <motion.div
        className=" mt-9  grid grid-cols-2 bg-[#DADADA] w-full h-auto"
        initial={{ backgroundColor: "#EBEBEB" }}
        animate={{ backgroundColor: "#DADADA" }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6 }}
          className=""
        >
          <Image
            src={profilePic}
            className="object-cover h-full border-[5px] border-[#EBEBEB] -mt-4 -ml-1"
          />
        </motion.div>
        <div className="w-full text-left p-3 ">
          <h2 className="text-3xl font-bold">About me</h2>
          <p className="text-sm text-left mt-2">
            Curious and ambitious individual with a sound scientific background
            in pharmaceutical sciences and immunology.
          </p>
          <p className="text-sm text-left">
            Fascinated by the vast variety of challenges occurring during
            development and translation of new medicines and technologies.{" "}
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default AboutSection;
