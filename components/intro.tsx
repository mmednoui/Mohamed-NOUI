"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col sm:flex-row sm:my-20 sm:px-40 sm:mb-0 scroll-mt-[100rem] "
    >
      <motion.h1
        className="mb-10 mt-4  sm:w-2/3 text-center text-4xl font-extrabold !leading-[1.5] sm:text-5xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello, I am <span className="text-emerald-700">Mohamed</span> <br /> I
        build things for the web.
        <p className="italic text-xl font-medium mt-4  ">
          Front-end developer to establish and manage a solid code foundation
          for reusability. driven to use abilities on a larger development team
          and has a strong passion for learning and development. eager to take
          on more challenging issues and keep looking for methods to improve
          user productivity.
        </p>
      </motion.h1>

      <motion.div
        className="flex flex-col  sm:w-1/2  items-center justify-center gap-10 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-emerald-600 text-xl text-white px-14 py-5 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-emerald-500 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact Me{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-12 py-5 flex text-xl items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="./CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
      </motion.div>
    </section>
  );
}
