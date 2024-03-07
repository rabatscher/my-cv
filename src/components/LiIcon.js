import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const LiIcon = ({ referenz, color }) => {
  const { scrollYProgress } = useScroll({
    target: referenz,
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
          className="stroke-[#2f3c65] stroke-[7px] fill-none"
          style={{ pathLength: scrollYProgress }}
        />
        <circle cx="75" cy="50" r="9" className={`stroke-0 fill-[#EBEBEB]`} />
      </svg>
    </figure>
  );
};

export default LiIcon;
