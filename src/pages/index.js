import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Logo from "@/components/Logo";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import Education from "@/components/Education";
import Publications from "@/components/Publications";
import "@/components/i18n";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const lngs = [
  { code: "en", native: "English" },
  { code: "de", native: "German" },
];

export default function Home() {
  const { t, i18n } = useTranslation();

  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <main>
      <div className="w-full mx-auto md:w-3/5">
        <Logo />

        <motion.div
          className="my-5 text-center text-xs"
          animate={{
            opacity: [0, 1],
            y: [10, 0],
          }}
          transition={{
            duration: 0.4,
            delay: 1.8,
          }}
        >
          <button onClick={() => handleTrans("en")}>English</button> |{" "}
          <button onClick={() => handleTrans("de")}>Deutsch</button>
        </motion.div>

        <AboutSection />

        <ExperienceSection />
        <Education />
        <Publications />
        <div className="h-96"></div>
        <div className="h-96"></div>
      </div>
    </main>
  );
}

// <Image
//   src={profilePic}
//   alt="bla"
//   className="w-full h-auto rounded-2xl"
// />
// </div>
