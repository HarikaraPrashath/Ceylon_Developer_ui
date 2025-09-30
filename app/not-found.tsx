import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div
        className="relative  flex flex-col h-[50%] text-white "
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.98), rgba(0,0,0,0.2)),url('/Images/mask3.png'),url('/Images/Glow (1).png'),url('/Images/gauze-10 1.png')`,
          backgroundPosition: "bottom,bottom,center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover, 100%",
          height: "100px",
        }}
      >
        <Navbar />

        <Image
          src="/Images/404.png"
          alt="Case Studies image"
          width={1000}
          height={1000}
          className="w-70 mt-20 mx-auto "
          priority
        />
      </div>
      <div className="px-5 mt-40">
        <div>
          <p className="text-sm text-center w-70 mx-auto  sm:pt-10 md:pt-20 md:w-80 lg:w-120 lg:text-lg ">
            <span className="font-semibold">Oops! Page Not Found</span>
            We&apos;re sorry, the page you requested cloud not be found please
            go back to home page
          </p>
          <div className="bg-custom-cyan mx-auto cursor-pointer w-35 rounded-sm text-black flex items-center justify-center mt-4 py-1 lg:mt-10 xl:w-max xl:px-2 xl:py-2">
            <Link href="/">
              <button
                type="submit"
                className="xl:text-sm cursor-pointer text-center flex items-center"
              >
                Back to Home
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-gradient-to-b from-gray-800 to-gray-950 py-4   px-2  mt-15 rounded-2xl text-center sm:w-110 sm:mx-auto md:w-139 lg:w-150 ">
          <h1 className="text-2xl w-72 sm:mx-auto sm:text-2xl">
            Let&apos;s Turn Your
            <span className="[font-family:var(--font-kaushan)] pl-2">
              Dream
            </span>{" "}
            into
            <span className="[font-family:var(--font-kaushan)] pl-2">
              Reality
            </span>{" "}
          </h1>
          <p className="text-center mt-6 text-sm mx-5 sm:text-sm">
            Pushing the boundaries of what&apos;s possible in the digital real.
            Join us this journey into the future of technology
          </p>
          <div className="bg-custom-cyan w-30  flex flex-row mx-auto py-2 rounded-xl text-black gap-2  justify-center mt-8 mb-10 text-sm">
            {/* Visible only on mobile (<640px) */}
            <button type="button" className="block sm:hidden">
              Book a call
            </button>

            {/* Visible only on small screens and above (≥640px) */}
            <button type="button" className="hidden sm:block ">
              Get Start
            </button>

            <ArrowUpRight className="sm:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
