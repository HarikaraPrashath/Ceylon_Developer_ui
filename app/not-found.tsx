"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

const Page = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // prevent hydration mismatch

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <div className="max-w-[1440px] mx-auto bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      {/* HERO SECTION */}
      {isDark ? (
        <div
          className="relative flex flex-col h-[50%] text-white"
          style={{
            backgroundImage: `
              linear-gradient(to top, rgba(0, 0, 0, 0.98), rgba(0,0,0,0.2)),
              url('/Images/mask3.png'),
              url('/Images/Glow (1).png'),
              url('/Images/gauze-10 1.png')
            `,
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
            className="w-70 mt-20 mx-auto"
            priority
          />
        </div>
      ) : (
        <div
          className="relative flex flex-col h-[50%] text-black bg-white"
          style={{
            backgroundImage: `url('/Images/Glow (1).png')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100px",
          }}
        >
          <Navbar />
          <Image
            src="/Images/404.png"
            alt="Case Studies image"
            width={1000}
            height={1000}
            className="w-70 mt-20 mx-auto"
            priority
          />
        </div>
      )}

      {/* MAIN CONTENT */}
      <div className="px-5 mt-40">
        <div>
          <p className="text-sm text-center w-70 mx-auto sm:pt-10 md:pt-20 md:w-80 lg:w-120 lg:text-lg">
            <span className="font-semibold">Oops! Page Not Found. </span>
            We&apos;re sorry, the page you requested could not be found.
            Please go back to the home page.
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

        {/* CTA Section */}
        <div className="bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-950 py-4 px-2 mt-15 rounded-2xl text-center sm:w-110 sm:mx-auto md:w-139 lg:w-150 transition-colors duration-300">
          <h1 className="text-2xl w-72 sm:mx-auto sm:text-2xl">
            Let&apos;s Turn Your
            <span className="[font-family:var(--font-kaushan)] pl-2 text-custom-cyan">
              Dream
            </span>{" "}
            into
            <span className="[font-family:var(--font-kaushan)] pl-2 text-custom-cyan">
              Reality
            </span>
          </h1>

          <p className="text-center mt-6 text-sm mx-5 sm:text-sm text-gray-700 dark:text-gray-300">
            Pushing the boundaries of what&apos;s possible in the digital realm.
            Join us on this journey into the future of technology.
          </p>

          <div className="bg-custom-cyan w-30 flex flex-row mx-auto py-2 rounded-xl text-black gap-2 justify-center mt-8 mb-10 text-sm">
            {/* Visible only on mobile */}
            <button type="button" className="block sm:hidden">
              Book a call
            </button>

            {/* Visible only on small screens and above */}
            <button type="button" className="hidden sm:block">
              Get Start
            </button>

            <ArrowUpRight className="sm:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
