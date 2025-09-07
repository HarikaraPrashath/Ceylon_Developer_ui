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
    md:w-[80%] md:h-16 md:bg-black/20 
    md:px-4 md:mx-auto md:mt-10 md:rounded-3xl md:border md:border-gray-700
    xs:border-1 border-b-1
  "
    >
      {/* Logo */}
      <Image
        src="/Images/logo.png"
        alt="Logo"
        width={120}
        height={120}
        priority
      />

      {/* Navigation Links (hidden on md & below) */}
      <div className="hidden lg:flex">
        <ul className="flex text-white text-xl space-x-6 ml-5">
          <li>
            <Link className="cursor-pointer hover:text-gray-400" href="/">
              Company
            </Link>
          </li>
          <li>
            <Link className="cursor-pointer hover:text-gray-400" href="/">
              Case Studies
            </Link>
          </li>
          <li>
            <Link className="cursor-pointer hover:text-gray-400" href="/">
              Contact
            </Link>
          </li>
          <li>
            <Link className="cursor-pointer hover:text-gray-400" href="/">
              Service
            </Link>
          </li>
          <li>
            <Link className="cursor-pointer hover:text-gray-400" href="/">
              Career
            </Link>
          </li>
        </ul>
      </div>

      {/* Book a Call button (hidden on xs, visible on md+) */}
      <div className="hidden md:block">
        <button
          type="button"
          className="cursor-pointer -mr-9 mb-2"
          title="Book a Call"
          aria-label="Book a Call"
        >
          <Image
            src="/Images/BookACall.png"
            alt="Book a Call"
            width={200}
            height={180}
            priority
          />
        </button>
      </div>

      {/* Mobile Menu Button (visible on xs) */}
      <div className="md:hidden flex items-center space-x-3 ">
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
      

      {/* Mobile Menu (drawer-style with bg) */}
      {menuOpen && (
        <div className="top-16 left-0 w-full bg-black/95 backdrop-blur-md text-white flex flex-col items-center space-y-6 py-8 z-50 shadow-lg rounded-b-2xl border-t border-gray-700">
          <Link
            href="/"
            className="hover:text-gray-400 text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Company
          </Link>
          <Link
            href="/"
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
            href="/"
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
