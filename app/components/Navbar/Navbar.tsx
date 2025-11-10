"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Sun } from "lucide-react"; // hamburger & close icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="
    flex justify-between items-center p-3 
    sm:w-[80%] sm:h-12 sm:bg-black/20 
    sm:px-4 sm:mx-auto sm:mt-10 sm:rounded-3xl sm:border sm:border-gray-100
    xs:border-1 border-b-1
    xl:w-[70%]
    max-w-[1440px]
  "
    >
      {/* Logo */}
      <Image
        src="/Images/logo.png"
        alt="Logo"
        width={120}
        height={120}
        priority
        className="md:w-30"
      />

      {/* Navigation Links (hidden on md & below) */}
      <div className="hidden lg:flex ">
        <ul className="flex text-white text-lg space-x-6 ml-5">
          <li>
            <Link className="cursor-pointer hover:text-gray-400" href="/">
              Company
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer hover:text-gray-400"
              href="/CaseStudies"
            >
              Case Studies
            </Link>
          </li>
          <li>
            <Link className="cursor-pointer hover:text-gray-400" href="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="cursor-pointer hover:text-gray-400" href="/policy">
              Policy
            </Link>
          </li>
          <li>
            <Link className="cursor-pointer hover:text-gray-400" href="/career">
              Career
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
            src="/Images/BookACall.png"
            alt="Book a Call"
            width={200}
            height={180}
            className="sm:w-40 sm:mr-1"
            priority
          />
        </button>
      </div>
      {/* Mobile Menu Button (visible on xs) */}
      <div className="sm:hidden flex items-center space-x-3  ">
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
        <div className="absolute top-0 left-0 w-full bg-black/95 backdrop-blur-md text-white flex flex-col items-center space-y-6 py-10 z-50 shadow-lg rounded-b-2xl border-b border-gray-500 animate-slideDown">
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
            Company
          </Link>
          <Link
            href="/CaseStudies"
            className="hover:text-gray-400 text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Case Studies
          </Link>
          <Link
            href="/"
            className="hover:text-gray-400 text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/"
            className="hover:text-gray-400 text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Service
          </Link>
          <Link
            href="/career"
            className="hover:text-gray-400 text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Career
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

export default Navbar;
