import { AnimatePresence, motion, useScroll } from "framer-motion";
import { React, useRef } from "react";
import { useTranslation } from "react-i18next";

const Logo = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-nowrap justify-center my-4 ">
        <motion.div
          className="w-20 h-20 bg-[#DDC11D] text-right pr-1 text-3xl text-[#EBEBEB] font-semibold"
          animate={{
            scale: [1, 1.4, 1.4, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "0%"],
          }}
          transition={{ duration: 1.4, ease: [0.6, 0.01, 0.05, 0.95] }}
        >
          <AnimatePresence>
            <motion.div
              className="mt-2 leading-8"
              animate={{
                opacity: [0, 1],
              }}
              transition={{
                duration: 0.4,
                delay: 1.6,
                type: "spring",
                ease: [0.6, 0.01, 0.05, 0.95],
              }}
            >
              P<br />R
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <motion.div
          className="bg-[#EBEBEB] text-left p-0 text-3xl text-[#ABABAB] font-semibold  font-sans"
          animate={{
            opacity: [0, 1],
            y: [10, 0],
          }}
          transition={{
            duration: 0.4,
            delay: 1.8,
          }}
        >
          <div className="mt-2 leading-8  font-sans ">
            ascal <br /> abatscher
          </div>
        </motion.div>
      </div>
      <motion.div
        className="text-[#ABABAB] text-center font-body"
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          type: "spring",
          delay: 1.6,
          ease: [0.6, 0.01, 0.05, 0.95],
        }}
      >
        {/* PhD | Immunologist | Pharmacist
        <br /> */}
        {t("subtitle")}
      </motion.div>
      {/* </div> */}
    </>
  );
};

export default Logo;
