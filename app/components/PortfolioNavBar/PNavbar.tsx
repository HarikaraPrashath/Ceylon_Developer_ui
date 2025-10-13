"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Sun } from "lucide-react"; // hamburger & close icons

const PNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-between px-2 text-2xl my-2 border-b-[0.1px] pb-2">
     <div>
        Portfolio
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
export default PNavbar;
