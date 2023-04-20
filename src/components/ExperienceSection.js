import React, { useRef } from "react";
import LiIcon from "./LiIcon";
import { motion, useScroll } from "framer-motion";

const Detail = ({ title, location, period, detail }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className="first:mt-0 mt-6">
      <LiIcon referenz={ref} />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <h3 className="capitalize font-semibold text-xl text-black/75">
          {title}
        </h3>

        <span className="font-light text-sm leading-3">
          {period} <br /> {location}
        </span>
        <p className="font-medium w-full whitespace-pre-line">{detail}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "center start"],
  });
  return (
    <motion.div
      className="mt-8"
      animate={{ opacity: [0, 1] }}
      transition={{ delay: 1.6, duration: 0.4 }}
    >
      <h2 className="text-3xl font-bold text-center">Experience</h2>
      <div ref={ref} className="w-4/5  mx-auto relative mt-4 ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute -left-2 top-0 w-[4px] h-[104%] bg-[#DADADA] origin-top"
        ></motion.div>
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Detail
            title="Volunteering and Cultural Trip"
            location="Lombok, Indonesia"
            period="Oct 2022 - Mar 2023"
            detail="English teacher for primary school children in rural area."
          />
          <Detail
            title="PhD Candidate"
            location="Full time | Clinical Immunology | Department of Biomedicine | Basel, Switzerland"
            period="Oct 2017 - Sept 2022"
            detail="Investigating the mechanisms involved in the autoimmune disease systemic lupus erythematodes and the effect of anti-C1q autoantibodies on immune cells."
          />

          <Detail
            title="Pharmacist"
            period="Nov 2018 - Sept 2022"
            location="Part time | Apotheke im Spital Aarau | Aarau, Switzerland"
            detail="// Responsible pharmacist during off-hours (night and Sundays)
            // Medicine supply for emergency patients
            // Validation of prescriptions 
            // Consulting patients (Rx and OTC)"
          />

          <Detail
            title="Pharmacist"
            location="Full time | Bahnhof Apotheke at Zurich Main Station | Zurich, Switzerland"
            period="Oct 2016 - Oct 2018"
            detail="// Responsible for off-label dosing in narcotics and paediatrics
            // Preparation of pharmaceutical assistant apprentices for their final exam
            // Production of custom medicines for patients with special needs (GMP laboratory)
            // Validation of prescriptions 
            // Consulting patients (Rx and OTC)"
          />

          <Detail
            title="Pharmacist Assistant"
            location="Full time | Bahnhof Apotheke at Zurich Main Station | Zurich, Switzerland"
            period="Nov 2015 - Sept 2016"
          />
        </ul>
      </div>
    </motion.div>
  );
};

export default Experience;
