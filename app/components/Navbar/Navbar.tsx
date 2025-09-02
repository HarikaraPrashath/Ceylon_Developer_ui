import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-[80%] h-16 bg-black/20 flex  justify-between items-center px-4 mx-auto mt-10 rounded-4xl border-1 border-gray-700">
      {/* Logo */}
      <Image
        src="/Images/logo.png"
        alt="Logo"
        width={120}
        height={120}
        priority
      />

      {/* Navigation Links */}
      <div>
        <ul className="flex text-white  text-xl space-x-6 ml-5">
          <li>
            <Link className="cursor-pointer hover:text-gray-400" href="/">
              Company
            </Link>{" "}
          </li>

          <li>
            <Link className="cursor-pointer hover:text-gray-400" href="/">
              Case Studies
            </Link>{" "}
          </li>

          <li>
            <Link className="cursor-pointer hover:text-gray-400" href="/">
              Contact
            </Link>{" "}
          </li>

          <li>
            <Link className="cursor-pointer hover:text-gray-400" href="/">
              Service
            </Link>{" "}
          </li>

          <li>
            <Link className="cursor-pointer hover:text-gray-400" href="/">
              Career
            </Link>{" "}
          </li>
        </ul>
      </div>

      {/* Book a call */}
      <div>
        <button
          type="button"
          className="cursor-pointer -mr-8 mb-2 "
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
    </div>
  );
};

export default Navbar;
