"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import heroImg from "../assets/images/salman_sahed_hero_section.png";
import Image from "next/image";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const HeroBanner = () => {
  return (
    <div
      className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center pt-28 sm:pt-30 md:pt-40 pb-20"
      id="home"
    >
      <div className="gap-4 flex flex-col items-center md:items-start mt-6 md:mt-0">
        <h2 className="text-2xl text-gray-100">Hey, I&apos;m</h2>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-100">
          Salman Sahed
        </h1>
        <h2 className="text-xl sm:text-2xl text-gray-100">
          <TypeAnimation
            sequence={[
              "I am a Web Developer",
              2000,
              "I am a Web Designer",
              2000,
              "I am a Problem Solver",
              2000,
            ]}
            wrapper="span"
            cursor={false}
            repeat={Infinity}
            style={{ fontSize: "1.2em", display: "inline-block" }}
          />
        </h2>
        <h2 className="text-xl text-gray-100">
          Crafting Scalable Web Experiences
        </h2>

        <p className="w-[60%] lg:w-[50%] text-gray-300 text-center md:text-left">
          🚀 Transforming complex ideas into high-performance digital solutions
          | Specialized in MERN Stack & Next.js 💻
        </p>
        <div className="flex items-center gap-6">
          <Link href={"/#contacts"}>
            <Button
              className={
                "bg-white/10 border border-white/20 px-6 py-5 shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-all"
              }
            >
              Say Hello
            </Button>
          </Link>
          <Link href="https://drive.google.com/file/d/1_0ud2mU9at8fZbRPFTy6yGOQbSiBj7t2/view" target="_blank" >
            <Button className="bg-white/10 border border-white/20 py-5 px-6 shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-all">
              Download Resume
            </Button>
          </Link>
        </div>
        <div className="flex space-x-3 mt-3">
          <Link
            className="bg-white/10 border border-white/20 flex justify-center items-center w-8 h-8 rounded-full text-xl hover:bg-red-400 transition-all"
            href={"https://github.com/salmansahed"}
          >
            <FaGithub />
          </Link>
          <Link
            className="bg-white/10 border border-white/20 flex justify-center items-center w-8 h-8 rounded-full text-xl hover:bg-blue-400 transition-all"
            href={"https://www.linkedin.com/in/salman-sahed/"}
          >
            <FaLinkedin />
          </Link>
          <Link
            className="bg-white/10 border border-white/20 flex justify-center items-center w-8 h-8 rounded-full text-xl hover:bg-blue-400 transition-all"
            href={"https://www.facebook.com/salmansahedbd"}
          >
            <FaFacebook />
          </Link>
        </div>
      </div>
      <div>
        <div className="bg-white/10 border-2 border-dashed border-white/20 rounded-full overflow-hidden w-75 h-75 lg:w-115 lg:h-115 relative">
          <Image
            src={heroImg}
            fill
            alt="Salman Sahed"
            className="rounded-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
