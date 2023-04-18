import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import profilePic from "../../public/images/profile/profilePic.jpg";

export default function Home() {
  return (
    <Layout>
      <div className="inlin-block z-0 bg-light p-20">
        <h1 className="text-8xl font-thin text-dark text-center">
          Hi, I am Pascal Rabatscher
        </h1>
        <h2 className="text-center text-dark text-3xl my-12">
          Immunologist and Pharmacist
        </h2>

        <div>
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
          <Image
            src={profilePic}
            alt="Thats me"
            className="w-[40%] rounded-xl"
          />
        </div>
      </div>

      <h2 className="text-center text-dark text-6xl my-12">About me</h2>
      <p className="text-dark text-3xl leading-relaxed p-8 text-center pt-0">
        Curious and ambitious individual with a sound scientific background in
        pharmaceutical sciences and immunology. Fascinated by the vast variety
        of challenges occurring during development and translation of new
        medicines and technologies.{" "}
      </p>
    </Layout>
  );
}

// <Image
//   src={profilePic}
//   alt="bla"
//   className="w-full h-auto rounded-2xl"
// />
// </div>
