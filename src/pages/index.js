import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Logo from "@/components/Logo";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import Education from "@/components/Education";
import Publications from "@/components/Publications";

export default function Home() {
  return (
    <main>
      <div className="w-full mx-auto md:w-3/5">
        <Logo />
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
