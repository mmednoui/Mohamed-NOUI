"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="my-28  text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="flex flex-col items-center justify-center sm:flex-row gap-28 sm:px-20">
        <p className="mb-3 px-10 font-semibold">
          Hello! My name is Mohamed NOUI and I enjoy creating things that live
          on the internet. My interest in web development started back in 2018
          when I was studying for the computer science degree. Fast-forward to
          today, my main focus these days is building accessible, responsive
          products and digital experiences for a variety of clients.
          <br />
          <br />
          Here are a few technologies I’ve been working with recently: <br />
          <br />
          <span
            className="text-xl
          "
          >
            React | Tailwind | Javascript | Node.js
          </span>
        </p>

        <img className="rounded-3xl  sm:w-80 " src="./profile.jpg" alt="" />
      </div>
    </motion.section>
  );
}
