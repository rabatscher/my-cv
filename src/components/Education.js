import React, { useRef } from "react";
import LiIcon from "./LiIcon";
import { motion, useScroll } from "framer-motion";
import { LinkArrow } from "./Icons";
import Link from "next/link";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "center start"],
  });
  return (
    <div className="mt-8 bg-[#DADADA]">
      <h2 className="text-3xl font-extrabold text-center pt-8 text-black/75  font-sans">
        {t("educationTitle")}
      </h2>
      <div ref={ref} className="w-4/5  mx-auto relative mt-4 ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute -left-2 -top-[83px] w-[4px] h-[112%] bg-[#EBEBEB] origin-top border-0 border-red-500"
        ></motion.div>
        <ul className="w-full flex flex-col items-start justify-between ml-4 pb-8">
          <Detail
            title={t("educationSub1")}
            period={t("educationDate1")}
            location={t("educationLocation1")}
            address={t("educationAddress1")}
            url="https://www.unibas.ch/en.html"
            detail={t("educationDetail1")}
          />
          <Detail
            title={t("educationSub2")}
            period={t("educationDate2")}
            location={t("educationLocation2")}
            address={t("educationAddress2")}
            url="https://www.ethz.ch"
            detail={t("educationDetail2")}
          />

          <Detail
            title={t("educationSub3")}
            period={t("educationDate3")}
            location={t("educationLocation3")}
            address={t("educationAddress3")}
            url="https://www.ethz.ch"
            detail={t("educationDetail3")}
          />

          <Detail
            title={t("educationSub4")}
            period={t("educationDate4")}
            location={t("educationLocation4")}
            address={t("educationAddress4")}
            url="https://www.ethz.ch"
            detail={t("educationDetail4")}
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
