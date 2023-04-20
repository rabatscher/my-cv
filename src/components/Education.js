import React, { useRef } from "react";
import LiIcon from "./LiIcon";
import { motion, useScroll } from "framer-motion";
import { LinkArrow } from "./Icons";
import Link from "next/link";

const Detail = ({ title, location, period, detail, url, address }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className="first:mt-0 mt-6">
      <LiIcon referenz={ref} color="DADADA" />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        viewport={{ once: true }}
      >
        <h3 className="capitalize font-semibold text-xl text-black/75  font-sans">
          {title}
        </h3>

        <span className="font-light text-sm leading-3 font-body">
          {period} <br />
          <Link
            href={url}
            target="_blank"
            className="hover:text-[#DDC11D] font-medium"
          >
            <span className="flex relative">@ {location} </span>
          </Link>
          <span>{address}</span>
        </span>
        <p className="font-medium w-full whitespace-pre-line font-body">
          {detail}
        </p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "center start"],
  });
  return (
    <div className="mt-8 bg-[#DADADA]">
      <h2 className="text-2xl font-extrabold text-center pt-8 text-black/75  font-sans">
        Academic Education
      </h2>
      <div ref={ref} className="w-4/5  mx-auto relative mt-4 ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute -left-2 -top-[80px] w-[4px] h-[112%] bg-[#EBEBEB] origin-top border-0 border-red-500"
        ></motion.div>
        <ul className="w-full flex flex-col items-start justify-between ml-4 pb-8">
          <Detail
            title="PhD"
            location="University of Basel"
            address="Basel, Switzerland"
            url="https://www.unibas.ch/en.html"
            period="Oct 2017 - Sept 2022"
            detail="Immunological consequences of C1q and anti-C1q immune complexes in secondary inflammation."
          />
          <Detail
            title="Swiss Federal Exam | Pharmacist"
            location="ETH Zurich"
            address="Zurich, Switzerland"
            url="https://www.ethz.ch"
            period="Sept 2016"
            detail="Investigating the mechanisms involved in the autoimmune disease systemic lupus erythematodes and the effect of anti-C1q autoantibodies on immune cells."
          />

          <Detail
            title="MSc in Pharmaceutical Sciences"
            period="Sept 2014 - Aug 2016"
            location="ETH Zurich"
            address="Zurich, Switzerland"
            url="https://www.ethz.ch"
            detail="Investigation of secondary structure content of designer peptides."
          />

          <Detail
            title="BSc in Pharmaceutical Sciences"
            location="ETH Zurich"
            address="Zurich, Switzerland"
            url="https://www.ethz.ch"
            period="Sept 2010 - Aug 2014"
            detail=""
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
