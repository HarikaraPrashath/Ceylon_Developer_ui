"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
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

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen border-4 border-white dark:border-hidden">
      {/* HERO SECTION */}
      {isDark ? (
        <div
          className="head-banner-layout"
          style={{
            backgroundImage: `
              linear-gradient(to top, rgba(0,0,0,0.98), rgba(0,0,0,0.2)),
              url('/Images/mask3.png'),
              url('/Images/Glow (1).png'),
              url('/Images/gauze-10 1.png')
            `,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom,bottom,center",
            backgroundSize: "cover,100%",
          }}
        >
          <Navbar />
          <h1 className="title text-white">Case Studies</h1>
        </div>
      ) : (
        <div
          className="head-banner-layout bg-white"
          style={{
            backgroundImage: `url('/Images/Glow (1).png')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Navbar />
          <h1 className="title text-black">Case Studies</h1>
        </div>
      )}

      {/* BODY CONTENT */}
      <div className="sub-title-div">
        <p className="paragraphy-push text-gray-700 dark:text-gray-300">
          Pushing the boundaries of hat&apos;s possible in the digital realm.
          Join us on this journey into the future of technology
        </p>

        {/* mainFrame mobile */}
        <div className="mx-3 sm:hidden">
          {/* MOBILE CARDS */}
          <CaseCard />
          <CaseCard />
          <CaseCard />

          {/* final section */}
          <div className="bg-gradient-to-b from-gray-800 to-gray-950 py-2 pt-5 px-4 mx-3 mt-15 rounded-2xl">
            <h1 className="text-center text-2xl">
              We&apos;re eager to
              <span className="[font-family:var(--font-kaushan)] pr-2">
                Discuss
              </span>{" "}
              how we can elevate
              <span className="[font-family:var(--font-kaushan)] pr-2">
                Your Business
              </span>{" "}
            </h1>

            <p className="text-center mt-6 w-59 text-xs">
              Pushing the boundaries of what&apos;s possible in the digital
              real. Join us this journey into the future of technology
            </p>

            <div className="bg-custom-cyan text-black w-30 text-center mx-auto m-5 rounded-lg py-1 font-semibold">
              <button type="button">Contact us</button>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP VERSION */}
      <div className="mx-3 md:mx-10 lg:mx-10 xl:mx-40 hidden sm:block">
        <CaseCardDesktop />
        <CaseCardDesktop />
        <CaseCardDesktop />
      </div>

      {/* final section */}
      <div className="bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-950 py-6 px-4 mx-3 mt-10 rounded-2xl sm:w-[520px] sm:mx-auto lg:w-[640px] xl:w-[760px] transition-colors duration-300">
        <h1 className="text-center text-2xl lg:text-3xl text-gray-800 dark:text-white">
          We&apos;re eager to{" "}
          <span className="[font-family:var(--font-kaushan)] pr-2">Discuss</span>{" "}
          how we can elevate{" "}
          <span className="[font-family:var(--font-kaushan)] pr-2">
            Your Business
          </span>
        </h1>

        <p className="text-center mt-6 text-gray-700 dark:text-gray-300 w-[240px] sm:w-[360px] mx-auto text-sm">
          Pushing the boundaries of what&apos;s possible in the digital realm.
          Join us on this journey into the future of technology.
        </p>

        <div className="bg-custom-cyan text-black dark:text-gray-900 w-[120px] text-center mx-auto mt-6 rounded-lg py-2 font-semibold hover:opacity-90 transition">
          <button type="button" className="sm:text-sm">
            Contact us
          </button>
        </div>
      </div>

    </div>
  );
};

/* MOBILE CARD COMPONENT */
const CaseCard = () => (
  <div className="border w-full h-auto px-2 py-3 rounded-xl mt-7 text-gray-800 dark:text-gray-200">
    <Image
      src="/Images/case.png"
      alt="Case Studies image"
      width={1000}
      height={600}
      className="w-[2000px] mx-auto mb-10"
      priority
    />
    <div className="flex flex-row justify-around">
      <Tag>Framer Development</Tag>
      <Tag>Framer Development</Tag>
    </div>
    <div>
      <h1 className="text-2xl pt-1 pb-1 font-semibold ml-1">SaaS Website</h1>
      <p className="ml-1 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        possimus temporibus sapiente non, numquam modi aut quo consectetur saepe
        qui voluptatem reprehenderit sed, obcaecati blanditiis, pariatur eveniet
        rem
      </p>

      <div className="bg-custom-cyan w-35 rounded-sm text-black flex mt-4 py-1">
        <Link href="/projectDetails">
          <button type="submit" className="ml-3">
            View Details
          </button>
        </Link>
        <ArrowUpRight className="w-8 pl-2" />
      </div>
    </div>
  </div>
);

/* DESKTOP CARD COMPONENT */
const CaseCardDesktop = () => (
  <div className="border w-full max-w-[1440px] h-auto px-4 py-3 rounded-xl mt-7 lg:flex lg:flex-row xl:px-10 mx-auto text-gray-800 dark:text-gray-200">
    <div>
      <div className="flex flex-row justify-start gap-7 sm:ml-2 sm:mt-5 lg:flex-col xl:flex-row">
        <Tag>Framer Development</Tag>
        <Tag>Figma Design</Tag>
      </div>
      <div>
        <h1 className="text-2xl pt-1 pb-1 font-semibold ml-1 sm:text-3xl sm:my-3 xl:text-4xl xl:mb-6 xl:mt-7">
          SaaS Website
        </h1>
        <p className="ml-1 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          possimus temporibus sapiente non, numquam modi aut quo consectetur
          saepe qui voluptatem reprehenderit sed, obcaecati blanditiis,
          pariatur eveniet rem{" "}
          <span className="hidden lg:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non
            labore esse sint, suscipit alias perferendis architecto accusantium
            cupiditate eveniet.
          </span>
        </p>

        <div className="bg-custom-cyan cursor-pointer w-35 rounded-sm text-black flex mt-4 py-1 sm:ml-1 lg:mt-10 xl:w-max xl:px-2 xl:py-2">
          <Link href="/projectDetails">
            <button type="submit" className="ml-3 xl:text-sm cursor-pointer">
              View Details
            </button>
          </Link>
          <ArrowUpRight className="w-8 pl-2" />
        </div>
      </div>
    </div>
    <div>
      <Image
        src="/Images/case.png"
        alt="Case Studies image"
        width={1000}
        height={1000}
        className="w-[2000px] mx-auto mb-10 lg:w-[1000px] lg:mt-5"
        priority
      />
    </div>
  </div>
);

/* TAG COMPONENT */
const Tag = ({ children }: { children: React.ReactNode }) => (
  <div className="text-xs border border-green-900 py-1 px-2 rounded-3xl sm:text-sm lg:w-max lg:px-3 lg:py-2 text-gray-800 dark:text-gray-200">
    <h1>{children}</h1>
  </div>
);

export default Page;
