import { Button } from "@heroui/react";
import Image from "next/image";
import { FaBriefcase } from "react-icons/fa";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import aboutImg from "../assets/images/salman_sahed_carton.png";
import Link from "next/link";

const About = () => {
  return (
    <div
      className="max-w-6xl mx-auto py-6 sm:py-10 md:py-24 px-3 scroll-mt-0"
      id="about"
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl font-semibold text-gray-100">About</h1>
        <p className="text-gray-300">My Introduction</p>
      </div>
      <div className="flex flex-col md:flex-row md:items-end">
        <div className="w-full flex justify-center">
          <Image
            src={aboutImg}
            width={500}
            height={500}
            alt="Salman Sahed"
            className="rounded-none md:rounded-full"
          />
        </div>
        <div className="w-full space-y-6">
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center md:justify-start">
            <div className="bg-white/10 border border-white/20 backdrop-blur-3xl p-4 w-full sm:w-38 rounded-2xl flex flex-col gap-1 items-center justify-center shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)]">
              <FaBriefcase className="text-2xl mt-1" />
              <h1 className="text-xl font-semibold">Experience</h1>
              <p className="text-sm">1+ Years Working</p>
            </div>
            <div className="bg-white/10 border border-white/20 backdrop-blur-3xl p-4 w-full sm:w-38 rounded-2xl flex flex-col gap-1 items-center justify-center shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)]">
              <IoCheckmarkDoneCircle className="text-2xl mt-1" />
              <h1 className="text-xl font-semibold">Completed</h1>
              <p className="text-sm">10+ Projects</p>
            </div>
            <div className="bg-white/10 border border-white/20 backdrop-blur-3xl p-4 w-full sm:w-38 rounded-2xl flex flex-col gap-1 items-center justify-center shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)]">
              <MdOutlineSupportAgent className="text-2xl mt-1" />
              <h1 className="text-xl font-semibold">Support</h1>
              <p className="text-sm">Online 24/7</p>
            </div>
          </div>
          <div className="space-y-3 text-center md:text-left">
            <p>
              I am a passionate Web Developer currently specializing in the MERN
              Stack. With a strong foundation in modern UI/UX principles, I
              focus on building scalable and performant web applications that
              provide seamless user experiences. My journey involves
              transitioning from WordPress to advanced JavaScript frameworks
              like React and Next.js, driven by a commitment to clean code and
              innovative design. Beyond the screen, I am an electronics
              enthusiast who loves experimenting with DIY hardware projects.
              Whether I’m building a custom solar setup or solving complex code
              logic, I thrive on the challenge of creating things from scratch.
              I believe in constant learning and enjoy sharing knowledge with
              the developer community.
            </p>
            <Link href="https://drive.google.com/file/d/1_0ud2mU9at8fZbRPFTy6yGOQbSiBj7t2/view" target="_blank" >
              <Button className="bg-white/10 border border-white/20 py-6 px-6 text-base rounded-lg shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)]">
                View Resume
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
