"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Podcast, MapPin, Clock12, ChartSpline, ChartArea, BriefcaseBusiness } from "lucide-react";
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
          <h1 className="title text-white h1 sm:h1-sm md:h1-md lg:h1-lg xl:h1-xl 2xl:h1-2xl">Career</h1>
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
          <h1 className="title text-black h1 sm:h1-sm md:h1-md lg:h1-lg xl:h1-xl 2xl:h1-2xl">Career</h1>
        </div>
      )}

      <div className="sub-title-div">
        <p className=" text-center text-gray-700 dark:text-gray-300 body  sm:body-sm  md:body-md lg:body-lg xl:body-xl 2xl:body-2xl mx-2 mt-6 xl:w-[50%] xl:mx-auto xl:-mt-10">
          Pushing the boundaries of what&apos;s possible in the digital realm. Join us on this journey into the future of technology.
        </p>

        {/* main content */}
        <div className="mt-10 mx-4 sm:text-[1rem] md:text-[1.1rem] md:mx-[4rem] 2xl:mx-[6rem] max-w-[1440px] sm:mx-15 xl:mx-50 lg:mx-[0.1rem] ">
          <div className="lg:flex lg:flex-row">
            <div className="text-center mt-8 sm:text-start sm:w-[60%]">
              <h1 className="h2 sm:h2-sm md:h2-md lg:h2-lg xl:h2-xl 2xl:h2-2xl xl:w-[110%]">
                Discover Why{" "}
                <span className="[font-family:var(--font-kaushan)] text-custom-cyan">Ceylon Developers</span> is the Premier Destination for Advancing Your{" "}
                <span className="[font-family:var(--font-kaushan)] text-custom-cyan">Career</span>
              </h1>
            </div>

            <div className="lg:w-200  xl:w-90 xl:ml-20">
              <ul className="mt-6">
                <li className="my-2 h4 sm:h4-sm md:h4-md lg:h4-lg xl:h4-xl 2xl:h4-2xl ">We are growing fast</li>
                <li className="my-2 h4 sm:h4-sm md:h4-md lg:h4-lg xl:h4-xl 2xl:h4-2xl">Flexible hours</li>
                <li className="my-2 h4 sm:h4-sm md:h4-md lg:h4-lg xl:h4-xl 2xl:h4-2xl">Work from anywhere</li>
                <li className="my-2 h4 sm:h4-sm md:h4-md lg:h4-lg xl:h4-xl 2xl:h4-2xl">Paid vacations</li>
              </ul>

              <p className="body  sm:body-sm  md:body-md lg:body-lg xl:body-xl 2xl:body-2xl mb-7 mt-3 sm:w-[70%] lg:w-[110%] text-gray-700 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="mt-2 text-center sm:mt-[1rem] sm:text-start">
                <button
                  type="button"
                  className="bg-custom-cyan hover:bg-cyan-400 cursor-pointer text-black py-2 px-3 rounded-lg font-semibold transition"
                >
                  About Company
                </button>
              </div>
            </div>
          </div>

          {/* Hiring Process Title */}
          <div className="text-center mt-8 mb-3 xl:mt-20">
            <h1 className="h2 sm:h2-sm md:h2-md lg:h2-lg xl:h2-xl 2xl:h2-2xl sm:w-[60%] mx-auto mb-6">
              Our <span className="[font-family:var(--font-kaushan)] text-custom-cyan">Streamlined</span> Hiring Process
            </h1>
          </div>

          {/* hiring steps (mobile/tablet view) */}
          <div className="flex sm:mx-auto sm:justify-center md:hidden">
            <div className="flex flex-col justify-start mt-25 mr-4 gap-8 sm:mt-20">
              {[...Array(5)].map((_, i) => (
                <React.Fragment key={i}>
                  <div className="rounded-full w-3 h-3 bg-cyan-300" />
                  {i < 4 && <div className="rounded-full w-1 h-40 bg-cyan-300 mx-auto" />}
                </React.Fragment>
              ))}
            </div>

            {/* steps content */}
            <div>
              {[
                { icon: Podcast, title: "Apply with Your CV" },
                { icon: ChartSpline, title: "Initial Screen" },
                { icon: ChartArea, title: "Skills Assessment" },
                { icon: Podcast, title: "Interview Process" },
                { icon: BriefcaseBusiness, title: "Final Decision" },
              ].map(({ icon: Icon, title }, i) => (
                <div key={i} className="mb-10">
                  <div className="rounded-xl w-70 sm:w-[25rem] p-[1px] bg-gradient-to-t from-cyan-600 to-cyan-900">
                    <div className="rounded-[calc(1rem-5px)] p-1 bg-white dark:bg-gray-900 text-center sm:px-3 transition">
                      <div className="rounded-full w-10 h-10 bg-gray-800 flex items-center justify-center mx-auto my-5">
                        <Icon className="text-custom-cyan w-6 h-6" />
                      </div>
                      <h1 className="text-xl my-3">{title}</h1>
                      <p className="text-sm my-3 text-gray-600 dark:text-gray-300">
                        We begin by understanding your business. Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* hiring steps (desktop view) */}
          <div className="hidden md:flex md:mx-auto md:justify-center lg:gap-10 xl:gap-20 2xl:gap-32">
            <div>
              <div className="mt-55 mr-7">
                <Step icon={ChartSpline} title="Initial Screen" />
              </div>
              <div className="mt-66">
                <Step icon={Podcast} title="Interview Process" />
              </div>
            </div>

            {/* connector line */}
            <div className="flex flex-col justify-start mt-25 mr-4 gap-8 sm:mt-20">
              {[...Array(5)].map((_, i) => (
                <React.Fragment key={i}>
                  <div className="rounded-full w-3 h-3 bg-cyan-300" />
                  {i < 4 && <div className="rounded-full w-1 h-40 bg-cyan-300 mx-auto" />}
                </React.Fragment>
              ))}
            </div>

            <div>
              <div className="mt-3 mb-10">
                <Step icon={Podcast} title="Apply with Your CV" />
              </div>
              <div className="mt-60">
                <Step icon={ChartArea} title="Skills Assessment" />
              </div>
              <div className="mt-66 mb-10">
                <Step icon={BriefcaseBusiness} title="Final Decision" />
              </div>
            </div>
          </div>

          {/* Job Role Cards */}
          <div className="text-center mt-8 mb-6">
            <h1 className="h2 sm:h2-sm md:h2-md lg:h2-lg xl:h2-xl 2xl:h2-2xl">
              Find the <span className="[font-family:var(--font-kaushan)] text-custom-cyan">Best Role</span> for you
            </h1>
          </div>

          {/* Vacancy job cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 max-w-[1440px] mx-auto">
            {[...Array(6)].map((_, i) => (
              <JobCard key={i} />
            ))}
          </div>

          {/* CTA section */}
          <div className="bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950 py-4 px-2 mt-15 rounded-2xl md:w-[90%] md:mx-auto lg:w-[80%] w-[110%] transition-colors duration-500">
            <h1 className="text-center mx-5 h2 sm:h2-sm md:h2-md lg:h2-lg xl:h2-xl 2xl:h2-2xl text-gray-900 dark:text-white">
              Take the{" "}
              <span className="[font-family:var(--font-kaushan)] text-custom-cyan">
                Next Step
              </span>{" "}
              in Your Career
            </h1>
            <p className="text-center mt-6 text-sm text-gray-700 dark:text-gray-300 mx-3">
              Pushing the boundaries of what&apos;s possible in the digital realm. Join us
              on this journey into the future of technology.
            </p>
            <div className="bg-custom-cyan w-35 sm:w-45 flex flex-row mx-auto py-2 rounded-xl text-black gap-2 justify-center mt-8 mb-10 text-lg font-semibold cursor-pointer hover:bg-cyan-400 dark:hover:bg-cyan-300 transition">
              <button type="button">Book a Call</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// reusable components
const Step = ({ icon: Icon, title }) => (
  <div className="rounded-xl w-60 lg:w-[20rem] p-[1px] bg-gradient-to-t from-cyan-600 to-cyan-900">
    <div className="rounded-[calc(1rem-5px)] p-1 bg-white dark:bg-gray-900 text-center transition">
      <div className="rounded-full w-10 h-10 bg-gray-800 flex items-center justify-center mx-auto my-5">
        <Icon className="text-custom-cyan w-6 h-6" />
      </div>
      <h1 className="text-xl my-3">{title}</h1>
      <p className="text-sm my-3 text-gray-600 dark:text-gray-300">
        We begin by understanding your business. Lorem ipsum dolor sit amet.
      </p>
    </div>
  </div>
);

const JobCard = () => (
  <div className=" mx-auto ">
    <div className="rounded-xl sm:w-[27rem] md:w-[30rem] lg:w-[23rem]  p-[1px] bg-gradient-to-t from-gray-600 to-gray-200 dark:from-gray-700 dark:to-gray-900 transition">
      <div className="rounded-[calc(1rem-5px)]  p-1 bg-white dark:bg-gray-900 text-start px-5 transition">
        <h1 className="h4 sm:h4-sm md:h4-md lg:h4-lg xl:h4-xl 2xl:h4-2xl my-3">Software Developer</h1>
        <p className="body  sm:body-sm  md:body-md lg:body-lg xl:body-xl 2xl:body-2xl my-3 text-gray-700 dark:text-gray-300">
          We seek a skilled Software Developer to join our tech team. You will be responsible for developing and maintaining software applications. Strong programming skills and experience with various coding languages are required.
        </p>
        <div className="flex flex-row mb-3 justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <MapPin className="text-custom-cyan w-5" /> <p className="text-sm">Remote</p>
            </div>
            <div className="flex gap-1">
              <Clock12 className="text-custom-cyan w-5" /> <p className="text-sm">Full-Time</p>
            </div>
          </div>
          <button
            type="button"
            className="bg-custom-cyan px-2 py-2 rounded-2xl mt-2 text-black font-semibold cursor-pointer hover:bg-cyan-400 transition"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Page;
