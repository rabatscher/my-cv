import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  return (
    <figure className="absolute -left-[31px] stroke-black">
      <svg className="-rotate-90" width="50" height="50" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-black stroke-0 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="13"
          className="stroke-[#DDC11D] stroke-[7px] fill-none"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx="75"
          cy="50"
          r="9"
          className="fill-[#ebebeb] stroke-0 fill-none"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;