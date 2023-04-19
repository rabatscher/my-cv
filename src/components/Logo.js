import React from "react";
import { motion } from "framer-motion";
const Logo = () => {
  return (
    <>
      <div className="flex flex-nowrap justify-center my-4 ">
        <div className="w-20 h-20 bg-[#DDC11D] text-right pr-1 text-3xl text-[#EBEBEB] font-semibold">
          <div className="mt-2 leading-8">
            P<br />R
          </div>
        </div>
        <div className="bg-[#EBEBEB] text-left p-0 text-3xl text-[#ABABAB] font-semibold">
          <div className="mt-2 leading-8 ">
            ascal <br /> abatscher
          </div>
        </div>
      </div>
      <motion.div
        className="text-[#ABABAB] text-center "
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        PhD | Immunologist | Pharmacist
      </motion.div>
    </>
  );
};

export default Logo;
