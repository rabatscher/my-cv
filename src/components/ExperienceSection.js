import React, { useRef } from "react";
import LiIcon from "./LiIcon";
import { motion, useScroll } from "framer-motion";
import { LinkArrow } from "./Icons";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Detail = ({ title, location, period, detail, address, url }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className="first:mt-0 mt-6">
      <LiIcon referenz={ref} color="EBEBEB" />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <h3 className="capitalize font-semibold text-xl text-black/75  font-sans">
          {title}
        </h3>

        <span className="font-light text-sm leading-3 font-body">
          {period} <br />
          <Link
            href={url}
            target="_blank"
            className="hover:text-[#2f3c65] font-medium"
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

const Experience = () => {
  const { t } = useTranslation();

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "start start"],
    offset: ["center end", "center start"],
  });
  return (
    <motion.div
      className="mt-8"
      animate={{ opacity: [0, 1] }}
      transition={{ delay: 1.6, duration: 0.4 }}
    >
      <h2 className="text-3xl font-extrabold text-center text-black/75  font-sans">
        {t("experienceTitle")}
      </h2>
      <div ref={ref} className="w-4/5  mx-auto relative mt-4 ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute -left-2 top-0 w-[4px] h-[105%] bg-[#DADADA] origin-top"
        ></motion.div>
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Detail
            title={t("experienceSub1")}
            period={t("experienceDate1")}
            location={t("experienceLocation1")}
            url=""
            detail={t("experienceDetail1")}
          />
          <Detail
            title={t("experienceSub2")}
            period={t("experienceDate2")}
            location={t("experienceLocation2")}
            address={t("experienceAddress2")}
            url="https://biomedizin.unibas.ch/en/research/research-groups/trendelenburg-lab/"
            detail={t("experienceDetail2")}
          />

          <Detail
            title={t("experienceSub3")}
            period={t("experienceDate3")}
            location={t("experienceLocation3")}
            address={t("experienceAddress3")}
            url="https://www.apotheke-im-spital-aarau.ch/"
            detail={t("experienceDetail3")}
          />

          <Detail
            title={t("experienceSub4")}
            period={t("experienceDate4")}
            location={t("experienceLocation4")}
            address={t("experienceAddress4")}
            url="https://www.amavita.ch/de/amavita-bahnhof-apotheke"
            detail={t("experienceDetail4")}
          />

          <Detail
            title={t("experienceSub5")}
            period={t("experienceDate5")}
            location={t("experienceLocation5")}
            address={t("experienceAddress5")}
            url="https://www.amavita.ch/de/amavita-bahnhof-apotheke"
            detail=""
          />
        </ul>
      </div>
    </motion.div>
  );
};

export default Experience;
