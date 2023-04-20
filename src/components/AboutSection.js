import Image from "next/image";
import React from "react";
import profilePic from "../../public/images/profile/profilePic3bw.jpg";
import { AnimatePresence, motion } from "framer-motion";

const AboutSection = () => {
  return (
    <>
      <motion.div
        className=" mt-9  grid grid-cols-2 bg-[#DADADA] w-full h-auto"
        initial={{ backgroundColor: "#EBEBEB" }}
        animate={{ backgroundColor: "#DADADA" }}
        transition={{ duration: 0.6, delay: 1.8, when: "beforeChildren" }}
      >
        <AnimatePresence>
          <motion.div
            // initial={{ x: -20, opacity: [0, 1] }}
            animate={{ x: [-20, 0], opacity: [0, 1] }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className=""
          >
            <Image
              src={profilePic}
              alt="profilepicture"
              className="object-cover h-full md:max-w-20 border-[5px] border-[#EBEBEB] -mt-4 -ml-1 md:max-h-96"
            />
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="w-full text-left p-3 "
          animate={{ x: [-20, 0], opacity: [0, 1] }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <h2 className="text-3xl font-bold">About me</h2>
          <p className="text-sm text-left mt-2 md:text-base">
            Curious and ambitious individual with a sound scientific background
            in pharmaceutical sciences and immunology.
          </p>
          <p className="text-sm text-left md:text-base">
            Fascinated by the vast variety of challenges occurring during
            development and translation of new medicines and technologies.{" "}
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default AboutSection;
