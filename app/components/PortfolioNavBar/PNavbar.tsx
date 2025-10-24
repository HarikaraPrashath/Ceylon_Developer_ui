"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Sun } from "lucide-react"; // hamburger & close icons
import { P } from "framer-motion/dist/types.d-Cjd591yU";

const PNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="
    flex justify-between items-center p-3 
    sm:w-[80%] sm:h-12 sm:bg-black/20 
    sm:px-4 sm:mx-auto sm:mt-10 sm:rounded-3xl sm:border sm:border-gray-700
    xs:border-1 border-b-1
    xl:w-[70%]
    max-w-[1440px]
  "
    >
      {/* Logo */}
      <h1 className="text-3xl">
        Portfolio
      </h1>

      {/* Navigation Links (hidden on md & below) */}
      <div className="hidden lg:flex ">
        <ul className="flex text-white text-lg space-x-6 ml-5">
          <li>
            <Link className="cursor-pointer hover:text-gray-400" href="/">
              About
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer hover:text-gray-400"
              href="/CaseStudies"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link className="cursor-pointer hover:text-gray-400" href="/contact">
              Skills
            </Link>
          </li>
          <li>
            <Link className="cursor-pointer hover:text-gray-400" href="/policy">
              Achievements
            </Link>
          </li>
          <li>
            <Link className="cursor-pointer hover:text-gray-400" href="/career">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Book a Call button (hidden on xs, visible on md+) */}
      <div className="hidden sm:block">
        <button
          type="button"
          className="cursor-pointer -mr-9 mb-2 "
          title="Book a Call"
          aria-label="Book a Call"
        >
          <Image
            src="/Images/portfolio.png"
            alt="Book a Call"
            width={200}
            height={180}
            className="sm:w-44 "
            priority
          />
        </button>
      </div>
      {/* Mobile Menu Button (visible on xs) */}
      <div className="sm:hidden flex items-center space-x-3 ">
        <Sun size={24} className="text-white" />
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          className="text-white"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu (slide from top) */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full bg-black/95 backdrop-blur-md text-white flex flex-col items-center space-y-6 py-10 z-50 shadow-lg rounded-b-2xl border-b border-gray-700 animate-slideDown">
          {/* Close Button inside popup (top-right) */}
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-white"
            aria-label="Close Menu"
          >
            <X size={30} />
          </button>

          <Link
            href="/"
            className="hover:text-gray-400 text-lg"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/CaseStudies"
            className="hover:text-gray-400 text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/"
            className="hover:text-gray-400 text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </Link>
          <Link
            href="/"
            className="hover:text-gray-400 text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Achievements
          </Link>
          <Link
            href="/career"
            className="hover:text-gray-400 text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          {/* Book a Call inside menu */}
          <button
            type="button"
            className="cursor-pointer mt-4"
            title="Book a Call"
            aria-label="Book a Call"
          >
            <Image
              src="/Images/BookACall.png"
              alt="Book a Call"
              width={180}
              height={150}
              priority
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default PNavbar;
