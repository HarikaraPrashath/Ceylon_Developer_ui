"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Check } from "lucide-react";
import Image from "next/image";
import BrandIdentity from "../components/About/BrandIdentity";
import Card from "../components/About/Card";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";

const Page = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("mission");

  // wait until client to know actual theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Before mount we don't know light/dark for sure, so don't render hero yet.
    // You could return a skeleton if you want, but null = no double-banner flash.
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  const content = {
    mission: {
      title: "Empowering Business to Build Lasting Relationships",
      text: "Our mission is to provide solutions that connect businesses with their customers effectively, fostering trust and growth.",
    },
    vision: {
      title: "Shaping the Future of Business Innovation",
      text: "Our vision is to create a world where businesses thrive by leveraging cutting-edge technology and meaningful connections.",
    },
    goal: {
      title: "Driving Success Through Innovation",
      text: "Our goal is to deliver impactful solutions that empower companies to achieve sustainable growth and long-term success.",
    },
  };
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen border-4 border-white dark:border-hidden">
      {isDark ? (
        <div
          className="head-banner-layout h-[200px] bg-cover bg-bottom"
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
          <h1 className="title text-white">About</h1>
        </div>
      ) : (
        <div
          className="head-banner-layout h-[200px] bg-cover bg-center bg-white"
          style={{
            backgroundImage: `url('/Images/Glow (1).png')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Navbar />
          <h1 className="title text-black">About</h1>
        </div>
      )}

      <div className="sub-title-div">
        <p className="paragraphy-push">
          Pushing the boundaries of hat&apos;s possible in the digital
          realm.Join us on this journey into the future of technology
        </p>
        {/* main contain */}
        <div className="mt-10 mx-4 sm:text-[1rem] md:text-[1.1rem] md:mx-[4rem] 2xl:mx-[6rem] max-w-[1440px] sm:mx-15 lg:mx-50">
          <div className="mt-7 flex flex-col lg:flex-row-reverse lg:justify-center md:gap-5">
            {/* flex content place */}
            <div className="lg:w-90">
              <h1 className="text-4xl text-center mt-10">
                Our{" "}
                <span className="[font-family:var(--font-kaushan)] pr-2">
                  Story
                </span>{" "}
              </h1>

              <p className="mt-4 lg:mt-9">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
                corrupti unde excepturi cumque ipsam sapiente accusamus officia
                quae, necessitatibus fugiat ut eaque deserunt labore illum maxime
                nesciunt commodi consequuntur molestias!
              </p>

              <div>
                <div className="flex gap-4 mt-4">
                  <div className="text-black rounded-full bg-custom-cyan w-6 h-6 ">
                    <Check className="p-1" />
                  </div>{" "}
                  <p className="">Advanced Ai Foundation</p>
                </div>
                <div className="flex gap-4 mt-4">
                  <div className="text-black rounded-full bg-custom-cyan w-6 h-6">
                    <Check className="p-1" />
                  </div>{" "}
                  <p className="">Purpose-Driven</p>
                </div>
                <div className="flex gap-4 mt-4">
                  <div className="text-black rounded-full bg-custom-cyan w-6 h-6">
                    <Check className="p-1" />
                  </div>{" "}
                  <p className="">Continuous Evolution</p>
                </div>
              </div>
            </div>
            {/* image placement */}
            <div className="mx-auto mt-10">
              {/* Light mode image */}
              <Image
                src="/Images/Container-light.png"
                alt="Light mode container"
                width={800}
                height={800}
                priority
                className="block dark:hidden border w-[350px] h-[252px] sm:w-[500px] sm:h-[400px] md:w-[550px] md:h-[370px]"
              />

              {/* Dark mode image */}
              <Image
                src="/Images/Container.png"
                alt="Dark mode container"
                width={800}
                height={800}
                priority
                className="hidden dark:block border w-[350px] h-[252px] sm:w-[500px] sm:h-[400px] md:w-[550px] md:h-[370px]"
              />
            </div>

          </div>

          <h1 className="text-4xl text-center mt-10 sm:text-5xl md:text-4xl lg:text-5xl xl:text-4xl">
            Why Choose{" "}
            <span className="[font-family:var(--font-kaushan)] pr-2">
              Ceylon Developers?
            </span>{" "}
          </h1>

          <div className="mx-auto flex flex-col items-center">
            {/* lg screen size style */}
            <div className="lg:flex lg:flex-row lg:justify-center lg:gap-5">
              {/* container 1 */}
              <div className=" ">
                {/*outer-line*/}
                <div className="rounded-3xl w-84 p-[1px] sm:w-110 md:120 bg-gradient-to-t from-cyan-600 to-cyan-900  mt-10">
                  <div className="rounded-[calc(1.5rem-1px)] p-2 bg-white dark:bg-black">
                    {/*inner-line*/}
                    <div className="rounded-3xl p-[1px] bg-gradient-to-t from-cyan-600 to-cyan-900 ">
                      <div className="rounded-[calc(1.5rem-1px)]  bg-white dark:bg-black py-4 px-3">
                        <div className="">
                          <Image
                            src="/Images/Group 37.png"
                            alt="icons"
                            width={200}
                            height={200}
                            priority
                            className="mx-auto   border-1 w-7"
                          />
                          <h1 className="text-xl text-center mt-5">
                            <span className="[font-family:var(--font-kaushan)] pr-2">
                              Effortless
                            </span>{" "}
                            Task Management{" "}
                          </h1>
                          <p className="mx-auto text-center mt-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ratione molestias minus, explicabo nulla error
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* container 2 */}
              <div className=" ">
                {/*outer-line*/}
                <div className="rounded-3xl w-84 sm:w-110 md:120 p-[1px] bg-gradient-to-t from-cyan-600 to-cyan-900  mt-10">
                  <div className="rounded-[calc(1.5rem-1px)] p-2 bg-white dark:bg-black">
                    {/*inner-line*/}
                    <div className="rounded-3xl p-[1px] bg-gradient-to-t from-cyan-600 to-cyan-900 ">
                      <div className="rounded-[calc(1.5rem-1px)]  bg-white dark:bg-black py-4 px-3">
                        <div className="">
                          <Image
                            src="/Images/messege.png"
                            alt="icons"
                            width={200}
                            height={200}
                            priority
                            className="mx-auto   border-1 w-7"
                          />
                          <h1 className="text-xl text-center mt-5">
                            <span className="[font-family:var(--font-kaushan)] pr-2">
                              Seamless
                            </span>{" "}
                            Team Collaboration{" "}
                          </h1>
                          <p className="mx-auto text-center mt-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ratione molestias minus, explicabo nulla error
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* container 3 */}
            <div className="lg:flex lg:flex-row lg:justify-center lg:gap-8">
              <div className=" ">
                {/*outer-line*/}
                <div className="rounded-3xl w-84 sm:w-110 md:120 p-[1px] bg-gradient-to-t from-cyan-600 to-cyan-900  mt-10">
                  <div className="rounded-[calc(1.5rem-1px)] p-2 bg-white dark:bg-black">
                    {/*inner-line*/}
                    <div className="rounded-3xl p-[1px] bg-gradient-to-t from-cyan-600 to-cyan-900 ">
                      <div className="rounded-[calc(1.5rem-1px)]  bg-white dark:bg-black py-4 px-3">
                        <div className="">
                          <Image
                            src="/Images/Group 5.png"
                            alt="icons"
                            width={200}
                            height={200}
                            priority
                            className="mx-auto   border-1 w-7"
                          />
                          <h1 className="text-xl text-center mt-5">
                            <span className="[font-family:var(--font-kaushan)] pr-2">
                              Comprehensive
                            </span>{" "}
                            Project Insight{" "}
                          </h1>
                          <p className="mx-auto text-center mt-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ratione molestias minus, explicabo nulla error
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* container 4 */}
              <div className=" ">
                {/*outer-line*/}
                <div className="rounded-3xl w-84 sm:w-110 p-[1px] md:120 bg-gradient-to-t from-cyan-600 to-cyan-900  mt-10">
                  <div className="rounded-[calc(1.5rem-1px)] p-2 bg-white dark:bg-black">
                    {/*inner-line*/}
                    <div className="rounded-3xl p-[1px] bg-gradient-to-t from-cyan-600 to-cyan-900 ">
                      <div className="rounded-[calc(1.5rem-1px)]  bg-white dark:bg-black py-4 px-3">
                        <div className="">
                          <Image
                            src="/Images/Group 32.png"
                            alt="icons"
                            width={200}
                            height={200}
                            priority
                            className="mx-auto   border-1 w-7"
                          />
                          <h1 className="text-xl text-center mt-5">
                            <span className="[font-family:var(--font-kaushan)] pr-2">
                              Smart
                            </span>{" "}
                            Deadline Tracking{" "}
                          </h1>
                          <p className="mx-auto text-center mt-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ratione molestias minus, explicabo nulla error
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission , Goal , Vision represent */}
          <div className="lg:flex lg:flex-row lg:justify-center lg:mt-10">
            <div>
              {/* Tabs */}
              <div className="mt-10 sm:gap-8 flex flex-row gap-4">
                <button
                  type="button"
                  onClick={() => setActiveTab("mission")}
                  className={`w-35 rounded-md py-1 px-1 text-center ${activeTab === "mission"
                    ? "bg-custom-cyan text-black"
                    : "bg-gray-600 text-white"
                    }`}
                >
                  Our Mission
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("vision")}
                  className={`w-25 rounded-md py-1 px-1 text-center ${activeTab === "vision"
                    ? "bg-custom-cyan text-black"
                    : "bg-gray-600 text-white"
                    }`}
                >
                  Our Vision
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("goal")}
                  className={`w-25 rounded-md py-1 px-1 text-center ${activeTab === "goal"
                    ? "bg-custom-cyan text-black"
                    : "bg-gray-600 text-white"
                    }`}
                >
                  Our Goal
                </button>
              </div>

              {/* Dynamic Content */}
              <h1 className="text-xl w-60 mt-5 sm:w-90 lg:w-80 ">
                {content[activeTab].title}
              </h1>
              <p className="w-90 text-base mt-5 sm:w-140 lg:w-120">
                {content[activeTab].text}
              </p>
            </div>
            {/* Image Placement */}
            <div className="">
              <Image
                src="/Images/Card.png"
                alt="Card"
                width={200}
                height={200}
                priority
                className="mx-auto mt-5 w-80 sm:mt-8 sm:w-110"
              />
            </div>
          </div>

          {/* The identity of our brand */}
          <BrandIdentity />

          <Card />
          <div className="bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-950 py-6 px-4 mx-3 mt-10 rounded-2xl sm:w-[520px] sm:mx-auto lg:w-[640px] xl:w-[760px] transition-colors duration-300">
            <h1 className="text-center text-2xl lg:text-3xl text-gray-800 dark:text-white">
              Ready to
              <span className="[font-family:var(--font-kaushan)] pl-2">
                Manage
              </span>{" "}
              your team like a pro?
            </h1>

            <p className="text-center mt-6 text-gray-700 dark:text-gray-300 w-[240px] sm:w-[360px] mx-auto text-sm">
              Pushing the boundaries of what&apos;s possible in the digital real.
              Join us this journey into the future of technology
            </p>

            <div className="bg-custom-cyan text-black dark:text-gray-900 w-[120px] text-center mx-auto mt-6 rounded-lg py-2 font-semibold hover:opacity-90 transition flex items-center justify-center gap-2">
              {/* Visible only on mobile (<640px) */}
              <button type="button" className="block sm:hidden">
                Book a call
              </button>

              {/* Visible only on small screens and above (≥640px) */}
              <button type="button" className="hidden sm:block">
                Get Start
              </button>

              <ArrowUpRight className="sm:hidden" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Page;
