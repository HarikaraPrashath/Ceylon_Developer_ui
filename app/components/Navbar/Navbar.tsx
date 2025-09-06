"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Sun } from "lucide-react"; // hamburger & close icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-[80%] h-16 bg-black/20 flex justify-between items-center px-4 mx-auto mt-10 rounded-2xl border border-gray-700">
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
          className="cursor-pointer -mr-8 mb-2"
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
      <div className="md:hidden">
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          className="text-white flex items-center space-x-3"
        >
          <Sun size={24} />
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>


      {/* Mobile Menu (only when open & xs) */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black/90 text-white flex flex-col items-center space-y-4 py-6 z-50 md:hidden">
          <Link
            href="/"
            className="hover:text-gray-400"
            onClick={() => setMenuOpen(false)}
          >
            Company
          </Link>
          <Link
            href="/"
            className="hover:text-gray-400"
            onClick={() => setMenuOpen(false)}
          >
            Case Studies
          </Link>
          <Link
            href="/"
            className="hover:text-gray-400"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/"
            className="hover:text-gray-400"
            onClick={() => setMenuOpen(false)}
          >
            Service
          </Link>
          <Link
            href="/"
            className="hover:text-gray-400"
            onClick={() => setMenuOpen(false)}
          >
            Career
          </Link>

          {/* Book a Call inside mobile menu */}
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
