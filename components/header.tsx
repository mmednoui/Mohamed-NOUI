"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative items-center hidden sm:flex">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-7 sm:h-[4rem] sm:w-[60rem] sm:rounded-lg"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex items-center justify-center fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[2.1rem] sm:h-[initial] sm:py-0 sm:w-[60rem] sm:gap-4">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[1.1rem] font-medium text-emerald-700 sm:w-[initial] sm:flex-nowrap sm:gap-4 ">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-emerald-500 transition",
                  {
                    "text-gray-950 ": activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 "
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>

        <a
          className=" text-black flex items-center gap-2 text-[1.5rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/mohamed-noui-5634371b5/"
          target="_blank"
        >
          <FaLinkedin />
        </a>

        <a
          className=" text-black flex items-center gap-2 text-[1.5rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/mmednoui"
          target="_blank"
        >
          <FaGithub />
        </a>
      </nav>
    </header>
  );
}
