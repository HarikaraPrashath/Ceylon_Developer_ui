import Image from "next/image";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ServicesSwiper from "./components/Home/Swiper";
import Implement from "./components/Home/Implement";
import Worlflow from "./components/Home/Worlflow";
import Review from "./components/Home/Review";
import Help from "./components/Home/Help";
import Technologies from "./components/Home/Technologies";

const page = () => {
  return (
    <div className="mx-auto text-white max-w-[1440px]">
      <div className=" bg-black items-center ">
        {/* Container with multiple backgrounds */}
        <div
          className="relative  flex flex-col "
          style={{
            backgroundImage: `url('/Images/Glow.png'), url('/Images/Vector.png')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover, 80%",
            height: "600px, 600px",
          }}
        >
          {/* Navigation Bar */}
          <Navbar />
          <div className="px-4 py-2 rounded-3xl border border-gray-700 bg-gray-400/20 w-fit text-center text-gray-200  mx-auto mt-10 sm:w-90 text-sm  ">
            Bring your business to the best scale
          </div>

          <div className="text-center mt-6">
            <p className="text-4xl leading-tight font-medium sm:text-5xl 2xl:text-9xl lg:text-6xl xl:text-8xl xl:leading-[1.1]">
              Crafting <span className="custom-cyan">Digital</span>
              <br className="" />
              <span className=""> </span>Excellence
            </p>
          </div>

          <p className="mx-auto text-center mt-5 max-w-2xl text-sm px-4 sm:text-base sm:px-2 lg:text-lg max-[376px]:w-76 sm:w-90 lg:w-150  ">
            Pushing the boundaries of what&apos;s possible in the digital us on
            this journey into the future of technology
          </p>

          {/* Buttons + Users */}
          <div className="flex flex-col-reverse items-center mt-10 space-y-3  sm:flex-row  sm:space-y-0 mx-auto ">
            {/* Learn More button (below on mobile, left on bigger screens) */}
            <div className="bg-custom-cyan text-black w-30 rounded-sm text-center py-1.5 mt-5 sm:mb-5 text-sm">
              <button type="submit" className="font-semibold">
                Learn more
              </button>
            </div>

            {/* Users + Trust copy (stack on mobile, row on bigger screens) */}
            <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 min-[375px]:flex-row gap-3 min-[375px]:ml-10 min-[375px]:w-[300px]">
              {/* Users image */}
              <Image
                src="/Images/Group 31.png"
                alt="users"
                width={80}
                height={80}
                priority
                className="ml-0 w-[96px] h-auto sm:ml-2 sm:w-[80px]"
              />

              {/* Trust copy */}
              <p className="mt-0 ml-0 text-center text-sm sm:text-left sm:-mt-1.5 sm:-ml-3 sm:text-base  min-[375px]:-mt-3">
                Trusted by over +20K <br className="block sm:hidden" />
                people in the world
              </p>
            </div>
          </div>

          <Image
            src="/Images/Line 4.png"
            alt="Horizontal Line"
            width={200}
            height={200}
            priority
            className="mx-auto mt-15 xl:w-130 xl:h-4 lg:w-110 lg:h-3 "
          />
        </div>

        <ServicesSwiper />

        {/* Activities */}

        <div className=" mx-9 max-w-[1440px] relative md:mt-50 lg:-mt-40 xl:mt-10 2xl:mt-40 mt-50">
          <div className="lg:flex lg:flex-row xl:ml-50 -mt-40  2xl:-mt-100  xl:mt-10 ">
            <div className="">
              <div className="text-center mt-8 lg:text-start  ">
                <h1 className="text-3xl sm:w-90 sm:mx-auto ">
                  <span className="">
                    To upscale your
                    <span className="[font-family:var(--font-kaushan)] px-2">
                      business
                    </span>
                  </span>
                  <span className="">to the next level</span>
                </h1>
              </div>

              <div className="">
                <p className="text-center my-5 md:w-150 md:mx-auto lg:text-start lg:w-90">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua invidunt ut labore.
                </p>

                <p className="flex text-sm gap-3 py-1">
                  <Image
                    src="/Images/TikButton.png"
                    alt="Tick icon"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  Project template to kick-start a new project
                </p>

                <p className="flex text-sm gap-3 py-1">
                  <Image
                    src="/Images/TikButton.png"
                    alt="Tick icon"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  Clone task to speed your time to action
                </p>

                <p className="flex text-sm gap-3 py-1">
                  <Image
                    src="/Images/TikButton.png"
                    alt="Tick icon"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  Communication and collaborate with your team and clients
                </p>

                <p className="flex text-sm gap-3 py-1">
                  <Image
                    src="/Images/TikButton.png"
                    alt="Tick icon"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  Time tracking for the whole team
                </p>
              </div>
            </div>
            <div className=" lg:w-120">
              {/* Show Activities.svg below points on smaller screens */}
              <div className=" mt-5 w-90 h-90 sm:w-120 sm:mx-25 md:w-140 lg:w-120 lg:mt-10">
                <Image
                  src="/Images/Activities.svg"
                  alt="Activities"
                  width={800}
                  height={600}
                  className=" "
                />
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="-mt-20 lg:mt-10">
          <h1 className=" text-3xl  text-center lg:text-4xl ">
            Our{" "}
            <span className="[font-family:var(--font-kaushan)]">design</span>{" "}
            and <br />
            <span className="[font-family:var(--font-kaushan)]">
              development
            </span>{" "}
            approach
          </h1>

          {/* Reserve consistent space for the image block to prevent layout shifts */}
          <div className="mx-auto mt-` w-full max-w-[1000px]">
            {/* Desktop/Laptop: lg and up (≥1024px, includes 1440px+) */}
            <Image
              src="/Images/roadmap.png"
              alt="Roadmap"
              width={1000}
              height={1000}
              className="block lg:block hidden lg:-mt-25"
              priority
            />

            {/* Tablet: md (≥768px and <1024px) */}
            <Image
              src="/Images/roadmap2.png"
              alt="Roadmap 2"
              width={1000}
              height={1000}
              className="hidden md:block lg:hidden md:-mt-40"
              priority
            />

            {/* Small: sm (≥640px and <768px) */}
            <Image
              src="/Images/roadmap1.png"
              alt="Roadmap 1"
              width={1000}
              height={1000}
              className="hidden sm:block md:hidden"
              priority
            />

            {/* Extra small: <640px (covers 375px and below) */}
            <Image
              src="/Images/roadmap3.png"
              alt="Roadmap 3"
              width={1000}
              height={1000}
              className="block sm:hidden"
              priority
            />
          </div>
        </div>

        <Implement />
        {/* line  */}
        <Image
          src="/Images/cureveLine.png"
          alt="cureveLine"
          width={1000}
          height={1000}
          className="w-[2000px] mx-auto"
          priority
        />

        <Worlflow />

        {/* line  */}
        <Image
          src="/Images/cureveLine.png"
          alt="cureveLine"
          width={1000}
          height={1000}
          className="w-[2000px] mx-auto mb-10"
          priority
        />

        <Technologies />

        <div className="mt-10 md:mx-5 xl:mt-15 lg:mx-30">
          <div className="flex flex-col lg:flex-row gap-10 w-full xl:gap-0">
            {/* Left section */}
            <div className=" lg:w-[40%]  xl:ml-10">
              <h1 className="text-4xl text-center max-[371px]:mt-5 sm:text-3xl md:text-4xl 2xl:text-4xl  xl:text-4xl">
                Get
                <span className="[font-family:var(--font-kaushan)] pr-2">
                  Touch
                </span>
              </h1>
              <p className="m-5 text-center xl:text-xl xl:text-start">
                We&apos;re here to support you! Feel free to reach out for
                assistance, feedback, or any questions.
              </p>
              <h1 className=" ml-4 md:ml-10 sm:ml-10">
                Let&apos;s Talk About:
              </h1>

              <div className="space-y-5 mt-7 xl:ml-5 mx-10">
                <div className="flex flex-row items-center bg-gray-700  py-2 rounded-3xl w-full sm:w-max xl:w-max px-5">
                  <div className="rounded-full p-1 bg-custom-cyan">
                    {/* arrow icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                  <p className=" pl-3 ">Customer Experience</p>
                </div>

                <div className="flex flex-row items-center bg-gray-700  py-2 rounded-3xl w-full sm:w-max xl:w-max px-5 ">
                  <div className="rounded-full p-1 bg-custom-cyan">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                  <p className="pl-3">Quality and Trust</p>
                </div>

                <div className="flex flex-row items-center bg-gray-700  py-2 rounded-3xl w-full sm:w-max xl:w-max px-5 ">
                  <div className="rounded-full p-1 bg-custom-cyan">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                  <p className="pl-3">Dependable Service</p>
                </div>
              </div>
            </div>

            {/* Right section (form) */}
            <div className="border-2 border-custom-cyan/60 py-5 px-5 rounded-2xl lg:w-1/2 lg:ml-20 md:mx-10 mx-4 sm:mx-10">
              <h1 className="text-lg mb-2 ">Get a quote</h1>
              <p className="text-base text-gray-300 xl:text-xl">
                Fill up the form and our Team will get back to you within 24
                hours.
              </p>

              <form className="mt-5 space-y-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-gray-500 w-full rounded-xl py-2 px-4 text-sm"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-500 w-full rounded-xl py-2 px-4 text-sm"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="bg-gray-500 w-full rounded-xl py-2 px-4 text-sm"
                />
                <textarea
                  placeholder="Your message"
                  className="bg-gray-500 h-20 w-full rounded-xl py-2 px-4 text-sm "
                ></textarea>

                <button
                  type="submit"
                  className=" xl:text-lg xl:font-semibold w-full text-center bg-custom-cyan rounded-xl py-2 text-sm text-black hover:bg-custom-cyan/80 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <Review />

        <Help />

        <div className="bg-gradient-to-b from-gray-800 to-gray-950 py-2  pt-10 px-4 mx-6 mt-15 rounded-2xl sm:mx-26 sm:px-10 xl:mx-60 xl:pt-6">
          <h1 className="max-[376px]:text-3xl text-center max-[376px]:mt-5 sm:text-3xl md:text-4xl xl:text-4xl">
            Ready to
            <span className="[font-family:var(--font-kaushan)] pr-2">
              Manage
            </span>{" "}
            your team like a pro?
          </h1>

          <p className="text-center mt-6 xl:text-xl ">
            Pushing the boundaries of what&apos;s possible in the digital real.
            Join us this journey into the future of technology
          </p>

          <div className="bg-custom-cyan text-black w-30  xl:text-xl text-center mx-auto m-5 rounded-lg py-1 font-semibold xl:w-40 xl:mt-10">
            <button type="button">Get Start</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
