import Image from "next/image";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ServicesSwiper from "./components/Home/Swiper";
import Implement from "./components/Home/Implement";
import Worlflow from "./components/Home/Worlflow";
import Review from "./components/Home/Review";
import Help from "./components/Home/Help";
import Technologies from "./components/Home/Technologies";
import { ArrowRight } from "lucide-react";

const page = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen border-4 border-white dark:border-hidden">
      {/* was bg-black; now adapts */}
      <div className="bg-white dark:bg-black items-center">
        {/* Container with multiple backgrounds */}
        <div
          className="relative flex flex-col"
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

          {/* chip: readable in both modes */}
          <div className="px-4 py-2 rounded-3xl border border-gray-300 dark:border-gray-700 bg-gray-100/60 dark:bg-gray-400/20 w-fit text-center text-gray-800 dark:text-gray-200 mx-auto mt-10 sm:w-90 text-sm">
            Bring your business to the best scale
          </div>

          <div className="text-center mt-6">
            <p className="text-4xl leading-tight font-medium sm:text-5xl 2xl:text-9xl lg:text-6xl xl:text-8xl xl:leading-[1.1]">
              Crafting <span className="custom-cyan">Digital</span>
              <br className="" />
              <span className=""> </span>Excellence
            </p>
          </div>

          <p className="mx-auto text-center mt-5 max-w-2xl text-sm px-4 sm:text-base sm:px-2 lg:text-lg max-[376px]:w-76 sm:w-90 lg:w-150">
            Pushing the boundaries of what&apos;s possible in the digital us on
            this journey into the future of technology
          </p>

          {/* Buttons + Users */}
          <div className="flex flex-col-reverse items-center mt-10 space-y-3 sm:flex-row sm:space-y-0 mx-auto">
            <div className="bg-custom-cyan text-black w-30 rounded-sm text-center py-1.5 mt-5 sm:mb-5 text-sm">
              <button type="submit" className="font-semibold cursor-pointer px-4">
                Learn more
              </button>
            </div>

            <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 min-[375px]:flex-row gap-3 min-[375px]:ml-10 min-[375px]:w-[300px]">
              <Image
                src="/Images/Group 31.png"
                alt="users"
                width={90}
                height={90}
                priority
              />
              <p className="mt-0 ml-0 text-center text-sm sm:text-left sm:-mt-1.5 sm:-ml-3 sm:text-base min-[375px]:-mt-3">
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
            className="mx-auto mt-15 xl:w-130 xl:h-4 lg:w-110 lg:h-3"
          />
        </div>

        <ServicesSwiper />

        {/* Activities */}
        <div className="mx-3 2xl:mx-30 max-w-[1440px] relative ">
          <div className="lg:flex lg:flex-row xl:ml-50  ">
            <div className="">
              <div className="text-center mt-8 lg:text-start">
                <h1 className="text-3xl sm:w-90 sm:mx-auto">
                  <span className="">
                    To upscale your
                    <span className="[font-family:var(--font-kaushan)] px-2">business</span>
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
                  <Image src="/Images/TikButton.png" alt="Tick icon" width={20} height={20} className="w-5 h-5 dark:text-black" />
                  Project template to kick-start a new project
                </p>

                <p className="flex text-sm gap-3 py-1">
                  <Image src="/Images/TikButton.png" alt="Tick icon" width={20} height={20} className="w-5 h-5" />
                  Clone task to speed your time to action
                </p>

                <p className="flex text-sm gap-3 py-1">
                  <Image src="/Images/TikButton.png" alt="Tick icon" width={20} height={20} className="w-5 h-5" />
                  Communication and collaborate with your team and clients
                </p>

                <p className="flex text-sm gap-3 py-1">
                  <Image src="/Images/TikButton.png" alt="Tick icon" width={20} height={20} className="w-5 h-5" />
                  Time tracking for the whole team
                </p>
              </div>
            </div>

            <div className="lg:w-120">
              <div className="mt-5 w-90 h-90 sm:w-120 sm:mx-25 md:w-140 lg:w-120 lg:mt-10">
                <Image src="/Images/Activities.svg" alt="Activities" width={800} height={600} className="hidden dark:block" />
                <Image src="/Images/DarkMode-action-section.png" alt="Activities" width={800} height={600} className="block dark:hidden" />
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="-mt-10 lg:mt-10 md:mt-40 sm:mt-20">
          <h1 className="text-3xl text-center lg:text-4xl">
            Our <span className="[font-family:var(--font-kaushan)]">design</span> and <br />
            <span className="[font-family:var(--font-kaushan)]">development</span> approach
          </h1>

          <div className="mx-auto mt-6 md:mt-50 w-full max-w-[1000px]">
            {/* Light mode (large screens only) */}
            <Image
              src="/Images/desktop-dark-roadmap.png"
              alt="Roadmap Light"
              width={1000}
              height={1000}
              className="hidden lg:block dark:hidden lg:-mt-25 "
              priority
            />

            {/* Dark mode (large screens only) */}
            <Image
              src="/Images/roadmap.png"
              alt="Roadmap Dark"
              width={1000}
              height={1000}
              className="hidden lg:dark:block lg:-mt-25 "
              priority
            />
            {/* -------------------------------------------------- */}
            {/* Light mode (medium screens only) */}
            <Image
              src="/Images/md-dark-roadmap.png"
              alt="Roadmap 2 Light"
              width={1000}
              height={1000}
              className="hidden md:block lg:hidden dark:hidden md:-mt-40"
              priority
            />

            {/* Dark mode (medium screens only) */}
            <Image
              src="/Images/roadmap2.png"
              alt="Roadmap 2 Dark"
              width={1000}
              height={1000}
              className="hidden md:dark:block lg:dark:hidden md:-mt-40  "
              priority
            />

            {/* Light mode (small screens only) */}
            <Image
              src="/Images/sm-dark-roadmap.png"
              alt="Roadmap 1 Light"
              width={1000}
              height={1000}
              className="hidden sm:block md:hidden dark:hidden"
              priority
            />

            {/* Dark mode (small screens only) */}
            <Image
              src="/Images/roadmap1.png"
              alt="Roadmap 1 Dark"
              width={1000}
              height={1000}
              className="hidden sm:dark:block  md:dark:hidden md:hidden"
              priority
            />
            {/* Light mode (mobile only) */}
            <Image
              src="/Images/mobile-dark-roadmap.png"
              alt="Roadmap 3 Light"
              width={1000}
              height={1000}
              className="block sm:hidden dark:hidden"
              priority
            />

            {/* Dark mode (mobile only) */}
            <Image
              src="/Images/roadmap3.png"
              alt="Roadmap 3 Dark"
              width={1000}
              height={1000}
              className="hidden dark:block  sm:dark:hidden sm:hidden"
              priority
            />


          </div>
        </div>

        <Implement />

        {/* line */}
        <Image src="/Images/cureveLine.png" alt="cureveLine" width={1000} height={1000} className="w-[2000px] mx-auto" priority />

        <Worlflow />

        {/* line */}
        <Image src="/Images/cureveLine.png" alt="cureveLine" width={1000} height={1000} className="w-[2000px] mx-auto mb-10" priority />

        <Technologies />

        <div className="mt-10 md:mx-5 xl:mt-15 lg:mx-30">
          <div className="flex flex-col lg:flex-row gap-10 w-full xl:gap-0">
            {/* Left section */}
            <div className="lg:w-[40%] xl:ml-10">
              <h1 className="text-4xl text-center max-[371px]:mt-5 sm:text-3xl md:text-4xl 2xl:text-4xl xl:text-4xl">
                Get <span className="[font-family:var(--font-kaushan)] pr-2">Touch</span>
              </h1>
              <p className="m-5 text-center xl:text-xl xl:text-start">
                We&apos;re here to support you! Feel free to reach out for assistance, feedback, or any questions.
              </p>
              <h1 className="ml-4 md:ml-10 sm:ml-10">Let&apos;s Talk About:</h1>

              {/* tags: readable in light & dark */}
              <div className="space-y-5 mt-7 xl:ml-5 mx-10">
                <div className="flex flex-row items-center bg-gray-200 dark:bg-gray-700 py-2 rounded-3xl w-full sm:w-max xl:w-max px-5">
                  <div className="rounded-full p-1 bg-custom-cyan flex items-center justify-center">
                    <ArrowRight />
                  </div>
                  <p className="pl-3">Customer Experience</p>
                </div>

                <div className="flex flex-row items-center bg-gray-200 dark:bg-gray-700 py-2 rounded-3xl w-full sm:w-max xl:w-max px-5">
                  <div className="rounded-full p-1 bg-custom-cyan flex items-center justify-center">
                    <ArrowRight />
                  </div>
                  <p className="pl-3">Quality and Trust</p>
                </div>

                <div className="flex flex-row items-center bg-gray-200 dark:bg-gray-700 py-2 rounded-3xl w-full sm:w-max xl:w-max px-5">
                  <div className="rounded-full p-1 bg-custom-cyan flex items-center justify-center">
                    <ArrowRight />
                  </div>
                  <p className="pl-3">Dependable Service</p>
                </div>
              </div>
            </div>

            {/* Right section (form) */}
            <div className="border-2 border-custom-cyan/60 py-5 px-5 rounded-2xl lg:w-1/2 lg:ml-20 md:mx-10 mx-4 sm:mx-10">
              <h1 className="text-lg mb-2">Get a quote</h1>

              {/* helper text contrast */}
              <p className="text-base text-gray-700 dark:text-gray-300 xl:text-xl">
                Fill up the form and our Team will get back to you within 24 hours.
              </p>

              <form className="mt-5 space-y-5">
                <input type="text" placeholder="Name" className="bg-gray-200 dark:bg-gray-500 w-full rounded-xl py-2 px-4 text-sm" />
                <input type="email" placeholder="Email" className="bg-gray-200 dark:bg-gray-500 w-full rounded-xl py-2 px-4 text-sm" />
                <input type="text" placeholder="Subject" className="bg-gray-200 dark:bg-gray-500 w-full rounded-xl py-2 px-4 text-sm" />
                <textarea placeholder="Your message" className="bg-gray-200 dark:bg-gray-500 h-20 w-full rounded-xl py-2 px-4 text-sm" />

                <button
                  type="submit"
                  className="xl:text-lg xl:font-semibold w-full text-center bg-custom-cyan rounded-xl py-2 text-sm text-black hover:bg-custom-cyan/80 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <Review />
        <Help />

        {/* footer block: gradient adapts */}
        <div className="bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-950 py-6 px-4 mx-3 mt-10 rounded-2xl sm:w-[520px] sm:mx-auto lg:w-[640px] xl:w-[760px] transition-colors duration-300">
          <h1 className="text-center text-2xl lg:text-3xl text-gray-800 dark:text-white">
            Ready to <span className="[font-family:var(--font-kaushan)] pr-2">Manage</span> your team like a pro?
          </h1>

          <p className="text-center mt-6 text-gray-700 dark:text-gray-300 w-[240px] sm:w-[360px] mx-auto text-sm">
            Pushing the boundaries of what&apos;s possible in the digital real. Join us this journey into the future of technology
          </p>

          <div className="bg-custom-cyan text-black dark:text-gray-900 w-[120px] text-center mx-auto mt-6 rounded-lg py-2 font-semibold hover:opacity-90 transition">
            <button type="button" className="sm:text-sm">Get Start</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
