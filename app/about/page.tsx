"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Check } from "lucide-react";
import Image from "next/image";
import BrandIdentity from "../components/About/BrandIdentity";
import Card from "../components/About/Card";
import { ArrowUpRight } from "lucide-react";

const Page = () => {
  const [activeTab, setActiveTab] = useState("mission");

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
    <div>
      <div
        className="relative  flex flex-col h-[30%] text-white "
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.98), rgba(0,0,0,0.2)),url('/Images/mask3.png'),url('/Images/Glow (1).png'),url('/Images/gauze-10 1.png')`,
          backgroundPosition: "bottom,bottom,center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover, 100%",
          height: "100px",
        }}
      >
        <Navbar />

        <h1 className="text-4xl mt-10text-center font-semibold  text-center pt-20 lg:text-5xl ">About</h1>
      </div>
      <div className="px-5 sm:mx-20 md:mx-20 md:mt-20 text-sm md:text-lg">
        <p className=" text-center w-70 mx-auto mt-30 sm:w-120 md:mt-50">
          Pushing the boundaries of hat&apos;s possible in the digital
          realm.Join us on this journey into the future of technology
        </p>

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
                <div className="text-black rounded-full bg-custom-cyan ">
                  <Check className="p-1" />
                </div>{" "}
                <p className="">Advanced Ai Foundation</p>
              </div>
              <div className="flex gap-4 mt-4">
                <div className="text-black rounded-full bg-custom-cyan ">
                  <Check className="p-1" />
                </div>{" "}
                <p className="">Purpose-Driven</p>
              </div>
              <div className="flex gap-4 mt-4">
                <div className="text-black rounded-full bg-custom-cyan ">
                  <Check className="p-1" />
                </div>{" "}
                <p className="">Continuous Evolution</p>
              </div>
            </div>
          </div>
          {/* image placement */}
          <div className="">
            <Image
              src="/Images/Container.png"
              alt="Container image"
              width={800}
              height={800}
              priority
              className="mx-auto mt-10  border-1  w-[350px] h-[252px] sm:w-[500px] sm:h-[400px] md:w-[550px] md:h-[370px]"
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
                className={`w-25 rounded-md py-1 px-1 text-center ${
                  activeTab === "mission"
                    ? "bg-custom-cyan text-black"
                    : "bg-gray-600 text-white"
                }`}
              >
                Our Mission
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("vision")}
                className={`w-25 rounded-md py-1 px-1 text-center ${
                  activeTab === "vision"
                    ? "bg-custom-cyan text-black"
                    : "bg-gray-600 text-white"
                }`}
              >
                Our Vision
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("goal")}
                className={`w-25 rounded-md py-1 px-1 text-center ${
                  activeTab === "goal"
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

        <div className="bg-gradient-to-b from-gray-800 to-gray-950 py-4   px-2  mt-15 rounded-2xl text-3xl sm:w-105 mx-auto  md:w-140 lg:w-160 xl:w-200">
          <h1 className=" text-center sm:w-72 mx-auto md:w-90 lg:w-100 xl:w-120 xl:text-5xl">
            Ready to
            <span className="[font-family:var(--font-kaushan)] pl-2">
              Manage
            </span>{" "}
            your team like a pro?
          </h1>
          <p className="text-center mt-6 text-lg sm:px-8">
            Pushing the boundaries of what&apos;s possible in the digital real.
            Join us this journey into the future of technology
          </p>
          <div className="bg-custom-cyan w-35 sm:w-45 flex flex-row mx-auto py-2 rounded-xl text-black gap-2  justify-center mt-8 mb-10 text-lg">
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
  );
};

export default Page;
