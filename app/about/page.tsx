"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Check } from "lucide-react";
import Image from "next/image";
import BrandIdentity from "../components/About/BrandIdentity";

const page = () => {
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
        className="relative  flex flex-col h-[30%] text-white"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.98), rgba(0,0,0,0.2)),url('/Images/Glow (1).png'),url('/Images/gauze-10 1.png')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover, 100%",
          height: "500px, 600px",
        }}
      >
        <Navbar />

        <h1 className="text-6xl mt-10 text-center">About</h1>
      </div>
      <div className="px-5">
        <p className=" text-center w-80 mx-auto mt-5">
          Pushing the boundaries of hat's possible in the digital realm.Join us
          on this journey into the future of technology
        </p>

        <div className="flex flex-col">
          {/* flex content place */}
          <div className="">
            <h1 className="text-4xl text-center mt-10">
              Our{" "}
              <span className="[font-family:var(--font-kaushan)] pr-2">
                Story
              </span>{" "}
            </h1>

            <p className="mt-4">
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
              className="mx-auto mt-10  border-1  w-[350px] h-[252px]"
            />
          </div>
        </div>

        <h1 className="text-4xl text-center mt-10">
          Why Choose{" "}
          <span className="[font-family:var(--font-kaushan)] pr-2">
            Ceylon Developers?
          </span>{" "}
        </h1>

        <div>
          {/* container 1 */}
          <div className=" ">
            {/*outer-line*/}
            <div className="rounded-3xl w-84 p-[1px] bg-gradient-to-t from-cyan-600 to-cyan-900  mt-10">
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
            <div className="rounded-3xl w-84 p-[1px] bg-gradient-to-t from-cyan-600 to-cyan-900  mt-10">
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

          {/* container 3 */}
          <div className=" ">
            {/*outer-line*/}
            <div className="rounded-3xl w-84 p-[1px] bg-gradient-to-t from-cyan-600 to-cyan-900  mt-10">
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
            <div className="rounded-3xl w-84 p-[1px] bg-gradient-to-t from-cyan-600 to-cyan-900  mt-10">
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

        {/* Mission , Goal , Vision represent */}
        <div>
          <div>
            {/* Tabs */}
            <div className="mt-10 flex flex-row gap-4">
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
            <h1 className="text-xl w-60 mt-5">{content[activeTab].title}</h1>
            <p className="w-90 text-base mt-5">{content[activeTab].text}</p>
          </div>
          {/* Image Placement */}
          <div className="">
            <Image
              src="/Images/Card.png"
              alt="Card"
              width={200}
              height={200}
              priority
              className="mx-auto mt-5 w-80"
            />
          </div>
        </div>

        {/* The identity of our brand */}
        {/* <BrandIdentity/> */}
      </div>
    </div>
  );
};

export default page;
